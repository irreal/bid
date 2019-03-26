const mongoose = require("mongoose");
const planSchema = new mongoose.Schema({
  title: String,
  date_added: Date,
  percent_complete: Number
});
var Plan = mongoose.model("plans", planSchema);
export async function handler(event, context, callback) {
  return new Promise(async resolve => {
    try {
      const uri = process.env.MONGO_CONNECTION;
      await mongoose.connect(uri, { useNewUrlParser: true });

      // var mesecni = new Plan({
      //   title: "Mesečni",
      //   percent_complete: 12.2,
      //   date_added: new Date()
      // });
      // await mesecni.save();

      const results = await Plan.find();
      console.log(results);
      console.log("pre cb-a");
      await mongoose.connection.close();
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(results)
      });
      console.log("posle cb-a");
      resolve();
    } catch (err) {
      await mongoose.connection.close();
      console.log("error accessing plans ", err);
      callback(err);
      resolve();
    }
  });
}
