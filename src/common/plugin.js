module.exports = {
  loadModels: function () {

  },
  loadControllers: function (th, models, controllerPath, moduleName) {
    const fs = require("fs");
    const path = require("path");
    try {
      fs.readdirSync(controllerPath)
        .filter(function (file) {
          return file.indexOf(".") !== 0 && file.slice(-3) === ".js";
        })
        .forEach(function (file) {
          require(path.join(controllerPath, file))(th, models, moduleName, file.split(".")[0]);
        })
    }
    catch (err) {
      console.error("err:", err);
    }
  }
}