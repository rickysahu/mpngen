function f (state) {
  if (typeof(state) === 'undefined'){
    state = {}
  }
  return `
# Contact Us
## ${state['company-legalName'] || "[company-legalName]"}
[${state['company-legalName'] || "[company-legalName]"} Privacy Policy](${state['company-privacyPolicyLink'] || "company-privacyPolicyLink"}) (${state['company-privacyPolicyLink'] || "company-privacyPolicyLink"})  
[${state['company-legalName'] || "[company-legalName]"} Contact Page](${state['company-contactLink'] || "company-contactLink"}) (${state['company-contactLink'] || "company-contactLink"})  
[${state['company-email'] || "[company-email]"}](mailto:${state['company-email'] || "company-email"})  
[${state['company-contactNumber'] || "[company-contactNumber]"}](tel:${state['company-contactNumber'] || "company-contactNumber"})  

${state['company-legalName'] || "[company-legalName]"}  
${state['company-address'] || "[company-address]"}  
${state['company-country'] || "[company-country]"}  

`
}
module.exports = {
  f: f
}
