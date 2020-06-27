// mock data to send to our frontend
const events = [
  {
    id: 1,
    name: 'Charity Ball',
    category: 'Fundraising',
    description:
      'Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.',
    featuredImage: 'https://placekitten.com/500/500',
    images: [
      'https://placekitten.com/500/500',
      'https://placekitten.com/500/500',
      'https://placekitten.com/500/500'
    ],
    location: '1234 Fancy Ave',
    date: '12-25-2019',
    time: '11:30'
  },
  {
    id: 2,
    name: 'Rescue Center Goods Drive',
    category: 'Adoptions',
    description:
      'Come to our donation drive to help us replenish our stock of pet food, toys, bedding, etc. We will have live bands, games, food trucks, and much more.',
    featuredImage: 'https://placekitten.com/500/500',
    images: ['https://placekitten.com/500/500'],
    location: '1234 Dog Alley',
    date: '11-21-2019',
    time: '12:00'
  }
]

const formSchema = {
  schema: {
    postCode: {
      type: 'text',
      label: 'Postleitzahl',
      flex: {
        xs: 12,
        sm: 6,
        lg: 6
      },
      rules: ['required', 'maxLen(20)']
    },
    houseNumber: {
      type: 'text',
      label: 'Haus Nummer',
      flex: {
        xs: 12,
        sm: 6,
        lg: 6
      },
      rules: ['required']
    },
    houseName: {
      type: 'text',
      label: 'Haus Name',
      flex: {
        xs: 12,
        sm: 6,
        lg: 6
      },
      rules: ['required']
    },
    streetName: {
      type: 'text',
      label: 'Straße Name',
      selected: 0,
      flex: {
        xs: 12,
        sm: 6,
        lg: 6
      },
      rules: ['required']
    },
    streetAddress: {
      type: 'text',
      label: 'Straße Adresse',
      flex: {
        xs: 12,
        sm: 6,
        lg: 6
      },
      rules: ['required']
    },
    city: {
      type: 'text',
      label: 'Stadt',
      flex: {
        xs: 12,
        sm: 6,
        lg: 6
      },
      rules: ['required']
    }
  },
  model: {
    postCode: '',
    houseNumber: '',
    houseName: '',
    streetName: '',
    streetAddress: '',
    city: ''
  }
}

const stepsSchemaWithForm = {
  steps: [
    {
      id: 1,
      label: 'Personal Details',
      completed: false,
      desc: 'Description',
      enabled: true,
      mandatory: false,
      locale: 'en_US',
      component: [
        {
          name: 'PhotoCapture',
          label: 'PhotoCapture',
          schemaName: '',
          validation: true,
          validationLabel: 'Enable validation'
        },
        {
          name: 'Form',
          label: 'Personal Details',
          icon: 'mdi-account-circle',
          schemaName: 'PersonalDetails',
          validation: true,
          validationLabel: 'Enable validation'
        }
      ]
    },
    {
      id: 2,
      label: 'Address Details',
      completed: false,
      desc: 'Description',
      enabled: true,
      mandatory: true,
      locale: 'en_US',
      component: [
        {
          name: 'Form',
          label: 'Address Details',
          icon: 'mdi-search-web',
          schemaName: 'AddressDetails',
          validation: true,
          validationLabel: 'Enable validation'
        }
      ]
    },
    {
      id: 3,
      label: 'Additional Information',
      completed: false,
      desc: 'Description',
      enabled: true,
      mandatory: true,
      locale: 'en_US',
      component: [
        {
          name: 'Form',
          label: 'Link Nominated Account',
          icon: 'mdi-bank',
          schemaName: 'NominatedAccountDetails',
          validation: true,
          validationLabel: 'Enable validation'
        },
        {
          name: 'Form',
          label: 'Your Tax Details',
          schemaName: 'TaxDetails',
          isExpandable: true,
          validation: true,
          validationLabel: 'Enable validation'
        }
      ]
    },
    {
      id: 4,
      label: 'Review & Consent',
      completed: false,
      desc: 'Description',
      enabled: true,
      mandatory: false,
      icon: 'mdi-clipboard-check',
      locale: 'en_US',
      component: [
        {
          name: 'Form',
          label: 'Form',
          schemaName: '',
          validation: false,
          validationLabel: 'Enable validation'
        }
      ]
    },
    {
      id: 5,
      label: 'Credentials',
      completed: false,
      desc: 'Description',
      enabled: true,
      mandatory: true,
      icon: 'mdi-search-web',
      locale: 'en_US',
      component: [
        {
          name: 'Form',
          label: 'Form',
          schemaName: '',
          validation: false,
          validationLabel: 'Enable validation'
        }
      ]
    }
  ],
  settings: {
    vertical: false
  }
}

