import mongoose from 'mongoose';

import Company from './Company';
import Attachment from './Attachment';
import CompanyAfterSale from './CompanyAfterSale';
import CompanyAppSystem from './CompanyAppSystem';
import CompanyBank from './CompanyBank';
import CompanyContactWay from './CompanyContactWay';
import CompanyDevice from './CompanyDevice';
import CompanyIndustryCustomer from './CompanyIndustryCustomer';
import CompanyIP from './CompanyIP';
import CompanyLogistics from './CompanyLogistics';
import CompanyQualitySystem from './CompanyQualitySystem';
import CompanyVenueFacilities from './CompanyVenueFacilities';
import SubCompanies from './SubCompanies';
import Category from './category';

const models = {
  Company, Attachment, CompanyAfterSale, CompanyAppSystem, CompanyBank, CompanyContactWay,CompanyDevice, 
  CompanyIndustryCustomer, CompanyIP, CompanyLogistics, CompanyQualitySystem, CompanyVenueFacilities, SubCompanies,
  Category
};

export default models;
