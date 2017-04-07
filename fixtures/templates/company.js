function contact (state) {
  return `
<br></br>
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

function formatSpace (state) {
  return `<div>${Array(120).fill('&nbsp; ').join('')}</div>`
}

function f (state) {
  if (typeof(state) === 'undefined'){
    state = {}
  }
  return contact(state) + formatSpace(state)
}

module.exports = {
  f: f,
  contact: contact
}
