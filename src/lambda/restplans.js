const mongoose = require("mongoose");
const planSchema = new mongoose.Schema({
  title: String,
  date_added: Date,
  percent_complete: Number
});
var Plan = mongoose.model("plans", planSchema);
export async function handler(event, context, callback) {
  try {
    const uri = process.env.MONGO_CONNECTION;
    await mongoose.connect(uri, { useNewUrlParser: true });

    var mesecni = new Plan({
      title: "Mesečni",
      percent_complete: 12.2,
      date_added: new Date()
    });
    await mesecni.save();

    const results = await Plan.find();
    console.log(results);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(results)
    });
  } catch (err) {
    console.log("error accessing plans ", err);
    callback(err);
  }
}
