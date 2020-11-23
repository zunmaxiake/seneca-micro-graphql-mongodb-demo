const mongoose = require("mongoose")
  , Schema = mongoose.Schema;

// 质量体系认证
const certificationSchema = new Schema({
  fileName: { type: String, default: "", required: false, comment: '文件名' },
  qualitySystem: { type: String, default: "", required: false, comment: '质量体系' },
  year: { type: Number, default: 0, required: false, comment: '认证年份' },
  validityDate: { type: Date, default: Date.now(), required: false, comment: '有效期' },
})

//质量体系
const companyQualitySystemSchema = new Schema({
  companyId: { type: Schema.ObjectId, ref: "Company", comment: '公司id' },
  componentsDefectRate: { type: Number, min: 0, max: 100, default: 0, required: false, comment: '零件不良率%' },
  assemblyUnitDefectRate: { type: Number, min: 0, max: 100, default: 0, required: false, comment: '装配件的单位缺陷率%' },
  accurateDeliveryRate: { type: Number, min: 0, max: 100, default: 0, required: false, comment: '准确交货率%' },
  certifications: [certificationSchema],
  createdBy: { type: String, default: "", required: false, comment: '创建人' },
  updatedBy: { type: String, default: "", required: false, comment: '更新人' },
}, {
    versionKey: false,
    timestamps: true,
  });

const CompanyQualitySystem = mongoose.model('CompanyQualitySystem', companyQualitySystemSchema);

module.exports = CompanyQualitySystem;