const stepConfig = {
  config: {
    PersonalDetails: {
      schema: {
        firstName: {
          type: 'text',
          appendIcon: '',
          label: 'First Name',
          flex: {
            xs: 12,
            sm: 6,
            lg: 6
          },
          rules: ['required', 'maxLen(75)']
        },
        lastName: {
          type: 'text',
          label: 'Last Name',
          flex: {
            xs: 12,
            sm: 6,
            lg: 6
          },
          rules: ['required', 'maxLen(75)']
        },
        birthDate: {
          type: 'text',
          label: 'Date of Birth',
          'data-type': 'date-picker',
          flex: {
            xs: 12,
            sm: 6,
            lg: 6
          },
          rules: ['required']
        },
        nationalIdType: {
          type: 'select',
          label: 'National Id Type',
          selected: 0,
          items: ['PASSPORT', 'Driving License', 'Nation ID'],
          flex: {
            xs: 12,
            sm: 6,
            lg: 6
          },
          rules: ['required']
        },
        nationalIdNumber: {
          type: 'text',
          label: 'National Id Number',
          flex: {
            xs: 12,
            sm: 6,
            lg: 6
          },
          rules: ['required', 'maxLen(50)']
        }
      },
      model: {
        firstName: '',
        lastName: '',
        birthDate: '',
        nationalIdType: '',
        nationalIdNumber: ''
      }
    }
  },
  name: 'PersonalDetails'
}

