import { graphql } from "graphql";
import schema from "../schema";

module.exports = function (seneca, models, moduleName, controller) {
  function graphqlHandler(msg, done) {
    const query = msg.args.query;
    const root = null;
    const context = { models };
    const variables = msg.args.variables;
    graphql(schema, query, root, context, variables)
      .then((result) => {
        done(result);
      })
  }
  seneca.add({ module: moduleName, controller: controller }, graphqlHandler)
}