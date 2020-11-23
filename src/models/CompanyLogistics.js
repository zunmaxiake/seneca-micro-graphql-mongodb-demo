const mongoose = require("mongoose")
  , Schema = mongoose.Schema;

//物流信息
const companyLogisticsSchema = new Schema({
  companyId: { type: Schema.ObjectId, ref: "Company", comment: '公司id' },
  title: { type: String, default: "", required: false, comment: '物流公司' },
  landTransport: { type: String, default: "", required: false, comment: '陆路运输' },
  airTransport: { type: String, default: "", required: false, comment: '空运' },
  waterTransport: { type: String, default: "", required: false, comment: '水运' },
  insuranceCompany: { type: String, default: "", required: false, comment: '保险公司' },
  createdBy: { type: String, default: "", required: false, comment: '创建人' },
  updatedBy: { type: String, default: "", required: false, comment: '更新人' },
}, {
  versionKey: false,
  timestamps: true,
});

const CompanyLogistics =  mongoose.model('CompanyLogistics', companyLogisticsSchema);

module.exports = CompanyLogistics;