const formConfig = {
  componentConfig: {
    PersonalDetails: {
      schema: {
        firstName: {
          type: 'text',
          appendIcon: '',
          label: 'First Name',
          flex: {
            xs: 12,
            sm: 6,
            lg: 6
          },
          rules: ['required', 'maxLen(75)']
        },
        lastName: {
          type: 'text',
          label: 'Last Name',
          flex: {
            xs: 12,
            sm: 6,
            lg: 6
          },
          rules: ['required', 'maxLen(75)']
        },
        birthDate: {
          type: 'text',
          label: 'Date of Birth',
          'data-type': 'date-picker',
          flex: {
            xs: 12,
            sm: 6,
            lg: 6
          },
          rules: ['required']
        },
        nationalIdType: {
          type: 'select',
          label: 'National Id Type',
          selected: 0,
          items: ['PASSPORT', 'Driving License', 'Nation ID'],
          flex: {
            xs: 12,
            sm: 6,
            lg: 6
          },
          rules: ['required']
        },
        nationalIdNumber: {
          type: 'text',
          label: 'National Id Number',
          flex: {
            xs: 12,
            sm: 6,
            lg: 6
          },
          rules: ['required', 'maxLen(50)']
        }
      },
      model: {
        firstName: '',
        lastName: '',
        birthDate: '',
        nationalIdType: '',
        nationalIdNumber: ''
      }
    }
  },
  label: 'Personal Details',
  icon: 'mdi-account-circle',
  name: 'PersonalDetails'
}
const genericCodes = [
  {
    id: 'CUSTTYP',
    detail: {
      genericCode: '6857',
      genericCodeValues: [
        {
          codeReference: '1062',
          codeDescription: 'Personal'
        },
        {
          codeReference: '1063',
          codeDescription: 'Enterprise'
        }
      ]
    }
  },
  {
    id: 'PARTYLOCALITYTYPE',
    detail: {
      genericCode: '13148',
      genericCodeValues: [
        {
          codeReference: 'GLOBAL',
          codeDescription: 'Global'
        },
        {
          codeReference: 'LOCALPRIVATE',
          codeDescription: 'Local Private'
        },
        {
          codeReference: 'LOCALPUBLIC',
          codeDescription: 'Local Public'
        }
      ]
    }
  },
  {
    id: 'FATCAREPORTTYPE',
    detail: {
      genericCode: '123',
      genericCodeValues: [
        {
          codeReference: 'FATCA',
          codeDescription: 'FATCA'
        },
        {
          codeReference: 'CRS',
          codeDescription: 'CRS'
        }
      ]
    }
  },
  {
    id: 'FATCACUSTSUBCLASS',
    detail: {
      genericCode: '123',
      genericCodeValues: [
        {
          codeReference: 'NON-FINANCIAL',
          codeDescription: 'Non-Financial Entity'
        },
        {
          codeReference: 'FINANCIAL',
          codeDescription: 'Financial Entity'
        }
      ]
    }
  },
  {
    id: 'FATCAREPORTSTATUS',
    detail: {
      genericCode: '123',
      genericCodeValues: [
        {
          codeReference: 'EXEMPTED',
          codeDescription: 'Exempted'
        },
        {
          codeReference: 'CONSENTRECEIVED',
          codeDescription: 'Consent Received'
        }
      ]
    }
  },
  {
    id: 'EXEMPTIONDOCUMENT',
    detail: {
      genericCode: '123',
      genericCodeValues: [
        {
          codeReference: 'COMPLETED',
          codeDescription: 'Completed'
        },
        {
          codeReference: 'PENDING',
          codeDescription: 'Pending'
        }
      ]
    }
  },
  {
    id: 'DECLARATIONDOCUMENT',
    detail: {
      genericCode: '123',
      genericCodeValues: [
        {
          codeReference: 'COMPLETED',
          codeDescription: 'Completed'
        },
        {
          codeReference: 'PENDING',
          codeDescription: 'Pending'
        }
      ]
    }
  },
  {
    id: 'NATIONALID',
    detail: {
      genericCode: '123',
      genericCodeValues: [
        {
          codeReference: 'Passport', // key
          codeDescription: 'Passport' // value
        },
        {
          codeReference: 'Driving License',
          codeDescription: 'Driving License'
        },
        {
          codeReference: 'National ID',
          codeDescription: 'National ID'
        }
      ]
    }
  },
  {
    id: 'TITLE',
    detail: {
      genericCode: '111',
      genericCodeValues: [
        {
          codeReference: 'Mr', // key
          codeDescription: 'Mr' // value
        },
        {
          codeReference: 'Mrs',
          codeDescription: 'Mrs'
        },
        {
          codeReference: 'Miss',
          codeDescription: 'Miss'
        }
      ]
    }
  },
  {
    id: 'NATIONALITY',
    detail: {
      genericCode: '456',
      genericCodeValues: [
        {
          codeReference: 'Indian', // key
          codeDescription: 'Indian' // value
        },
        {
          codeReference: 'Srilankan',
          codeDescription: 'Srilankan'
        },
        {
          codeReference: 'Afghan',
          codeDescription: 'Afghan'
        }
      ]
    }
  },
  {
    id: 'COUNTRYOFBIRTH',
    detail: {
      genericCode: '789',
      genericCodeValues: [
        {
          codeReference: 'India', // key
          codeDescription: 'India' // value
        },
        {
          codeReference: 'Srilanka',
          codeDescription: 'Srilanka'
        },
        {
          codeReference: 'Afghanisthan',
          codeDescription: 'Afghanisthan'
        },
        {
          codeReference: 'Pakistan',
          codeDescription: 'Pakistan'
        }
      ]
    }
  },
  {
    id: 'GENDER',
    detail: {
      genericCode: '121',
      genericCodeValues: [
        {
          codeReference: 'Male', // key
          codeDescription: 'Male' // value
        },
        {
          codeReference: 'Female',
          codeDescription: 'Female'
        }
      ]
    }
  },
  {
    id: 'RESIDENTSTATUS',
    detail: {
      genericCode: '121',
      genericCodeValues: [
        {
          codeReference: 'Resident', // key
          codeDescription: 'Resident' // value
        },
        {
          codeReference: 'Non-Resident',
          codeDescription: 'Non-Resident'
        }
      ]
    }
  },
  {
    id: 'CIVILSTATUS',
    detail: {
      genericCode: '121',
      genericCodeValues: [
        {
          codeReference: 'Single', // key
          codeDescription: 'Single' // value
        },
        {
          codeReference: 'Married',
          codeDescription: 'Married'
        }
      ]
    }
  },
  {
    id: 'TAXEXEMPTIONSTATUS',
    detail: {
      genericCode: '121',
      genericCodeValues: [
        {
          codeReference: 'R85 - Resident Exemption (EU Tax)', // key
          codeDescription: 'R85 - Resident Exemption (EU Tax)' // value
        },
        {
          codeReference: 'R105 - Non-resident Exemption (EU Tax)',
          codeDescription: 'R105 - Non-resident Exemption (EU Tax)'
        }
      ]
    }
  },
  {
    id: 'COUNTRYOFREGISTRATION',
    detail: {
      genericCode: '127',
      genericCodeValues: [
        {
          codeReference: 'India', // key
          codeDescription: 'India' // value
        },
        {
          codeReference: 'Srilanka',
          codeDescription: 'Srilanka'
        }
      ]
    }
  },
  {
    id: 'TAXCOUNTRY',
    detail: {
      genericCode: '153',
      genericCodeValues: [
        {
          codeReference: 'India', // key
          codeDescription: 'India' // value
        },
        {
          codeReference: 'Srilanka',
          codeDescription: 'Srilanka'
        }
      ]
    }
  },
  {
    id: 'EMPLOYEDSTATUS',
    detail: {
      genericCode: '131',
      genericCodeValues: [
        {
          codeReference: 'Employed', // key
          codeDescription: 'Employed' // value
        },
        {
          codeReference: 'Unemployed',
          codeDescription: 'Unemployed'
        }
      ]
    }
  },
  {
    id: 'RELIGION',
    detail: {
      genericCode: '141',
      genericCodeValues: [
        {
          codeReference: 'Hindu', // key
          codeDescription: 'Hindu' // value
        },
        {
          codeReference: 'Muslim',
          codeDescription: 'Muslim'
        }
      ]
    }
  },
  {
    id: 'ACCOPERATIONMODE',
    detail: {
      genericCode: '16685',
      genericCodeValues: [
        {
          codeReference: 'SINGLE',
          codeDescription: 'Singly'
        },
        {
          codeReference: 'EITHERORSURVIVOR',
          codeDescription: 'Either Or Survivor'
        },
        {
          codeReference: 'JOINTLYSEVERALLY',
          codeDescription: 'Jointly / Severally'
        },
        {
          codeReference: 'ANYORSURVIVOR',
          codeDescription: 'Anyone or Survivor'
        },
        {
          codeReference: 'ANYTWOJOINTLY',
          codeDescription: 'Any Two Jointly'
        },
        {
          codeReference: 'POWEROFATTORNEY',
          codeDescription: 'Power Of Attorney'
        },
        {
          codeReference: 'AUTHSIGNATORY',
          codeDescription: 'Authorized Signatory'
        }
      ]
    }
  },
  {
    id: 'PREFERREDSTATEMENTCHANNEL',
    detail: {
      genericCode: '151',
      genericCodeValues: [
        {
          codeReference: 'Email', // key
          codeDescription: 'Email' // value
        },
        {
          codeReference: 'SMS',
          codeDescription: 'SMS'
        }
      ]
    }
  },
  {
    id: 'MANDATECUSTOMERROLES',
    detail: {
      genericCode: '123',
      genericCodeValues: [
        { codeReference: 'OWNER', codeDescription: 'Owner' },
        {
          codeReference: 'JOINTACHOLDER',
          codeDescription: 'Joint Account Holder'
        },
        {
          codeReference: 'LEGALREPRESTATIVE',
          codeDescription: 'Legal Representative'
        },
        { codeReference: 'GUARANTOR', codeDescription: 'Guarantor' },
        {
          codeReference: 'AUTHORIZEDONE',
          codeDescription: 'Authorized Person'
        },
        {
          codeReference: 'POWEROFATTORNEY',
          codeDescription: 'Power Of Attorney'
        },
        { codeReference: 'SIGNATORY', codeDescription: 'Signatory' },
        { codeReference: 'COAPPLICANT', codeDescription: 'Co-Applicant' }
      ]
    }
  }
]

