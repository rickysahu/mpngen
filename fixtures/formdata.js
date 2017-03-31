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
        name: 'legal-name',
        label: 'Legal entity name',
        hintText: '1upHealth, Inc.',
        required: true,
        validations: 'isDefaultRequiredValue',
        validationError: errorMessages.wordsError,
      },
      {
        formType: 'text',
        name: 'privacy-policy-link',
        label: 'Link to full privacy policy',
        hintText: 'https://1uphealth.care/privacy-policy',
        required: true,
        validations: 'isUrl',
        validationError: errorMessages.urlError,
      },
      {
        formType: 'text',
        name: 'contact-link',
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
        name: 'contact-number',
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
        name: 'covered-entity',
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
        ]
      },
      {
        formType: 'text',
        inputType: 'text',
        name: 'internal-other',
        label: 'Other',
        style: {marginTop: '-1rem'},
        hintText: 'To do ...',
        required: false
      },
    ]
  },
  {
    id: 'sharing',
    title: 'Data Sharing',
    questions: [

    ]
  },
  {
    id: 'user',
    title: 'User Options',
    questions: [

    ]
  },
  {
    id: 'policy',
    title: 'Policy Changes',
    questions: [

    ]
  },
  {
    id: 'hipaa',
    title: 'HIPAA Policy',
    questions: [

    ]
  },
]

module.exports = sections
