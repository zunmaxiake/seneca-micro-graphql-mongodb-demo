const mongoose = require("mongoose")
  , Schema = mongoose.Schema;

//银行信息
const companyBankSchema = new Schema({
  companyId: { type: Schema.ObjectId, ref: "Company", comment: '公司id' },
  currency: { type: String, default: "", required: false, comment: '交易币种' },
  title: { type: String, default: "", required: false, comment: '银行名称' },
  branchTitle: { type: String, default: "", required: false, comment: '开户行支行名称' },
  account: { type: String, default: 0, required: false, comment: '账户' },
  createdBy: { type: String, default: "", required: false, comment: '创建人' },
  updatedBy: { type: String, default: "", required: false, comment: '更新人' },
}, {
  versionKey: false,
  timestamps: true,
});

const CompanyBank =  mongoose.model('CompanyBank', companyBankSchema);

module.exports = CompanyBank;