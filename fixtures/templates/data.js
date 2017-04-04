function f (state) {
  if (typeof(state) === 'undefined'){
    state = {}
  }
  return `
<br></br>  

## Use: How we use your data internally 
### We collect and use your identifiable data (2)  
${state['data-internal-primary'] ? '- To provide the primary service (3) of the app or technology  ' : '  '}

${state['data-internal-marketing'] ? '- To develop marketing materials for our products  ' : '  '}

${state['data-internal-research'] ? '- To conduct scientific research  ' : '  '}

${state['data-internal-operations'] ? '- For company operations (e.g., quality control or fraud detection)  ' : '  '}

${state['data-internal-improve'] ? '- To develop and improve new and current products and services (e.g., analytics (4))  ' : '  '}

${state['data-internal-other-text'] ? '- '+state['data-internal-other-text'].trim()+'  '  : ''}
<br></br>  
  
## Share: How we share your data externally with other companies or entities 
### We share your identifiable data (5):  
${state['data-share-primary'] ? '- To provide the primary service (6) of the app or technology  ' : '  '}

${state['data-share-research'] ? '- To conduct scientific research  ' : '  '}

${state['data-share-operations'] ? '- For company operations (e.g. quality control or fraud detection)  ' : '  '}

${state['data-share-improve'] ? '- To develop and improve new and current products and services (e.g., analytics (7))  ' : '  '}

${state['data-share-other-text'] ? '- '+state['data-share-other-text'].trim()+'  '  : ''}
  
${state['data-share-not'] ? '- We DO NOT share your identifiable data (8) ' : '  '} 
<br></br>  
  
### We share your data AFTER removing identifiers (note that remaining data may not be anonymous): 
${state['data-shareAnonymous-primary'] ? '- For the primary purposes of the app or technology  ' : '  '}

${state['data-shareAnonymous-research'] ? '- To conduct scientific research  ' : '  '}

${state['data-shareAnonymous-operations'] ? '- For company operations (e.g., quality control, fraud detection)  ' : '  '}

${state['data-shareAnonymous-improve'] ? '- To develop and improve new and current products and services (e.g., analytics (9))  ' : '  '}

${state['data-shareAnonymous-other-text'] ? '- '+state['data-shareAnonymous-other-text'].trim()+'  '  : ''}
  
${state['data-shareAnonymous-not'] ? '- We DO NOT share your data after removing identifiers  ' : '  '}  
<br></br>  

## Sell: Who we sell your data to 
<table>
  <tr>
    <th><strong>Sold Data<strong></th>
    <th style='width:40%;'><strong>Do we sell?<strong></th>
  </tr>
  <tr>
    <td><strong>We sell your identifiable data (10) to data brokers (11), marketing, advertising networks, or analytics firms.</strong></td>
    <td>${state['data-sell'] == 'yes' ? 'Yes' : '' } ${state['data-sell'] == 'no' ? 'No' : '' } ${state['data-sell'] == 'permissioned' ? 'Yes; only with your permission (12)' : '' }</td>
  </tr>
  <tr>
    <td><strong>We sell your data AFTER removing identifiers (note that remaining data may not be anonymous) to data brokers (13), marketing, advertising networks, or analytics firms.</strong></td>
    <td>${state['data-sellAnonymous'] == 'yes' ? 'Yes' : '' } ${state['data-sellAnonymous'] == 'no' ? 'No' : '' } ${state['data-sellAnonymous'] == 'permissioned' ? 'Yes; only with your permission (12)' : '' }</td>
  </tr>
</table> 
`
}

module.exports = {
  f: f
}


let data = {
	"formData": {
		"data-shareAnonymous-primary": false,
		"data-shareAnonymous-research": false,
		"data-shareAnonymous-operations": false,
		"data-shareAnonymous-improve": false,
    "data-shareAnonymous-other-text": "",
		"data-shareAnonymous-not": false,
		"data-sell": "",
		"data-sellAnonymous": ""
	},
	"canSubmit": false
}
