import footnotes from '../footnotes.js'

function f (state) {
  if (typeof(state) === 'undefined'){
    state = {}
  }
  return `
<br></br>  

## Use: How we use your data internally  
<h3>
  We collect and use your 
  <div class="tooltip">
    identifiable data
    <div class="tooltiptext">
      ${footnotes.identifiableData}     
    </div>
  </div>:
</h3>

${state['data-internal-primary'] ? `
<ul><li>To provide the 
<span class="tooltip">
  primary service
  <div class="tooltiptext">
    Primary service means: ${state['data-primaryService'] || '[data-primaryService]'}
  </div>
</span>
of the app or technology</li></ul>` : ''}

${state['data-internal-marketing'] ? '- To develop marketing materials for our products  ' : ''}

${state['data-internal-research'] ? '- To conduct scientific research  ' : ''}

${state['data-internal-operations'] ? '- For company operations (e.g., quality control or fraud detection)  ' : ''}

${state['data-internal-improve'] ? `
<ul><li>To develop and improve new and current products and services (e.g., 
<span class="tooltip">
  analytics
  <div class="tooltiptext">
  ${footnotes.analytics}     
  </div>
</span>
)</li></ul>` : ''}

${state['data-internal-other-text'] ? '- '+state['data-internal-other-text'].trim()+'  '  : ''}
<br></br>  
  
## Share: How we share your data externally with other companies or entities 
<h3>
  We share your 
  <div class="tooltip">
    identifiable data
    <div class="tooltiptext">
      ${footnotes.identifiableData}     
    </div>
  </div>:
</h3>

${state['data-share-primary'] ? `
<ul><li>To provide the 
<span class="tooltip">
  primary service
  <div class="tooltiptext">
    Primary service means: ${state['data-primaryService'] || '[data-primaryService]'}
  </div>
</span>
of the app or technology</li></ul>` : ''}

${state['data-share-research'] ? '- To conduct scientific research  ' : ''}

${state['data-share-operations'] ? '- For company operations (e.g. quality control or fraud detection)  ' : ''}

${state['data-share-improve'] ? `
<ul><li>To develop and improve new and current products and services (e.g., 
<span class="tooltip">
  analytics
  <div class="tooltiptext">
  ${footnotes.analytics}     
  </div>
</span>
)</li></ul>` : ''}

${state['data-share-other-text'] ? '- '+state['data-share-other-text'].trim()+'  '  : ''}
  
${state['data-shareDoYou'] == 'no' ? `
<ul><li>We DO NOT share your 
<span class="tooltip">
  identifiable data
  <div class="tooltiptext">
  ${footnotes.identifiableData}
  </div>
</span>
</li></ul>` : ''}
<br></br>  
  
### We share your data AFTER removing identifiers (note that remaining data may not be anonymous): 
${state['data-shareAnonymous-primary'] ? `
<ul><li>For the primary purposes of the app or technology</li></ul>` : ''}

${state['data-shareAnonymous-research'] ? '- To conduct scientific research  ' : ''}

${state['data-shareAnonymous-operations'] ? '- For company operations (e.g., quality control, fraud detection)  ' : ''}

${state['data-shareAnonymous-improve'] ? '- To develop and improve new and current products and services (e.g., analytics (9))  ' : ''}

${state['data-shareAnonymous-other-text'] ? '- '+state['data-shareAnonymous-other-text'].trim()+'  '  : ''}
  
${state['data-shareAnonymousDoYou'] == 'no' ? '- We DO NOT share your data after removing identifiers  ' : ''}  
<br></br>  

## Sell: Who we sell your data to 
<table>
  <tr>
    <th><strong>Sold Data<strong></th>
    <th style='width:40%;'><strong>Do we sell?<strong></th>
  </tr>
  <tr>
    <td>
      <strong>
        We sell your 
        <span class="tooltip">
          identifiable data
          <div class="tooltiptext">
          ${footnotes.identifiableData}
          </div>
        </span>
        to 
        <span class="tooltip">
          data brokers
          <div class="tooltiptext">
          ${footnotes.dataBrokers}
          </div>
        </span>
        , marketing, advertising networks, or analytics firms.
      </strong>
    </td>
    <td>${state['data-sell'] == 'yes' ? 'Yes' : '' } ${state['data-sell'] == 'no' ? 'No' : '' } ${state['data-sell'] == 'permissioned' ? `Yes; only <a target='_blank' href='${ state['data-sellPermissionLink'] || `[data-sellPermissionLink]`}'>with your permission</a> ` : '' }</td>
  </tr>
  <tr>
    <td><strong>We sell your data AFTER removing identifiers (note that remaining data may not be anonymous) to 
    <span class="tooltip">
      data brokers
      <div class="tooltiptext">
      ${footnotes.dataBrokers}
      </div>
    </span>
    , marketing, advertising networks, or analytics firms.</strong></td>
    <td>${state['data-sellAnonymous'] == 'yes' ? 'Yes' : '' } ${state['data-sellAnonymous'] == 'no' ? 'No' : '' } ${state['data-sellAnonymous'] == 'permissioned' ? `Yes; only <a target='_blank' href='${ state['data-sellAnonymousPermissionLink'] || `[data-sellAnonymousPermissionLink]`}'>with your permission</a> ` : '' }</td>
  </tr>
</table> 
`
}

module.exports = {
  f: f
}
