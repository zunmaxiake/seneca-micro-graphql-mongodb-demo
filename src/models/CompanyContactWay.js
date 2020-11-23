const mongoose = require("mongoose")
  , Schema = mongoose.Schema;

//联系方式
const companyContactWaySchema = new Schema({
  companyId: { type: Schema.ObjectId, ref: "Company", comment: '公司id' },
  name: { type: String, default: "", required: false, comment: '联系人姓名' },
  jobtitle: { type: String, default: "", required: false, comment: '联系人职位' },
  tel: { type: String, default: "", required: false, comment: '联系人电话' },
  email: { type: String, default: "", required: false, comment: '联系人邮箱' },
  legalPersonName: { type: String, default: "", required: false, comment: '法人姓名' },
  legalPersonTel: { type: String, default: "", required: false, comment: '法人电话' },
  legalPersonEmail: { type: String, default: "", required: false, comment: '法人邮箱' },
  createdBy: { type: String, default: "", required: false, comment: '创建人' },
  updatedBy: { type: String, default: "", required: false, comment: '更新人' },
}, {
  versionKey: false,
  timestamps: true,
});

const CompanyContactWay =  mongoose.model('CompanyContactWay', companyContactWaySchema);

module.exports = CompanyContactWay;