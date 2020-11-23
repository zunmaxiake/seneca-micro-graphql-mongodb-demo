const mongoose = require("mongoose")
  , Schema = mongoose.Schema;

//设备
const companyDeviceSchema = new Schema({
  companyId: { type: Schema.ObjectId, ref: "Company", comment: '公司id' },
  title: { type: String, default: "", required: false, comment: '名称' },
  typeName: { type: String, default: "", required: false, comment: '类型名称:生产设备(production)、检测设备(detection)、研发设备(RD))' },
  deviceNumber: { type: Number, default: 0, required: false, comment: '数量' },
  brandTitle: { type: String, default: "", required: false, comment: '品牌名称' },
  typeNumber: { type: String, default: "", required: false, comment: '型号' },
  sizeRange: { type: String, default: "", required: false, comment: '加工尺寸范围(单位：吨)' },
  precision: { type: Number, default: 0, required: false, comment: '加工精度(mm)' },
  useYears: { type: Number, default: 0, required: false, comment: '使用年限' },
  desc: { type: String, default: "", required: false, comment: '功能描述' },
  createdBy: { type: String, default: "", required: false, comment: '创建人' },
  updatedBy: { type: String, default: "", required: false, comment: '更新人' },
}, {
  versionKey: false,
  timestamps: true,
});

const CompanyDevice =  mongoose.model('CompanyDevice', companyDeviceSchema);

module.exports = CompanyDevice;