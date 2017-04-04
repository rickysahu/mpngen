function f (state) {
  if (typeof(state) === 'undefined'){
    state = {}
  }
  return `  
<br></br>
## Store: How we store your data
<table>
  <tr>
    <th><strong>Stored Data<strong></th>
    <th style='width:30%;'><strong>Is it stored?<strong></th>
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
    <th style='width:30%;'><strong>Is it encrypted?<strong></th>
  </tr>
  <tr>
    <td><strong>Does the app or technology use encryption to encrypt your data in the device or app? </strong></td>
    <td>${state['security-encryptDevice'] == 'default' ? 'Yes, by default' : '' } ${state['security-encryptDevice'] == 'no' ? 'No' : '' } ${state['security-encryptDevice'] == 'na' ? 'N/A' : '' } ${state['security-encryptDevice'] == 'steps' ? 'Yes, when you take certain steps (click to learn how)' : '' }</td>
  </tr>
  <tr>
    <td><strong>Does the app or technology use encryption to encrypt your data when stored on our company servers or with an outside cloud computing services provider?</strong></td>
    <td>${state['security-encryptServer'] == 'default' ? 'Yes, by default' : '' } ${state['security-encryptServer'] == 'no' ? 'No' : '' } ${state['security-encryptServer'] == 'na' ? 'N/A' : '' } ${state['security-encryptServer'] == 'steps' ? 'Yes, when you take certain steps (click to learn how)' : '' }</td>
  </tr>
  <tr>
    <td><strong>Does the app or technology use encryption to encrypt your data while it is transmitted?</strong></td>
    <td>${state['security-encryptTransmit'] == 'default' ? 'Yes, by default' : '' } ${state['security-encryptTransmit'] == 'no' ? 'No' : '' } ${state['security-encryptTransmit'] == 'na' ? 'N/A' : '' } ${state['security-encryptTransmit'] == 'steps' ? 'Yes, when you take certain steps (click to learn how)' : '' }</td>
  </tr>
</table> 


## Privacy: How this technology accesses other data
<table>
  <tr>
    <th><strong>Other Data<strong></th>
    <th style='width:30%;'><strong>Is it accessed?<strong></th>
  </tr>
  <tr>
    <td><strong>Will this technology or app request access to other device data or applications, such as your phone’s camera, photos, or contacts? </strong></td>
  </tr>
  <tr>
    <td><strong>Does this technology or app allow you to share the collected data with your social media accounts, like Facebook?</strong></td>
  </tr>
</table>

`
}
module.exports = {
  f: f
}

let data = {
	"formData": {
		"security-encryptDevice": "",
		"security-encryptServer": "",
		"security-encryptTransmit": "",
		"security-privacyappsAccess": "",
		"security-privacyappsDevices-camera": false,
		"security-privacyappsDevices-photo": false,
		"security-privacyappsDevices-contacts": false,
		"security-privacyappsDevices-location": false,
		"security-privacyappsDevices-microphone": false,
		"security-privacyappsDevices-health": false,
		"security-privacyappsDevices-other-text": "",
		"security-privacyappsSetting": "",
		"security-privacyappsSocial": ""
	},
	"canSubmit": false
}
