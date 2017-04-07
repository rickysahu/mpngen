import footnotes from '../footnotes.js'

function f (state) {
  if (typeof(state) === 'undefined'){
    state = {}
  }
  return `
<br></br>

## User Options: What you can do with the data that we collect
<table>
  <tr>
    <td><strong>Can you access, edit, share, or delete the data we have about you?</strong></td>
    <td>${state['user-useraccessAvailable'] === 'yes' ? `Yes, you can ... <br> ${state['user-useraccessType-access'] ? '<li>access your data</li>' : ''} ${state['user-useraccessType-edit'] ? '<li>edit your data</li>' : ''} ${state['user-useraccessType-share'] ? '<li>share your data</li>' : ''} ${state['user-useraccessType-delete'] ? '<li>delete your data</li>' : ''} ${state['user-useraccessSetting'] ? state['user-useraccessSetting'] : '[user-useraccessSetting]'}` : ''} 
    ${state['user-useraccessAvailable'] === 'no' ? 'No' : ''}</td>
  </tr>
</table> 
<br></br>

<h2>
  <div class="tooltip">
    Deactivation
    <div class="tooltiptext">
      ${footnotes.deactivation}     
    </div>
  </div>: What happens to your data when your account is deactivated 
</h2>
<table>
  <tr>
    <td><strong>When your account is deactivated/terminated by you or the company, your data are...  </strong></td>
    <td>${state['user-useraccessDeactivation'] === 'years' ? `Deleted after ${state['user-useraccessDeactivationYears'] || '[X]'} years` : ''} ${state['user-useraccessDeactivation'] === 'permanent' ? `Permanently retained and used` : ''} ${state['user-useraccessDeactivation'] === 'request' ? `Retained and used until you request deletion` : ''} ${state['user-useraccessDeactivation'] === 'delete' ? `Deleted immediately` : ''} </td>
  </tr>
</table>
<br></br>

## Policy Changes: How we will notify you if our privacy policy changes
${state['user-useraccessPolicy'] ? state['user-useraccessPolicy'] : '[user-useraccessPolicy]' }
${state['user-privacyPolicyChangeLink'] ? `<br>Find out more in the [Changes section of our Privacy Policy](${state['user-privacyPolicyChangeLink']}).` : '[user-privacyPolicyChangeLink]' }
<br></br>

<h2>
  <div class="tooltip">
    Breach
    <div class="tooltiptext">
      ${footnotes.breach}     
    </div>
  </div>: How we will notify you and protect your data in case of an improper disclosure
</h2>
${state['company-legalName'] || 'Our company'} complies with all applicable laws regarding breaches.  
${state['user-useraccessNotification'] ? state['user-useraccessNotification'] : '[user-useraccessNotification]' }

${state['user-privacyPolicyBreachLink'] ? `Find out more in the [Breach section of our Privacy Policy](${state['user-privacyPolicyBreachLink']}).` : '[user-privacyPolicyBreachLink]' }
`
}
module.exports = {
  f: f
}

let data = {
	"formData": {
		"user-useraccessAvailable": "",
		"user-useraccessType-access": false,
		"user-useraccessType-edit": false,
		"user-useraccessType-share": false,
		"user-useraccessType-delete": true,
    "useraccessDeactivation": "",
		"user-useraccessSetting": "",
		"user-useraccessPolicy": "",
    "user-privacyPolicyChangeLink": "",
		"user-useraccessNotification": ""
	},
	"canSubmit": false
}
