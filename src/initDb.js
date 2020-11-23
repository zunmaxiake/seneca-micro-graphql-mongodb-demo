export const createCompanies = (models) => {

  const company = new models.Company({
    title: '东莞市新光五金有限公司',
    introduction: '东莞市新光五金有限公司创建于1996年，位于广东省东莞市长安镇厦岗南面工业区，是一家专业生产箱包、手袋、制鞋、制衣等行业的各种压铸锌合金饰品配件；以及专业生产工业用华司（垫圈）与组合螺丝用华司（垫圈）、弹垫、挡圈、卡环、E扣、精密电子配件、螺母等各种类型冲压五金配件,另外，我们有四个分厂，涉及模具制造，塑胶零件注塑成型，螺母螺丝加工，数控车床加工件，自动车床加工件,精密进口先进的五轴，四轴，三轴电脑锣加工件。 公司引进台湾先进的专业机器及周边设备，借鉴台湾、香港和大陆数十年之模具制造经验，凭着坚实的研发能力，为客户提供品质优良且价格合理之产品。与客户紧密配合，以满足客户生产需求为己任。',
    logoUrl: '',  //http://localhost:8033/bk/getFile/146.png
    companyNature: '民营',
    area: ['China', 'Japan', 'Korea'],
    establishedYear: '1996',
    creditCode: '123456789123456789',
    internetSide: ' http://www.l-tooling.com',
    shareholders: [{ name: '张三', share: 50 }, { name: '李四 ', share: 25 }, { name: '王五', share: 25 }],
    keyWordClssifacation: ['engineering', 'semiconductor', 'electronics'],
    keyWords: ['工程机械', '汽车', '电子行业', '涂装', '渡银', '镀金'],
    employeeNumber: ' 500-1000',
    RDDesignEmployee: { employeeNumber: '300', share: '10' },
    techEmployee: { employeeNumber: '300', share: '10' },
    QIEmployee: { employeeNumber: '100', share: '10' },
    annualOutputValue: '5000000',
    maxAnnualOutputValue: '5000000',
    importExport: { rights: 'Y', share: 10 },
    keyFeatures: ['smithing', 'plating', 'bearing'],
    factoryArea: '50000',
    certifications: ['ISO9001']
  })

  const attachmentArr = [
    {
      entityId: '5d1c494f252374356417388e',
      entity: "Company",
      type: "CompanyPhotos",
      attachment: [
        {
          fileName: "",
          url: "http://localhost:8033/bk/getFile/111.jpg"
        },
        {
          fileName: "",
          url: "http://localhost:8033/bk/getFile/111.jpg"
        },
        {
          fileName: "",
          url: "http://localhost:8033/bk/getFile/111.jpg"
        },
        {
          fileName: "",
          url: "http://localhost:8033/bk/getFile/111.jpg"
        },
        {
          fileName: "",
          url: "http://localhost:8033/bk/getFile/111.jpg"
        },
        {
          fileName: "",
          url: "http://localhost:8033/bk/getFile/111.jpg"
        },
        {
          fileName: "",
          url: "http://localhost:8033/bk/getFile/111.jpg"
        },
        {
          fileName: "",
          url: "http://localhost:8033/bk/getFile/111.jpg"
        },
      ]
    },
    {
      entityId: '5d1c494f252374356417388e',
      entity: "Attachment",
      type: "CompanyAttachments",
      attachment: [
        {
          fileName: "测试附件名称1",
          url: "http://localhost:8033/bk/getFile/file-1552385938017.txt"
        },
        {
          fileName: "测试附件名称2",
          url: "http://localhost:8033/bk/getFile/file-1552387809601.txt"
        },
        {
          fileName: "测试附件名称3",
          url: "http://localhost:8033/bk/getFile/file-1552387809601.txt"
        },
        {
          fileName: "测试附件名称4",
          url: "http://localhost:8033/bk/getFile/file-1552387809601.txt"
        },
        {
          fileName: "测试附件名称5",
          url: "http://localhost:8033/bk/getFile/file-1552385938017.txt"
        },
        {
          fileName: "测试附件名称6",
          url: "http://localhost:8033/bk/getFile/file-1552385938017.txt"
        },
      ]
    }
  ]

  const subCompanies = new models.SubCompanies({
    companyId: '5d1c494f252374356417388e',
    subCompanies: [
      {
        title: '东莞市新光五金有限公司子公司1',
        country: '中国',
        city: '东莞',
        employeeNumber: 20,
        type: ["xxx", "yyy"]
      },
      {
        title: '东莞市新光五金有限公司子公司2',
        country: '中国',
        city: '东莞',
        employeeNumber: 20,
        type: ["xxx", "yyy"]
      }
    ]
  })

  const companyIndustryCustomer = new models.CompanyIndustryCustomer({
    companyId: '5d1c494f252374356417388e',
    mainCustormers: [
      {
        name: "李磊",
        share: 45,
      },
      {
        name: "章安",
        share: 35,
      },
      {
        name: "李四",
        share: 10,
      },
    ],
    orderTypes: ["小批量多品种", "大批量少品种"],
    mainMarkets: "北美、欧洲",
    cooperateCompanies: "FORI GROUP、Denso、Apple、BD",
    majorProducts: "plastic moulding part，screws，die casting part，stamping，CNC machining part",
  })

  const companyVenueFacilities = new models.CompanyVenueFacilities({
    companyId: '5d1c494f252374356417388e',
    factoryArea: 10000,
    cleanroomGrade: 1,
    cleanroomArea: 500,
    productionWorkshopArea: 3000,
    keyFeatureWorkshopArea: 3000,
    RDFacilitiesArea: 1000,
    desc: '详细描述'
  })

  const companyDeviceArr = [
    {
      companyId: '5d1c494f252374356417388e',
      title: '高速冲床',
      typeName: 'production',
      deviceNumber: 10,
      brandTitle: '力劲',
      typeNumber: 'YK45-85T',
      sizeRange: '45Ton-85Ton',
      precision: 0.1,
      useYears: 3,
      desc: ''
    },
    {
      companyId: '5d1c494f252374356417388e',
      title: '高度计',
      typeName: 'detection',
      deviceNumber: 1,
      brandTitle: '尼康',
      typeNumber: 'MFC-101',
      sizeRange: '',
      precision: 0,
      useYears: 3,
      desc: ''
    },
    {
      companyId: '5d1c494f252374356417388e',
      title: '注塑机',
      typeName: 'RD',
      deviceNumber: 13,
      brandTitle: '力劲',
      typeNumber: 'NisseiNEX80，NEX110T，NEX180T',
      sizeRange: '45Ton-85Ton',
      precision: 0,
      useYears: 0,
      desc: '功能描述'
    }
  ]

  const companyQualitySystem = new models.CompanyQualitySystem({
    companyId: '5d1c494f252374356417388e',
    componentsDefectRate: 1.3,
    assemblyUnitDefectRate: 2.1,
    accurateDeliveryRate: 99,
    certifications: [
      {
        fileName: "xxx",
        qualitySystem: "ISO 9001",
        year: 2015,
        validityDate: '2017-08-17'
      },
      {
        fileName: "xxx",
        qualitySystem: "ISO 9002",
        year: 2015,
        validityDate: '2017-08-17'
      },
      {
        fileName: "xxx",
        qualitySystem: "ISO 9003",
        year: 2015,
        validityDate: '2017-08-18'
      }
    ]
  })

  const companyAppSystem = new models.CompanyAppSystem({
    companyId: '5d1c494f252374356417388e',
    title: "We-Linkin",
    sysType: "专利描述",
    useYear: 2013,
    hardware: "硬件测试",
    software: "软件测试",
    application: "应用测试",
  })

  const companyLogistics = new models.CompanyLogistics({
    companyId: '5d1c494f252374356417388e',
    title: "UPS",
    landTransport: "UPS",
    airTransport: "UPS",
    waterTransport: "UPS",
    insuranceCompany: "平安保险",
  })

  const companyAfterSale = new models.CompanyAfterSale({
    companyId: '5d1c494f252374356417388e',
    globalServiceCenterArea: "中国",
    detailAddress: "上海",
    contactWay: "400-800-5253",
    serviceability: "赞",
    engineersNumber: 10,
    sparePartsNumber: 1000,
  })

  const companyBank = new models.CompanyBank({
    companyId: '5d1c494f252374356417388e',
    currency: '人民币',
    title: '招商银行',
    branchTitle: '招商银行上海七宝支行',
    account: 655213221666,
  })

  const companyContactWay = new models.CompanyContactWay({
    companyId: '5d1c494f252374356417388e',
    name: '张三',
    jobtitle: '市场部',
    tel: '-',
    email: '-',
    legalPersonName: '李四',
    legalPersonTel: '-',
    legalPersonEmail: '-',
  })

  const companyIP = new models.CompanyIP({
    companyId: '5d1c494f252374356417388e',
    patentLicenseAgreement: '这里是假字',
    patentholderAgreement: '这里是假字',
    crossAgreement: '这里是假字',
    RDPatents: [
      {
        patentNumber: 'CN201621334395.X',
        title: '一种汽车制动能量回收装置',
        patentType: '实用新型专利',
        getDate: '2017-08-17',
      },
      {
        patentNumber: 'CN201621334395.X',
        title: '一种汽车制动能量回收装置',
        patentType: '发明专利',
        getDate: '2010-07-26',
      }
    ]
  })

  await company.save();
  await models.Attachment.insertMany(attachmentArr);
  await subCompanies.save();
  await companyIndustryCustomer.save();
  await companyVenueFacilities.save();
  await models.CompanyDevice.insertMany(companyDeviceArr);
  await companyQualitySystem.save();
  await companyAppSystem.save();
  await companyLogistics.save()
  await companyAfterSale.save()
  await companyBank.save()
  await companyContactWay.save()
  await companyIP.save()
}

