import { ApolloServer, gql } from "apollo-server-lambda";

// import plans from "../../tests/unit/fixtures/plans";

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

const typeDefs = gql`
  type Plan {
    title: String
    _id: String
    percent_complete: Float
    created_by: String
  }

  type Query {
    plans: [Plan]
  }
`;

const resolvers = {
  Query: {
    plans: async (_, __, context) => {
      const uri = process.env.MONGO_CONNECTION;
      const user = context.user;
      await mongoose.connect(uri, {
        useNewUrlParser: true
      });
      let filter = {};
      if (
        !user.app_metadata.roles ||
        !user.app_metadata.roles.includes("admin")
      ) {
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
      return results;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: event => {
    return {
      user: event.context.clientContext.user
    };
  }
});

exports.handler = async function(event, context) {
  const { user } = context.clientContext;
  if (!user) {
    return {
      statusCode: 401,
      body: "missing client context"
    };
  }
  return new Promise((yay, nay) => {
    const cb = (err, args) => (err ? nay(err) : yay(args));
    server.createHandler()(event, context, cb);
  });
};