/* for address table mock data */
const addressTable = {
  model: {
    editedItem: {
      reference: '',
      type: '',
      country: '',
      postcode: '',
      address: '',
      town: ''
    },
    defaultItem: {
      type: '',
      country: '',
      postcode: '',
      address: '',
      town: ''
    },
    headers: [
      {
        text: 'Reference',
        align: 'start',
        sortable: false,
        value: 'reference',
        hide: true
      },
      { text: 'Type', value: 'type' },
      { text: 'Country', value: 'country' },
      { text: 'Postcode', value: 'postcode' },
      { text: 'Address', value: 'address' },
      { text: 'Town/City', value: 'town' },
      { text: '', value: 'delete', sortable: false }
    ]
  },
  addresses: {
    admin: [
      {
        reference: 'FT12549782',
        type: 'Domestic',
        country: 'USA',
        postcode: '342323',
        address: 'Lake Buena Vista',
        town: 'Lake Mary',
        default: false
      },
      {
        reference: 'FT12549783',
        type: 'International',
        country: 'USA',
        postcode: '232325',
        address: 'Lake Buena Vista',
        town: 'Lake Mary',
        default: false
      },
      {
        reference: 'FT12549990',
        type: 'Domestic',
        country: 'USA',
        postcode: '232325',
        address: 'Lake Buena Vista',
        town: 'Lake Mary',
        default: true
      }
    ],
    someuser: [
      {
        reference: 'FT1254897589',
        type: 'Domestic',
        country: 'India',
        postcode: '342323',
        address: 'Victoria Road',
        town: 'Kolkata',
        default: false
      },
      {
        reference: 'FT129589845',
        type: 'International',
        country: 'USA',
        postcode: '232325',
        address: 'Lake Buena Vista',
        town: 'Lake Mary',
        default: false
      },
      {
        reference: 'FT120921397',
        type: 'Domestic',
        country: 'India',
        postcode: '232325',
        address: 'MG Road',
        town: 'Mumbai',
        default: true
      }
    ]
  }
}
/* for document table mock data */
const documentTable = {
  model: {
    editedItem: {
      reference: '',
      docName: '',
      category: '',
      type: '',
      validFrom: '',
      validTo: ''
    },
    defaultItem: {},
    headers: [
      {
        text: 'Reference',
        align: 'start',
        sortable: false,
        value: 'reference',
        hide: true
      },
      { text: 'Doc Name', value: 'docName' },
      { text: 'Category', value: 'category' },
      { text: 'Type', value: 'type' },
      { text: 'Valid From', value: 'validFrom' },
      { text: 'Valid To', value: 'validTo' },
      { text: '', value: 'delete', sortable: false }
    ]
  }
}

