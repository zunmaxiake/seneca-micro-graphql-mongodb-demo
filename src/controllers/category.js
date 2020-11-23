module.exports = function (seneca, models, moduleName, controller) {
  async function getCategory(msg, done) {
    const type = msg.args.type;
    const result = await models.Category.findOne({ type }, {}, { lean: true });
    done(result);
  }
  seneca.add({ module: moduleName, controller: controller, action: 'getCategory' }, getCategory);
}