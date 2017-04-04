function contact (state) {
  return `
# Welcome to the ${state['company-legalName'] || '[company-legalName]'} Privacy Notice
## Contact Us
### ${state['company-legalName'] || '[company-legalName]'}
[Privacy Policy](${state['company-privacyPolicyLink'] || "[company-privacyPolicyLink]"}) (${state['company-privacyPolicyLink'] || "[company-privacyPolicyLink]"})  
[Contact Page](${state['company-contactLink'] || "[company-contactLink]"}) (${state['company-contactLink'] || "[company-contactLink]"})  
[${state['company-email'] || "[company-email]"}](mailto:${state['company-email'] || "[company-email]"})  
[${state['company-contactNumber'] || "[company-contactNumber]"}](tel:${state['company-contactNumber'] || "[company-contactNumber]"})  

${state['company-legalName'] || "[company-legalName]"}  
${state['company-address'] || "[company-address]"}  
${state['company-country'] || "[company-country]"}  

`
}

function hipaa (state) {
  return `
${state['company-coveredEntity'] == 'yes' ? `
## ${state['company-legalName'] || '[company-legalName]'} is a HIPAA Covered Entity
${state['company-coveredEntityText'] == 'not_hipaa_protected' ? `Please note that the health data we collect as part of this ${state['company-legalName'] || '[company-legalName]'} are not protected by HIPAA and our company's HIPAA Notice of Privacy Practices does not apply` : ''}
${state['company-coveredEntityText'] == 'hipaa_protected' ? `Some of the health data we collect as part of this ${state['company-legalName'] || '[company-legalName]'} also are protected by HIPAA. Read our [HIPAA Notice of Privacy Practices](${state['company-privacyPolicyLink'] || "[company-privacyPolicyLink]"}) for more information.` : ''}
` : ''}
  
`
}

function f (state) {
  if (typeof(state) === 'undefined'){
    state = {}
  }
  return contact(state) + hipaa(state)
}

module.exports = {
  f: f
}
