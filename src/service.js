const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const config = require("./config/dev");
const schema = require("./schema");
import models from "./models"
const seneca = require("seneca");
// import { createCompanies, createCategories } from './initDb'

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: { models }
  }),
);

const serviceUrl = { port: 8030, type: 'tcp', pin: 'module:sourcing', timeout: 10000 }

mongoose.connect(config.db.url, { useNewUrlParser: true }, () => {
  console.log("mongodb has connected on port:27017");
  // createCompanies(models);
  // createCategories(models);
});

app.listen(3000);

seneca()
  .use("./")
  .listen(serviceUrl)
  .ready(function () {
    console.log("seneca service start on port:8030");
  })
  .error(function (error) {
    console.log("error:", error);
  })