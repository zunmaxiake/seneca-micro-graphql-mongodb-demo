import models from "./models";
const path = require("path");

module.exports = function (options) {
  const Plugin = require("./common/plugin")
  const controllerPath = path.join(__dirname, "/controllers/");
  const moduleName = "sourcing";
  Plugin.loadControllers(this, models, controllerPath, moduleName);
}