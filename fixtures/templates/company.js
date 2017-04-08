function contact (state) {
  return `
<br></br>
## Contact Us
### ${state['company-legalName'] || '[company-legalName]'}
<div><a href='${state['company-privacyPolicyLink'] || "[company-privacyPolicyLink]"}' target='_blank'>Privacy Policy</a> (${state['company-privacyPolicyLink'] || "[company-privacyPolicyLink]"})<br></div>
<div><a href='${state['company-contactLink'] || "[company-contactLink]"}' target='_blank'>Contact Page</a> (${state['company-contactLink'] || "[company-contactLink]"})<br></div>

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
