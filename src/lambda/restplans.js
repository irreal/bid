export async function handler(event, context, callback) {
  try {
    // console.log(event);
    const MongoClient = require("mongodb").MongoClient;
    const uri = process.env.MONGO_CONNECTION;
    const dbName = process.env.MONGO_DB;
    console.log(uri);
    const client = await MongoClient.connect(uri, { useNewUrlParser: true });

    const collection = client.db(dbName).collection("plans");

    const results = await collection.find({}).toArray();
    console.log(results);
    callback(null, { statusCode: 200, body: JSON.stringify(results) });
  } catch (err) {
    console.log("uhvatio error ", err);
    callback(err);
  }
}
