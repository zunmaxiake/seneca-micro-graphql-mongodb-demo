import { graphql } from "graphql";
import schema from "../schema";

module.exports = function (seneca, models, moduleName, controller) {
  function graphqlHandler(msg, done) {
    const source = msg.args.source;
    const root = null;
    const context = { models };
    const variables = msg.args.variables;
    graphql(schema, source, root, context, variables)
      .then((result) => {
        done(result);
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }
  seneca.add({ module: moduleName, controller: controller }, graphqlHandler)
}