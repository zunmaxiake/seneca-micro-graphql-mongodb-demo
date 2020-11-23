const mongoose = require("mongoose")
  , Schema = mongoose.Schema;

//应用系统
const companyAppSystemSchema = new Schema({
  companyId: { type: Schema.ObjectId, ref: "Company", comment: '公司id' },
  title: { type: String, default: "", required: false, comment: '系统名称' },
  sysType: { type: String, default: "", required: false, comment: '系统类型' },
  useYear: { type: Number, default: 0, required: false, comment: '使用年份' },
  hardware: { type: String, default: "", required: false, comment: '硬件' },
  software: { type: String, default: "", required: false, comment: '软件' },
  application: { type: String, default: "", required: false, comment: '应用' },
	createdBy: { type: String, default: "", required: false, comment: '创建人' },
  updatedBy: { type: String, default: "", required: false, comment: '更新人' },
}, {
  versionKey: false,
  timestamps: true,
});

const CompanyAppSystem =  mongoose.model('CompanyAppSystem', companyAppSystemSchema);

module.exports = CompanyAppSystem;