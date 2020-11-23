const mongoose = require("mongoose")
  , Schema = mongoose.Schema;

//场地设施
const companyVenueFacilitiesSchema = new Schema({
  companyId: { type: Schema.ObjectId, ref: "Company", comment: '公司id' },
  factoryArea: { type: String, default: "", required: false, comment: '工厂总面积' },  //单位平米
  cleanroomGrade: { type: String, default: "", required: false, comment: '洁净室等级' },
  cleanroomArea: { type: String, default: "", required: false, comment: '洁净室总面积' },
  productionWorkshopArea: { type: String, default: "", required: false, comment: '生产车间总面积' },
  keyFeatureWorkshopArea: { type: String, default: "", required: false, comment: '特殊工艺车间总面积' },
  RDFacilitiesArea: { type: String, default: "", required: false, comment: '研发设施面积' },
  desc: { type: String, default: "", required: false, comment: '其它设施描述' },
  createdBy: { type: String, default: "", required: false, comment: '创建人' },
  updatedBy: { type: String, default: "", required: false, comment: '更新人' },
}, {
  versionKey: false,
  timestamps: true,
});

const CompanyVenueFacilities =  mongoose.model('CompanyVenueFacilities', companyVenueFacilitiesSchema);

export default CompanyVenueFacilities;