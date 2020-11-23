const mongoose = require("mongoose")
  , Schema = mongoose.Schema;

//售后能力
const companyAfterSaleSchema = new Schema({
  companyId: { type: Schema.ObjectId, ref: "Company", comment: '公司id' },
  globalServiceCenterArea: { type: String, default: "", required: false, comment: '全球售后服务中心区域' },
  detailAddress: { type: String, default: "", required: false, comment: '详细地址' },
  contactWay: { type: String, default: "", required: false, comment: '联系方式' },
  serviceability: { type: String, default: "", required: false, comment: '售后服务能力' },
  engineersNumber: { type: Number, default: 0, required: false, comment: '服务工程师数量' },//NUMBER
  sparePartsNumber: { type: Number, default: 0, required: false, comment: '备件数量' },//NUMBER
	createdBy: { type: String, default: "", required: false, comment: '创建人' },
  updatedBy: { type: String, default: "", required: false, comment: '更新人' },
}, {
    versionKey: false,
    timestamps: true,
  });

const CompanyAfterSale =  mongoose.model('CompanyAfterSale', companyAfterSaleSchema);

module.exports = CompanyAfterSale;