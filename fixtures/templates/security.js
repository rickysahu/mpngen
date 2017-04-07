import footnotes from '../footnotes.js'

function hipaa (state) {
  if (typeof(state) === 'undefined'){
    state = {}
  }
  return `
${state['security-coveredEntity'] == 'yes' ? `
<br></br>
## ${state['company-legalName'] || 'Our company'} is a HIPAA Covered Entity
${state['security-coveredEntityText'] == 'not_hipaa_protected' ? `Please note that the health data we collect as part of this ${state['security-product'] || '[security-product]'} are not protected by HIPAA and our company's HIPAA Notice of Privacy Practices does not apply` : ''}
${state['security-coveredEntityText'] == 'hipaa_protected' ? `Some of the health data we collect as part of this ${state['security-product'] || '[security-product]'} also are protected by HIPAA. Read our [HIPAA Notice of Privacy Practices](${state['security-hipaaPolicyLink'] || "[security-hipaaPolicyLink]"}) for more information.` : ''}
` : ''}
  
`
}

function f (state) {
  if (typeof(state) === 'undefined'){
    state = {}
  }
  return hipaa(state) + `  
<br></br>
## Store: How we store your data
<table>
  <tr>
    <th><strong>Stored Data<strong></th>
    <th><strong>Is it stored?<strong></th>
  </tr>
  <tr>
    <td><strong>Are your data stored on the device? </strong></td>
    <td>${state['security-storeOndevice'] == 'yes' ? 'Yes' : '' } ${state['security-storeOndevice'] == 'no' ? 'No' : '' }</td>
  </tr>
  <tr>
    <td><strong>Are your data stored outside the device at our company or through a third party?</strong></td>
    <td>${state['security-storeOffdevice'] == 'yes' ? 'Yes' : '' } ${state['security-storeOffdevice'] == 'no' ? 'No' : '' }</td>
  </tr>
</table>  
<br></br>

## Encryption: How we encrypt your data
<table>
  <tr>
    <th><strong>Encrypted Data<strong></th>
    <th><strong>Is it encrypted?<strong></th>
  </tr>
  <tr>
    <td><strong>Does the app or technology use 
    <div class="tooltip">
      encryption
      <div class="tooltiptext">
        ${footnotes.encryption}     
      </div>
    </div>    
    to encrypt your data in the device or app? </strong></td>
    <td>${state['security-encryptDevice'] == 'default' ? 'Yes, by default' : '' } ${state['security-encryptDevice'] == 'no' ? 'No' : '' } ${typeof state['security-encryptDevice'] == 'undefined' ? 'N/A' : '' } ${state['security-encryptDevice'] == 'steps' ? `Yes, when you take certain steps (<a href='${state['security-encryptDeviceLink'] || `[security-encryptDeviceLink]`}'>click to learn how</a>)` : '' }</td>
  </tr>
  <tr>
    <td><strong>Does the app or technology use 
    <div class="tooltip">
      encryption
      <div class="tooltiptext">
        ${footnotes.encryption}     
      </div>
    </div>    
    to encrypt your data when stored on our company servers or with an outside 
    <div class="tooltip">
      cloud computing
      <div class="tooltiptext">
        ${footnotes.cloudComputing}     
      </div>
    </div>    
    services provider?</strong></td>
    <td>${state['security-encryptServer'] == 'default' ? 'Yes, by default' : '' } ${state['security-encryptServer'] == 'no' ? 'No' : '' } ${typeof state['security-encryptServer'] == 'undefined' ? 'N/A' : '' } ${state['security-encryptServer'] == 'steps' ? `Yes, when you take certain steps (<a href='${state['security-encryptServerLink'] || `[security-encryptServerLink]`}'>click to learn how</a>)` : '' }</td>
  </tr>
  <tr>
    <td><strong>Does the app or technology use
    <div class="tooltip">
      encryption
      <div class="tooltiptext">
        ${footnotes.encryption}     
      </div>
    </div>    
    to encrypt your data while it is transmitted?</strong></td>
    <td>${state['security-encryptTransmit'] == 'default' ? 'Yes, by default' : '' } ${state['security-encryptTransmit'] == 'no' ? 'No' : '' } ${state['security-encryptTransmit'] == 'na' ? 'N/A' : '' } ${state['security-encryptTransmit'] == 'steps' ? `Yes, when you take certain steps (<a href='${state['security-encryptTransmitLink'] || `[security-encryptTransmitLink]`}'>click to learn how</a>)` : '' }</td>
  </tr>
</table> 
<br></br>  

## Privacy: How this technology accesses other data
<table style='vertical-align: top'>
  <tr>
    <th><strong>Other Data<strong></th>
    <th style='width:40%;'><strong>Is it accessed?<strong></th>
  </tr>
  <tr>
    <td><strong>Will this technology or app request access to other device data or applications, such as your phone’s camera, photos, or contacts? </strong></td>    
${typeof state['security-privacyappsAccess'] !== 'undefined' && state['security-privacyappsAccess'] !== '' ? (state['security-privacyappsAccess'] == 'permissioned' ? `<td>
<div>
  Yes, only with your permission. It connects to... 
${state['security-privacyappsDevices-camera'] ? '<li>Camera</li>' : ''} ${state['security-privacyappsDevices-photo'] ? '<li>Photo</li>' : ''} ${state['security-privacyappsDevices-contacts'] ? '<li>Contacts</li>' : ''} ${state['security-privacyappsDevices-location'] ? '<li>Location</li>' : ''} ${state['security-privacyappsDevices-microphone'] ? '<li>Microphone</li>' : ''} ${state['security-privacyappsDevices-health'] ? '<li>Health monitoring devices</li>' : ''}  ${state['security-privacyappsDevices-other-text'] ? `<li>${state['security-privacyappsDevices-other-text']}</li>` : ''} ${state['security-privacyappsDevicesSetting'] ? `To check settings, visit our <a href='${state['security-privacyappsDevicesSetting']}'>help page</a>` : ''}
</div>
</td>` : '<td>No</td>') : '<td></td>' }
  </tr>
  <tr>
    <td><strong>Does this technology or app allow you to share the collected data with your social media accounts, like Facebook?</strong></td>
    <td>${state['security-privacyappsSocial'] == 'permissioned' ? `Yes, only with your permission. To check settings, visit our <a href='${state['security-privacyappsSetting']}'>help page</a>` : '' }${state['security-privacyappsSocial'] == 'yes' ? `Yes,<br>${state['security-privacyappsSetting'] ? `To check settings, visit our <a href='${state['security-privacyappsSetting']}'>help page</a>` : ''}` : '' } ${state['security-privacyappsSocial'] == 'no' ? 'No' : '' }</td>
  </tr>
</table>

`
}
module.exports = {
  hipaa: hipaa,
  f: f
}
