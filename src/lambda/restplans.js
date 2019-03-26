const mongoose = require("mongoose");
const planSchema = new mongoose.Schema({
  title: String,
  date_added: Date,
  percent_complete: Number,
  created_by: String,
  allowed_roles: [String],
  allowed_users: [String]
});
var Plan = mongoose.model("plans", planSchema);
export async function handler(event, context, callback) {
  const {
    identity,
    user
  } = context.clientContext;
  console.log('user je', user);
  if (!user) {
    callback(null, {
      statusCode: 401,
      body: "missing client context"
    })
    return;
  }
  try {
    const uri = process.env.MONGO_CONNECTION;
    await mongoose.connect(uri, {
      useNewUrlParser: true
    });

    // var mesecni = new Plan({
    //   title: "Mesečni",
    //   percent_complete: 12.2,
    //   date_added: new Date()
    // });
    // await mesecni.save();

    let filter = {};
    if (!user.app_metadata.roles.includes('adminB')) {
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
            allowed_users : user.email
          }
        ]
      };
    }
    const results = await Plan.find(filter, '_id title percent_complete');
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