export const createCategories = (models) => {
  const categories = [
    {
      type: 'gongyi',
      codeValues: [
        { code: 'machining', value_cn: '机加工' },
        { code: 'cast', value_cn: '铸造' },
        { code: 'punch', value_cn: '冲压' },
        { code: 'plating', value_cn: '镀金' },
        { code: 'plastics', value_cn: '塑胶' },
        { code: 'smithing', value_cn: '锻造' },
        { code: 'mould', value_cn: '模具' },
        { code: 'spring', value_cn: '弹簧' },
        { code: 'bearing', value_cn: '轴承' },
        { code: 'fitting', value_cn: '装配' },
        { code: 'surface', value_cn: '表面处理' },
      ]
    },
    {
      type: 'industry',
      codeValues: [
        {
          code: 'chemical',
          value_cn: '化工',
          children: [
            {
              code: 'a',
              value_cn: 'a',
              children: [
                {
                  code: 'a1',
                  value_cn: 'a1',
                  children: [],
                }
              ]
            },
            {
              code: 'b',
              value_cn: 'b',
              children: [],
            },
          ]
        },
        { code: 'electronics', value_cn: '电子电器', children: [], },
        { code: 'chemistry', value_cn: '化学', children: [], },
        { code: 'engineering', value_cn: '工程', children: [], },
        { code: 'precision_machining', value_cn: '精密加工', children: [], },
        { code: 'New_material', value_cn: '新材料', children: [], },
        { code: 'OEM', value_cn: 'OEM厂商', children: [], },
        { code: 'Fab', value_cn: 'Fab厂商', children: [], },
        { code: 'outsource', value_cn: '外包加工', children: [], },
        { code: 'chemical_gas', value_cn: '化学气体', children: [], },
        { code: 'semiconductor', value_cn: '半导体', children: [], },
      ]
    },
    {
      type: 'companyNature',
      codeValues: [
        { code: 'PE', value_cn: '私企', value_en: 'private enterprises' },
        { code: 'SE', value_cn: '国企', value_en: 'state-owned enterprise' },
      ]
    },
    {
      type: 'factoryArea',
      codeValues: [
        { code: '1000', value_en: '0~1000㎡' },
        { code: '3000', value_en: '1000㎡~3000㎡' },
        { code: '5000', value_en: '3000㎡~5000㎡' },
        { code: '10000', value_en: '5000㎡~10000㎡' },
        { code: '30000', value_en: '10000㎡~30000㎡' },
        { code: '30001', value_cn: '30000㎡以上', value_en: 'above 30000㎡' },
      ]
    },
    {
      type: 'cleanroomGrade',
      codeValues: [
        { code: '100', value_cn: '100级', value_en: 'level 100' },
      ]
    },
    {
      type: 'employeeNumber',
      codeValues: [
        { code: '50', value_cn: '50人以下', value_en: 'less 50' },
        { code: '100', value_cn: '51~100人', value_en: '51~100m' },
        { code: '300', value_cn: '101~300人', value_en: '101~300m' },
        { code: '500', value_cn: '301~500人', value_en: '301~500m' },
        { code: '1000', value_cn: '501~1000人', value_en: '501~1000m' },
        { code: '5000', value_cn: '1001~5000人', value_en: '1001~5000m' },
        { code: '5001', value_cn: '5000人以上', value_en: 'above 5000' },
      ]
    },
    {
      type: 'annual',
      codeValues: [
        { code: '5000000', value_en: '0~5,000,000' },
        { code: '10000000', value_en: '5,000,001-10,000,000' },
      ]
    },
    {
      type: 'importExportRights',
      codeValues: [
        { code: 'Y', value_cn: '是' },
        { code: 'N', value_cn: '否' },
      ]
    },
    {
      type: 'importExportShare',
      codeValues: [
        { code: '0', value_cn: '0%' },
        { code: '5', value_cn: '5%' },
      ]
    },
    {
      type: 'mainCustormerShare',
      codeValues: [
        { code: '0', value_cn: '0%' },
        { code: '5', value_cn: '5%' },
      ]
    },
    {
      type: 'orderType',
      codeValues: [
        { code: 'largemany', value_cn: '实用新型专利', value_en: 'Large quantity and variety' },
      ]
    },
    {
      type: 'researchNumber',
      codeValues: [
        { code: '5', value_en: '1-5' },
        { code: '10', value_en: '6-10' },
        { code: '20', value_en: '11-20' },
        { code: '50', value_en: '21-50' },
        { code: '51', value_cn: '51以上', value_en: 'above 50' },
      ]
    },
    {
      type: 'certification',
      codeValues: [
        { code: 'ISO9001', value_en: 'ISO9001' },
        { code: 'ISO9002', value_en: 'ISO9002' },
      ]
    },
    {
      type: 'more',
      codeValues: [
        { code: 'factoryArea', value_cn: '工厂面积' },
        { code: 'employeeNumber', value_cn: '雇员数量' },
        { code: 'annual', value_cn: '年产值' },
        { code: 'researchNumber', value_cn: '科研人数' },
        { code: 'certification', value_cn: '资质认证' },
      ]
    },
    {
      type: 'useYears',
      codeValues: [
        { code: '1', value_cn: '1' },
        { code: '2', value_cn: '2' },
      ]
    },
    {
      type: 'certifacteYears',
      codeValues: [
        { code: '2015', value_cn: '2015' },
        { code: '2016', value_cn: '2016' },
      ]
    },
    {
      type: 'patentTypes',
      codeValues: [
        { code: 'largemany', value_cn: '实用新型专利', value_en: 'Large quantity and variety' },
      ]
    },
    {
      type: 'sysTypes',
      codeValues: [
        { code: 'MES', value_cn: 'MES' },
      ]
    },
    {
      type: 'currency',
      codeValues: [
        { code: 'CNY', value_cn: '人民币' },
        { code: 'USD', value_cn: '美元' },
      ]
    },
    {
      type: 'subCompanyTypes',
      codeValues: [
        { code: 'RD', value_cn: '研发', value_en: 'research and development' },
      ]
    },
    {
      type: 'cities',
      codeValues: [
        { code: 'bj', value_cn: '北京', value_en: 'beijing' },
      ]
    }
  ]
  await models.Category.insertMany(categories);
}