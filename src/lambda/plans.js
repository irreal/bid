const mongoose = require("mongoose");
const planSchema = new mongoose.Schema({
  title: String,
  period_start: Date,
  period_end: Date,
  date_added: Date,
  percent_complete: Number,
  created_by: String,
  allowed_roles: [String],
  allowed_users: [String]
});
var Plan = mongoose.model("plans", planSchema);
export async function handler(event, context, callback) {
  const { user } = context.clientContext;
  if (!user) {
    callback(null, {
      statusCode: 401,
      body: "missing client context"
    });
    return;
  }
  try {
    const uri = process.env.MONGO_CONNECTION;
    await mongoose.connect(uri, {
      useNewUrlParser: true
    });

    if (event.httpMethod === "POST") {
      try {
        const params = JSON.parse(event.body);
        console.log("params: ", params);
        if (!params.title) {
          throw new Error("missing parameter title");
        }
        if (!params.period_start) {
          throw new Error("missing parameter period start");
        }
        if (!params.period_end) {
          throw new Error("missing parameter period end");
        }

        var newPlan = new Plan({
          title: params.title,
          percent_complete: 0,
          period_start: params.period_start,
          period_end: params.period_end,
          date_added: new Date(),
          created_by: user.email
        });
        await newPlan.save();
        callback(null, {
          statusCode: 201,
          body: '"ok"'
        });
      } catch (err) {
        console.log("evo greške, ", err);
        callback(null, {
          statusCode: 400,
          body: `"Invalid request\n${err.toString()}"`
        });
      }
      return;
    }
    if (event.httpMethod !== "GET") {
      callback(null, {
        statusCode: 405
      });
      return;
    }

    let filter = {};
    if (!user.app_metadata.roles.includes("admin")) {
      filter = {
        $or: [
          {
            created_by: user.email
          },
          {
            allowed_roles: {
              $in: user.app_metadata.roles
            }
          },
          {
            allowed_users: user.email
          }
        ]
      };
    }
    const results = await Plan.find(
      filter,
      "_id title percent_complete period_start period_end created_by"
    );
    await mongoose.connection.close();
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(results)
    });
  } catch (err) {
    await mongoose.connection.close();
    console.log("error accessing plans ", err);
    callback(err);
  }
}
