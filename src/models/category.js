const mongoose = require("mongoose")
  , Schema = mongoose.Schema;
  
const codeValueSchema = new Schema({
	code: String,
	value_cn: String,
	value_en: String,
	children:{type:Array,default:[],required:false,comment:'子类'}
})

// 类别
const categorySchema = new Schema({
  type: String, // 工艺-gongyi，地区-area，行业-industry，工厂面积-factoryArea 雇员数量-employeeNumber， 
  				// 年产值-annual， 资质认证-certification， 科研人数-rdNumber
	codeValues: [codeValueSchema],
	createdBy: { type: String, default: "", required: false, comment: '创建人' },
  updatedBy: { type: String, default: "", required: false, comment: '更新人' },
});

const Category = mongoose.model('category', categorySchema);


module.exports = Category