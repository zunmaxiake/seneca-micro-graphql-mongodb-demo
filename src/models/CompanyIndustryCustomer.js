const mongoose = require("mongoose")
  , Schema = mongoose.Schema;

// 主要客户
const mainCustormerSchema = new Schema({
  name: { type: String, default: "", required: false, comment: '名称' },
  share: { type: Number, min: 0, max: 100, default: "", required: false, comment: '占比' },//按由高到底排序
})

//行业与客户
const companyIndustryCustomerSchema = new Schema({
  companyId: { type: Schema.ObjectId, ref: "Company", comment: '公司id' },
  mainCustormers: [mainCustormerSchema],
  mainMarkets: { type: String, default: "", required: false, comment: '主要市场' },
  cooperateCompanies: { type: String, default: "", required: false, comment: '合作企业' },
  majorProducts: { type: String, default: "", required: false, comment: '主要产品' },
  orderTypes: [String], // '倾向订单类型'
  createdBy: { type: String, default: "", required: false, comment: '创建人' },
  updatedBy: { type: String, default: "", required: false, comment: '更新人' },
}, {
    versionKey: false,
    timestamps: true,
  });

const CompanyIndustryCustomer = mongoose.model('CompanyIndustryCustomer', companyIndustryCustomerSchema);

module.exports = CompanyIndustryCustomer;