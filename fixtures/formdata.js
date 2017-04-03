let errorMessages = {
  isDefaultRequiredValue: 'Field is required',
  wordsError: "Please only use letters",
  numericError: "Please provide a number",
  requiredError: "This field is required",
  urlError: "Please provide a valid URL",
  emailError: "Please provide a valid email",
  phoneError: "Please provide a valid phone number",
}

let countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic People's Republic of Korea", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faeroe Islands", "Fiji", "Finland", "France", "France, Metropolitan", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and McDonald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic of", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands, Kingdom of the", "Netherlands Antilles", "Neutral Zone", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of Korea", "Republic of Moldova", "Réunion", "Romania", "Russian Federation", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Island", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan Province of China", "Tajikistan", "Thailand", "The former Yugoslav Republic of Macedonia", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom of Great Britain and Northern Ireland Citizen", "United Kingdom of Great Britain and Northern Ireland Dependent Territories Citizen", "United Kingdom of Great Britain and Northern Ireland National (oversees)", "United Kingdom of Great Britain and Northern Ireland Oversees Citizen", "United Kingdom of Great Britain and Northern Ireland Protected Person", "United Kingdom of Great Britain and Northern Ireland Subject", "United Republic of Tanzania", "United States of America", "United States of America Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam", "Virgin Islands (Great Britian)", "Virgin Islands (United States)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Zaire", "Zambia", "Zimbabwe", "United Nations Organization Official", "United Nations Organization Specialized Agency Official", "Stateless (per Article 1 of 1954 convention)", "Refugee (per Article 1 of 1951 convention, amended by 1967 protocol)", "Refugee (non-convention)", "Unspecified / Unknown", "Utopian"]

