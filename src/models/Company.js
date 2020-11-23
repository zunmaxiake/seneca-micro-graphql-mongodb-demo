const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 股东比例
const shareHolderSchema = new Schema({
  name: { type: String, default: "", required: false, comment: '股东' },
  share: { type: Number, min: 0, max: 100, default: 0, required: false, comment: '比例' },//NUMBER 0-100之间  由高到底排序
})

const employeeSchema = new Schema({
  employeeNumber: { type: String, default: "", required: false, comment: '数量范围' },
  share: { type: Number, min: 0, max: 100, default: 0, required: false, comment: '占比,0-100之间' },
})

//进出口
const importExportSchema = new Schema({
  rights: { type: String, default: "", required: false, comment: '进出口权:Y/N' },
  share: { type: Number, min: 0, max: 100, default: 0, required: false, comment: '出口比例，0-100之间' },
})

//公司
const companySchema = new Schema({
  logoUrl: { type: String, default: "", required: false, comment: '公司logo存储路径' },
  title: { type: String, default: "", required: true, comment: '公司名称' },
  introduction: { type: String, default: "", required: false, comment: '公司介绍' },
  companyNature: { type: String, default: "", required: false, comment: '公司性质' },
  area: [String], // '区域'
  establishedYear: { type: String, default: "", required: false, comment: '成立年份' },
  creditCode: { type: String, default: "", required: false, comment: '信用代码' },
  internetSide: { type: String, default: "", required: false, comment: '网址' },
  shareholders: [shareHolderSchema],
  keyWordClssifacation: [String], // '行业类型'
  keyWords: [String], // '关键词'
  employeeNumber: { type: String, default: "", required: false, comment: '雇员数量范围' },
  RDDesignEmployee: employeeSchema, //研发设计人员
  techEmployee: employeeSchema, //技术人员
  QIEmployee: employeeSchema,  //质检人员
  annualOutputValue: { type: String, default: "", required: false, comment: '近三年平均年产值范围(CNY)' },
  maxAnnualOutputValue: { type: String, default: "", required: false, comment: '最大年产值范围(CNY)' },
  importExport: importExportSchema,
  keyFeatures: [String], // '特殊工艺能力'
  factoryArea: String, // 工厂面积
  certifications: [String], // 质量体系
  createdBy: { type: String, default: "", required: false, comment: '创建人' },
  updatedBy: { type: String, default: "", required: false, comment: '更新人' },
}, {
  versionKey: false,
  timestamps: true,
});

module.exports = mongoose.model("company", companySchema);