const existingAccount = {
  model: {
    editedItem: {
      accountnumber: '',
      currency: '',
      product: '',
      status: '',
      dateopened: ''
    },
    defaultItem: {},
    headers: [
      {
        text: 'Account Number',
        align: 'start',
        sortable: false,
        value: 'accountnumber'
      },
      { text: 'Currency', value: 'currency' },
      { text: 'Product', value: 'product' },
      { text: 'Status', value: 'status' },
      { text: 'Date Opened', value: 'dateopened' }
    ]
  }
}

// mock-data for common configuration api
const commonConfiguration = {
  1062: {
    configId: 'PTYCONF0052',
    partyType: 'Personal',
    partySubType: 'Individual',
    partyCategory: 'Full',
    country: 'BF',
    documentConfigDetails: {
      configId: 'PTYCONF0052',
      documentTypeDetailsList: [
        {
          documentCategory: 'Address proof',
          documentType: 'Driving License ID',
          documentTypeDesc: 'Driving License ID',
          isMandatory: 'false'
        },
        {
          documentCategory: 'AccountProof',
          documentType: 'BANKSTATEMENT',
          documentTypeDesc: 'Bank Statement',
          isMandatory: 'false'
        },
        {
          documentCategory: 'Id Proof',
          documentType: 'Passport',
          documentTypeDesc: 'Passport',
          isMandatory: 'true'
        },
        {
          documentCategory: 'Id Proof',
          documentType: 'Voter ID',
          documentTypeDesc: 'Voter ID',
          isMandatory: 'false'
        }
      ],
      docCategoryDetailsList: [
        {
          numDocsReqd: 0,
          validityPeriod: 0,
          documentCategory: 'Address proof',
          documentCategory_Desc: 'Address proof'
        },
        {
          numDocsReqd: 0,
          validityPeriod: 0,
          documentCategory: 'AccountProof',
          documentCategory_Desc: 'Bank Statement'
        },
        {
          numDocsReqd: 1,
          validityPeriod: 0,
          documentCategory: 'Id Proof',
          documentCategory_Desc: 'Id Proof'
        }
      ]
    },
    kycValidityPeriod: 60,
    kycCheckPeriod: 20,
    kycOverDuePeriod: 10,
    isFatcaRequired: false,
    fatcaRuleId: 'PartyRule001',
    crsRuleId: 'PartyRule001'
  },
  1063: {
    configId: 'PTYCONF0033',
    partyType: 'Enterprise',
    partySubType: 'Individual',
    partyCategory: 'Associate',
    country: 'BF',
    documentConfigDetails: {
      configId: 'PTYCONF0033',
      documentTypeDetailsList: [
        {
          documentCategory: 'Address proof',
          documentType: 'Driving License ID',
          documentTypeDesc: 'Driving License ID',
          isMandatory: 'false'
        },
        {
          documentCategory: 'AccountProof',
          documentType: 'BANKSTATEMENT',
          documentTypeDesc: 'Bank Statement',
          isMandatory: 'false'
        },
        {
          documentCategory: 'Id Proof',
          documentType: 'Passport',
          documentTypeDesc: 'Passport',
          isMandatory: 'true'
        },
        {
          documentCategory: 'Id Proof',
          documentType: 'Voter ID',
          documentTypeDesc: 'Voter ID',
          isMandatory: 'false'
        }
      ],
      docCategoryDetailsList: [
        {
          numDocsReqd: 0,
          validityPeriod: 0,
          documentCategory: 'Address proof',
          documentCategory_Desc: 'Address proof'
        },
        {
          numDocsReqd: 0,
          validityPeriod: 0,
          documentCategory: 'AccountProof',
          documentCategory_Desc: 'Bank Statement'
        },
        {
          numDocsReqd: 1,
          validityPeriod: 0,
          documentCategory: 'Id Proof',
          documentCategory_Desc: 'Id Proof'
        }
      ]
    },
    kycValidityPeriod: 60,
    kycCheckPeriod: 20,
    kycOverDuePeriod: 10,
    isFatcaRequired: false,
    fatcaRuleId: 'PartyRule001',
    crsRuleId: 'PartyRule001'
  }
}