let sections = [
  {
    id: 'company',
    title: 'Company Info',
    questions: [
      {
        formType: 'text',
        name: 'legalName',
        label: 'Legal entity name',
        hintText: '1upHealth, Inc.',
        required: true,
        validations: {},
        validationError: errorMessages.requiredError,
      },
      {
        formType: 'text',
        name: 'privacyPolicyLink',
        label: 'Link to full privacy policy',
        hintText: 'https://1uphealth.care/privacy-policy',
        required: true,
        validations: 'isUrl',
        validationError: errorMessages.urlError,
      },
      {
        formType: 'text',
        name: 'contactLink',
        label: 'Link online contact or coment form',
        hintText: 'https://1uphealth.care/contact-us',
        required: true,
        validations: 'isUrl',
        validationError: errorMessages.urlError,
      },
      {
        formType: 'text',
        name: 'email',
        label: 'Company email address',
        hintText: 'hello@1uphealth.care',
        required: true,
        validations: 'isEmail',
        validationError: errorMessages.emailError,
      },
      {
        formType: 'text',
        inputType: 'tel',
        name: 'contactNumber',
        label: 'Company phone number',
        hintText: '347-422-7242',
        required: true,
        validations: {matchRegexp: /^(1?)(-| ?)(\()?([0-9]{3})(\)|-| |\)-|\) )?([0-9]{3})(-| )?([0-9]{4}|[0-9]{4})$/},
        validationError: errorMessages.phoneError,
      },
      {
        formType: 'text',
        name: 'address',
        label: 'Address',
        hintText: '225 Centre St. Boston MA, 02119',
        required: false,
        validations: {matchRegexp: /^[\s\S]{3,}/},
        validationError: errorMessages.requiredError,
      },
      {
        formType: 'autocomplete',
        name: 'country',
        label: 'Country',
        hintText: 'United States',
        required: true,
        dataSource: countries
      },
      {
        formType: 'radio',
        name: 'coveredEntity',
        label: 'If your organization is a HIPAA covered entity, is the data your entity collects HIPAA protected?',
        mpnText: 'Select one of the following statements to be inserted into the privacy notice:',
        choices: [
          {
            value: `not_hipaa_entity`,
            label: `We are not a HIPAA covered entity`,
            mpnText: ``
          },
          {
            value: `not_hipaa_protected`,
            label: `NO, data is not HIPAA protected`,
            mpnText: `Please note that the health data we collect as part of this [insert name of technology] are not protected by HIPAA and our company's HIPAA Notice of Privacy Practices does not apply`
          },
          {
            value: `hipaa_protected`,
            label: `YES, data is HIPAA protected`,
            mpnText: `Some of the health data we collect as part of this [insert name of technology product] also are protected by HIPAA. Read our HIPAA Notice of Privacy Practices [embed link or popup] for more information.`
          }
        ]
      }
    ],
  },
  {
    id: 'usage',
    title: 'Data Usage',
    questions: [
      {
        formType: 'checkbox',
        name: 'internal',
        required: true,
        header: 'Use: How we use your data internally',
        label: 'We collect and use your identifiable data:',
        choices: [
          {
            label:`To provide the primary service of the app or technology`,
            value:`primary`,
          },
          {
            label:`To develop marketing materials for our products`,
            value:`marketing`,
          },
          {
            label:`To conduct scientific research`,
            value:`research`,
          },
          {
            label:`For company operations (e.g., quality control or fraud detection)`,
            value:`operations`,
          },
          {
            label:`To develop and improve new and current products and services (e.g., analytics)`,
            value:`improve`,
          },
          {
            label:`Other`,
            value:`other`,
          },
        ]
      },
      {
        formType: 'checkbox',
        name: 'share',
        required: true,
        header: 'Share: How we share your data externally with other companies or entities',
        label: 'We share your identifiable data:',
        choices: [
          {
            label:`To provide the primary service of the app or technology `,
            value:`primary`,
          },
          {
            label:`To conduct scientific research`,
            value:`research`,
          },
          {
            label:`For company operations (e.g., quality control or fraud detection)`,
            value:`operations`,
          },
          {
            label:`To develop and improve new and current products and services (e.g., analytics)`,
            value:`improve`,
          },
          {
            label:`We DO NOT share your identifiable data`,
            value:`not`,
          },
          {
            label:`Other`,
            value:`other`,
          },
        ]
      },
      {
        formType: 'checkbox',
        name: 'shareAnonymous',
        required: true,
        label: 'We share your data AFTER removing identifiers (note that remaining data may not be anonymous):',
        choices: [
          {
            label:`For the primary purposes of the app or technology`,
            value:`primary`,
          },
          {
            label:`To conduct scientific research`,
            value:`research`,
          },
          {
            label:`For company operations (e.g., quality control or fraud detection)`,
            value:`operations`,
          },
          {
            label:`To develop and improve new and current products and services (e.g., analytics)`,
            value:`improve`,
          },
          {
            label:`We DO NOT share your data after removing identifiers`,
            value:`not`,
          },
          {
            label:`Other`,
            value:`other`,
          },
        ]
      },
      {
        formType: 'radio',
        name: 'sell',
        required: true,
        header: 'Sell: Who we sell your data to',
        label: 'We sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.',
        choices: [
          {
            label:`Yes`,
            value:`yes`,
          },
          {
            label:`Yes; only with your permission`,
            value:`permissioned`,
          },
          {
            label:`No`,
            value:`no`,
          },
        ]
      },
      {
        formType: 'radio',
        name: 'sellAnonymous',
        required: true,
        label: 'We sell your data AFTER removing identifiers (note that remaining data may not be anonymous) to data brokers, marketing, advertising networks, or analytics firms.',
        choices: [
          {
            label:`Yes`,
            value:`yes`,
          },
          {
            label:`Yes; only with your permission`,
            value:`permissioned`,
          },
          {
            label:`No`,
            value:`no`,
          },
        ]
      },
    ]
  },
  {
    id: 'security',
    title: 'Data Security',
    questions: [
      {
        formType: 'radio',
        name: 'storeOndevice',
        required: true,
        header: `Store: How we store your data`,
        label: 'Are your data stored on the device?',
        choices: [
          {
            label:`Yes`,
            value:`yes`,
          },
          {
            label:`No`,
            value:`no`,
          },
        ]
      },
      {
        formType: 'radio',
        name: 'storeOffdevice',
        required: true,
        label: 'Are your data stored outside the device at our company or through a third party?',
        choices: [
          {
            label:`Yes`,
            value:`yes`,
          },
          {
            label:`No`,
            value:`no`,
          },
        ]
      },
      {
        formType: 'radio',
        name: 'encryptDevice',
        required: true,
        header: `Encryption: How we encrypt your data`,
        label: 'Does the app or technology use encryption to encrypt your data in the device or app?',
        choices: [
          {
            label:`Yes, by default`,
            value:`default`,
          },
          {
            label:`Yes, when you take certain steps (click to learn how)`,
            value:`steps`,
          },
          {
            label:`No`,
            value:`no`,
          },
          {
            label:`N/A`,
            value:`na`,
          },
        ]
      },
      {
        formType: 'radio',
        name: 'encryptServer',
        required: true,
        label: 'Does the app or technology use encryption to encrypt your data when stored on our company servers or with an outside cloud computing services provider?',
        choices: [
          {
            label:`Yes, by default`,
            value:`default`,
          },
          {
            label:`Yes, when you take certain steps (click to learn how)`,
            value:`steps`,
          },
          {
            label:`No`,
            value:`no`,
          },
          {
            label:`N/A`,
            value:`na`,
          },
        ]
      },
      {
        formType: 'radio',
        name: 'encryptTransmit',
        required: true,
        label: 'Does the app or technology use encryption to encrypt your data while it is transmitted?',
        choices: [
          {
            label:`Yes, by default`,
            value:`default`,
          },
          {
            label:`Yes, when you take certain steps (click to learn how)`,
            value:`steps`,
          },
          {
            label:`No`,
            value:`no`,
          },
          {
            label:`N/A`,
            value:`na`,
          },
        ]
      },
      {
        formType: 'radio',
        name: 'privacyappsAccess',
        required: true,
        header: 'Privacy: How this technology accesses other data',
        label: 'Will this technology or app request access to other device data or applications, such as your phone’s camera, photos, or contacts?',
        choices: [
          {
            label:`Yes, only with your permission.`,
            value:`yes`,
          },
          {
            label:`No`,
            value:`no`,
          },
        ]
      },
      {
        formType: 'checkbox',
        name: 'privacyappsDevices',
        required: true,
        label: 'It connects to ...',
        choices: [
          {
            label:`Camera`,
            value:`camera`,
          },
          {
            label:`Photo`,
            value:`photo`,
          },
          {
            label:`Contacts`,
            value:`contacts`,
          },
          {
            label:`Location services`,
            value:`location`,
          },
          {
            label:`Microphone`,
            value:`microphone`,
          },
          {
            label:`Health monitoring devices`,
            value:`health`,
          },
          {
            label:`Other`,
            value:`other`,
          },
        ]
      },
      {
        formType: 'text',
        name: 'privacyappsSetting',
        label: 'Here is how you can check your settings, including permissions set as a default...',
        hintText: 'Step 1) Click settings, Step 2) ... or visit the help center page http://1uphealth.care/help/permisisons',
        required: true,
        multiLine: true,
        style: {marginTop: '-1rem', paddingTop: '1rem'},
        validations: {},
        validationError: errorMessages.isDefaultRequiredValue,
      },
      {
        formType: 'radio',
        name: 'privacyappsSocial',
        required: true,
        label: 'Does this technology or app allow you to share the collected data with your social media accounts, like Facebook?',
        choices: [
          {
            label: `Yes`,
            value: `yes`
          },
          {
            label:`Yes, only with your permission.`,
            value:`permission`,
          },
          {
            label:`No`,
            value:`no`,
          },
        ]
      },
      {
        formType: 'text',
        name: 'privacyappsSetting',
        label: 'Here is how you can check your settings, including permissions set as a default...',
        hintText: 'Step 1) Click settings, Step 2) ... or visit the help center page http://1uphealth.care/help/permisisons',
        required: true,
        multiLine: true,
        style: {marginTop: '-1rem', paddingTop: '1rem'},
        validations: {},
        validationError: errorMessages.isDefaultRequiredValue,
      },
    ]
  },
  {
    id: 'user',
    title: 'User Options',
    questions: [
      {
        formType: 'radio',
        name: 'useraccessAvailable',
        required: true,
        header: 'User Options: What you can do with the data that we collect',
        label: 'Can you access, edit, share, or delete the data we have about you?',
        choices: [
          {
            label:`Yes.`,
            value:`yes`,
          },
          {
            label:`No`,
            value:`no`,
          },
        ]
      },
      {
        formType: 'checkbox',
        name: 'useraccessType',
        required: true,
        label: 'You can...',
        choices: [
          {
            label:`Access your data`,
            value:`access`,
          },
          {
            label:`Edit your data`,
            value:`edit`,
          },
          {
            label:`Share your data`,
            value:`share`,
          },
          {
            label:`Delete your data`,
            value:`delete`,
          },
        ]
      },
      {
        formType: 'text',
        name: 'useraccessSetting',
        label: 'Here is how to do this...',
        hintText: 'Step 1) Click settings, Step 2) ... or visit the help center page http://1uphealth.care/help/permisisons',
        required: true,
        multiLine: true,
        style: {marginTop: '-1rem', paddingTop: '1rem'},
        validations: {},
        validationError: errorMessages.isDefaultRequiredValue,
      },
      {
        formType: 'radio',
        name: 'useraccessAvailable',
        required: true,
        header: 'Deactivation: What happens to your data when your account is deactivated',
        label: 'When your account is deactivated/terminated by you or the company, your data are...',
        choices: [
          {
            label:`Deleted immediately.`,
            value:`delete`,
          },
          {
            label:`Deleted after [x] years.`,
            value:`years`,
          },
          {
            label:`Permanently retained and used.`,
            value:`permanent`,
          },
          {
            label:`Retained and used until you request deletion`,
            value:`request`,
          },
        ]
      },
      {
        formType: 'text',
        name: 'useraccessPolicy',
        header: 'Policy Changes: How we will notify you if our privacy policy changes',
        label: 'Here is how to do this...',
        hintText: 'Step 1) Click settings, Step 2) ... or visit the help center page http://1uphealth.care/help/permisisons',
        required: true,
        multiLine: true,
        style: {marginTop: '-1rem', paddingTop: '1rem'},
        validations: {},
        validationError: errorMessages.isDefaultRequiredValue,
      },
      {
        formType: 'text',
        name: 'useraccessNotification',
        header: 'Breach: How we will notify you and protect your data in case of an improper disclosure',
        label: 'Describe your company policy',
        hintText: 'Company name] complies with all applicable laws regarding breaches. Describe how the company will protect consumers’ data in the case of a breach and provide link to section in privacy policy.',
        required: true,
        multiLine: true,
        style: {marginTop: '-1rem', paddingTop: '1rem'},
        validations: {},
        validationError: errorMessages.isDefaultRequiredValue,
      },
    ]
  },
  {
    id: 'policy',
    title: 'Policy Changes',
    questions: [

    ]
  },
]

module.exports = sections
