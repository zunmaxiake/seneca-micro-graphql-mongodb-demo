const mongoose = require("mongoose")
  , Schema = mongoose.Schema;

//分公司
const subCompanySchema = new Schema({
  title: { type: String, default: "", required: false, comment: '名称' },
  country: { type: String, default: "", required: false, comment: '国家' },
  city: { type: String, default: "", required: false, comment: '城市' },
  employeeNumber: { type: Number, default: 0, required: false, comment: '员工数量' },
  type: [String], // '关键词'
  createdBy: { type: String, default: "", required: false, comment: '创建人' },
  updatedBy: { type: String, default: "", required: false, comment: '更新人' },
}, {
  versionKey: false,
  timestamps: true,
});

const subCompaniesSchema = new Schema({
	companyId: { type: Schema.ObjectId, ref: "Company", comment: '总公司id' },
	subCompanies: [subCompanySchema]
})

const SubCompanies =  mongoose.model('SubCompanies', subCompaniesSchema);

export default SubCompanies;