const mongoose = require("mongoose")
  , Schema = mongoose.Schema;

// 研发专利
const RDPatentSchema = new Schema({
  patentNumber: { type: String, default: "", required: false, comment: '专利号' },
  title: { type: String, default: "", required: false, comment: '专利名称' },
  patentType: { type: String, default: "", required: false, comment: '专利类型' },
  getDate: { type: Date, default: "", required: false, comment: '获取时间' },
})

//知识产权
const companyIPSchema = new Schema({
  companyId: { type: Schema.ObjectId, ref: "Company", comment: '公司id' },
  patentLicenseAgreement: { type: String, default: "", required: false, comment: '专利许可证协议' },
  patentholderAgreement: { type: String, default: "", required: false, comment: '专利持有人协议' },
  crossAgreement: { type: String, default: "", required: false, comment: '交叉协议' },
  RDPatents: [RDPatentSchema],
  createdBy: { type: String, default: "", required: false, comment: '创建人' },
  updatedBy: { type: String, default: "", required: false, comment: '更新人' },
}, {
    versionKey: false,
    timestamps: true,
  });

const CompanyIP =  mongoose.model('CompanyIP', companyIPSchema);

module.exports = CompanyIP;