const mongoose = require('mongoose');

export const schema = `
  type ShareHolders {
    name:String
    share:Int
  }
  type Employee {
		employeeNumber: String
		share: Float
	}
	type ImportExport {
		rights: String
		share: Float
	}
	type CompanyAfterSale {
		companyId: String
		globalServiceCenterArea: String
		detailAddress: String
		contactWay: String
		serviceability: String
		engineersNumber: Int
		sparePartsNumber: Int
		createdBy: String
		updatedBy: String
	}
	type CompanyAppSystem {
		companyId: String
		title: String
		sysType: String
		useYear: Int
		hardware: String
		software: String
		application: String
		createdBy: String
		updatedBy: String
	}
	type CompanyBank {
		companyId: String
		currency: String
		title: String
		branchTitle: String
		account: String
		createdBy: String
		updatedBy: String
	}
	type CompanyContactWay {
		companyId: String
		name: String
		jobtitle: String
		tel: String
		email: String
		legalPersonName: String
		legalPersonTel: String
		legalPersonEmail: String
		createdBy: String
		updatedBy: String
	}
	type CompanyDevice {
		companyId: String
		title: String
		typeName: String
		deviceNumber: Int
		brandTitle: String
		typeNumber: String
		sizeRange: String
		precision: Float
		useYears: Int
		desc: String
		createdBy: String
		updatedBy: String
	}
	type MainCustormer {
		name:String
    share:Int
	}
	type CompanyIndustryCustomer {
		companyId: String
		mainCustormers: [MainCustormer]
		mainMarkets: String
		cooperateCompanies: String
		majorProducts: String
		orderTypes: [String]
		createdBy: String
		updatedBy: String
	}
	type RDPatent {
		patentNumber: String
		title: String
		patentType: String
		getDate: String
	}
	type CompanyIP {
		companyId: String
		patentLicenseAgreement: String
		patentholderAgreement: String
		crossAgreement: String
		RDPatents: [RDPatent]
		createdBy: String
		updatedBy: String
	}
	type CompanyLogistics {
		companyId: String
		title: String
		landTransport: String
		airTransport: String
		waterTransport: String
		insuranceCompany: String
		createdBy: String
		updatedBy: String
	}
	type Certification {
		fileName: String
		qualitySystem: String
		year: Int
		validityDate: String
	}
	type CompanyQualitySystem {
		companyId: String
		componentsDefectRate: Float
		assemblyUnitDefectRate: Float
		accurateDeliveryRate: Float
		certifications: [Certification]
		createdBy: String
		updatedBy: String
	}
	type CompanyVenueFacilities {
		companyId: String
		factoryArea: String
		cleanroomGrade: String
		cleanroomArea: String
		productionWorkshopArea: String
		keyFeatureWorkshopArea: String
		RDFacilitiesArea: String
		desc: String
		createdBy: String
		updatedBy: String
	}
	type SubCompany {
		title: String
		country: String
		city: String
		employeeNumber: Int
		type: [String]
		createdBy: String
		updatedBy: String
	}
	type SubCompanies {
		companyId: String
		subCompanies: [SubCompany]
	}
	type Attachments {
		fileName: String
		url: String
	}
	type Attachment {
		entityId: String
		entity: String
		type: String
		attachment: [Attachments]
		createdBy: String
		updatedBy: String
	}
  type Company {
		_id: String
		title: String!
		logoUrl: String
		introduction: String
		companyNature: String
		area: [String]
		establishedYear: String
		creditCode: String
		internetSide: String
		shareholders: [ShareHolders]
		keyWordClssifacation: [String]
		keyWords: [String]
		employeeNumber: String
		RDDesignEmployee: Employee
		techEmployee: Employee
		QIEmployee: Employee
		annualOutputValue: String
		maxAnnualOutputValue: String
		importExport: ImportExport
		keyFeatures: [String] 
		companyAfterSale: CompanyAfterSale
		companyAppSystem: CompanyAppSystem
		companyBank: CompanyBank
		companyContactWay: CompanyContactWay
		companyDevice: [CompanyDevice]
		companyIndustryCustomer: CompanyIndustryCustomer
		companyIP: CompanyIP
		companyLogistics: CompanyLogistics
		companyQualitySystem: CompanyQualitySystem
		companyVenueFacilities: CompanyVenueFacilities
		subCompanies: SubCompanies
		photos:Attachment
		companyAttachments:Attachment
		factoryArea: String
		certifications: [String]
	}
	type PageInfo {
		companies:[Company]
		count:Int
	} 
	type Query {
		companies(keyword: String, gongYiList: String, areaKeyList: String, industryList: String, factory: String, employee: String, annual: String, certification: String, researcher: String, pageSize: Int, pageIndex: Int):PageInfo
		companyDetail(id:String!):Company
	}
`;
export const resolvers = {
	Company: {
		companyAfterSale: async (company, root, {models}) => {
			return await models.CompanyAfterSale.findOne({companyId: mongoose.Types.ObjectId(company._id)})
		},
		companyAppSystem:  async (company, root, {models}) => {
			return await models.CompanyAppSystem.findOne({companyId: mongoose.Types.ObjectId(company._id)})
		},
		companyBank:  async (company, root, {models}) => {
			return await models.CompanyBank.findOne({companyId: mongoose.Types.ObjectId(company._id)})
		},
		companyContactWay:  async (company, root, {models}) => {
			return await models.CompanyContactWay.findOne({companyId: mongoose.Types.ObjectId(company._id)})
		},
		companyDevice:  async (company, root, {models}) => {
			return await models.CompanyDevice.find({companyId: mongoose.Types.ObjectId(company._id)})
		},
		companyIndustryCustomer:  async (company, root, {models}) => {
			return await models.CompanyIndustryCustomer.findOne({companyId: mongoose.Types.ObjectId(company._id)})
		},
		companyIP:  async (company, root, {models}) => {
			return await models.CompanyIP.findOne({companyId: mongoose.Types.ObjectId(company._id)})
		},
		companyLogistics:  async (company, root, {models}) => {
			return await models.CompanyLogistics.findOne({companyId: mongoose.Types.ObjectId(company._id)})
		},
		companyQualitySystem:  async (company, root, {models}) => {
			return await models.CompanyQualitySystem.findOne({companyId: mongoose.Types.ObjectId(company._id)})
		},
		companyVenueFacilities:  async (company, root, {models}) => {
			return await models.CompanyVenueFacilities.findOne({companyId: mongoose.Types.ObjectId(company._id)})
		},
		subCompanies:  async (company, root, {models}) => {
			return await models.SubCompanies.findOne({companyId: mongoose.Types.ObjectId(company._id)})
		},
		photos: async (company, root, {models}) => {
			return await models.Attachment.findOne({
				entityId:mongoose.Types.ObjectId(company._id),
				entity:"Company",
				type:"CompanyPhotos",				
			})
		},
		companyAttachments:async (company, root, {models}) => {
			return await models.Attachment.findOne({
				entityId:mongoose.Types.ObjectId(company._id),
				entity:"Attachment",
				type:"CompanyAttachments",				
			})
		},
	},
	Query: {
        companies: async (parent, {keyword, gongYiList, areaKeyList, industryList, factory, employee, annual, certification, researcher, pageSize, pageIndex}, {models}) => {
			let condition = {};
			if (keyword) condition.keyWords  = {$in: [...keyword.split(',')]}
			if (gongYiList) condition.keyFeatures = {$in: [...gongYiList.split(',')]}
			if (areaKeyList) condition.area = {$in: [...areaKeyList.split(',')]}
			if (industryList) condition.keyWordClssifacation = {$in: [...industryList.split(',')]}
			if (factory) condition['factoryArea'] = factory
			if (employee) condition.employeeNumber = employee
			if (annual) condition.annualOutputValue = annual
			if (certification) condition['certifications'] = {$in: [...certification.split(',')]}
			if (researcher) condition['RDDesignEmployee.employeeNumber'] = researcher

			let companies = await models.Company.find(condition).limit(pageSize || PAGE_SIZE).skip(pageIndex*pageSize)
			let count = await models.Company.countDocuments(condition)
			return { companies, count }
		},
		companyDetail: async (parent, { id }, { models }) => {
			return await models.Company.findById(id, {}, { lean: true });
		}
	}
}