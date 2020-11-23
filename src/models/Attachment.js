const mongoose = require("mongoose")
  , Schema = mongoose.Schema;

// 附件
const attachmentsSchema = new Schema({
  fileName: { type: String, default: "", required: false, comment: '文件名' },
  url: { type: String, default: '', required: false, comment: '相对路径地址' },
})

//附件信息
const attachmentSchema = new Schema({
  entityId: { type: String, default: "", required: false, comment: '公司id，代码' },
  entity: { type: String, default: "", required: false, comment: '表名，如公司，设备等' },
  type: { type: String, default: "", required: false, comment: '企业照片等' },
  attachment: [attachmentsSchema],
  createdBy: { type: String, default: "", required: false, comment: '创建人' },
  updatedBy: { type: String, default: "", required: false, comment: '更新人' },
}, {
    versionKey: false,
    timestamps: true,
  });

const Attachment = mongoose.model('Attachment', attachmentSchema);

module.exports = Attachment;