const productList = [
  {
    productId: '01010DEFAULTUSD',
    productDescription: 'Regular EMI Loan',
    details: {
      productName: 'Regular EMI Loan',
      minBalance: '1000',
      creditLimit: '50000',
      debitLimit: '10000',
      creditBaseCode: '1234567',
      baseCodeCreditRate: '5',
      debitIntrestRate: '8',
      currency: 'USD'
    }
  },
  {
    productId: '03010DEFAULTUSD',
    productDescription: 'Regular Term Deposit',
    details: {
      productName: 'Regular Term Deposit',
      minBalance: '2000',
      creditLimit: '100000',
      debitLimit: '20000',
      creditBaseCode: 'QWE4567',
      baseCodeCreditRate: '3',
      debitIntrestRate: '8',
      currency: 'USD'
    }
  },
  {
    productId: '01010GOLDUSD',
    productDescription: 'Regular Savings Account',
    details: {
      productName: 'Regular Savings Account',
      minBalance: '2000',
      creditLimit: '100000',
      debitLimit: '10000',
      creditBaseCode: '123ABC',
      baseCodeCreditRate: '10',
      debitIntrestRate: '5',
      currency: 'USD'
    }
  }
]

/* for exporting all mock jsons */
module.exports = {
  events,
  formSchema,
  stepsSchemaWithForm,
  stepConfig,
  formConfig,
  genericCodes,
  addressTable,
  documentTable,
  commonConfiguration,
  existingAccount,
  productList
}
