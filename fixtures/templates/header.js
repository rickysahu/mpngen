function styles (state) {
  return `
<style>
  h2 {
    color: #3dace3;
    font-weight: 400;
    background-color: #ebebeb;
    padding: 1.5rem;
    margin-bottom: 0px;
  }
  a {
    color: #3dace3;
  }

  .mpn: {
    font-family: "Times New Roman", Georgia, Serif;
  }

  /* Table styles */
  table {
    border-collapse: collapse
  }
  th, td {
    padding: 1.5rem;
    vertical-align: top;
    border: 1px solid #eee
  }
  th {
    background-color: #f7f7f7;
  }
  th:last-child, td:last-child {
    width: 40%;
  }

  /* Tooltip container */
  .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 3px solid #ccc;
  }

  /* Tooltip text */
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 200px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    background-color: #555;
    color: #fff;
    text-align: left;
    padding: 5px 7px;
    border-radius: 3px;

    /* Position the tooltip text */
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;

    /* Fade in tooltip */
    opacity: 0;
    transition: opacity 1s;
  }

  /* Tooltip arrow */
  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }  
  
</style>
  
`
}

function top (state) {
  return `
# ${state['company-legalName'] || '[company-legalName]'} Model Privacy Notice 
**Note:** Developers of consumer health technology or apps (“health technology developers”) that collect 
digital health data about individuals would use this template to disclose to consumers the developer’s 
privacy and security policies. **"We"** refers to the health technology developer or technology product and 
**"you/your"** refers to the user/consumer of the health technology. 
</div> 
`
}

function f (state) {
  if (typeof(state) === 'undefined'){
    state = {}
  }
  return styles(state)+top(state)
}

module.exports = {
  f: f,
  top: top,
  styles: styles,
}



// ### Privacy Notice Sections
// [Use: How we use your data internally](#mpn-)  
// [Share: How we share your data externally with other companies or entities](#mpn-)  
// [Sell: Who we sell your data to](#mpn-)  
// [Store: How we store your data](#mpn-)  
// [Encryption: How we encrypt your data](#mpn-)  
// [Privacy: How this technology accesses other data](#mpn-)  
// [User Options: What you can do with the data that we collect](#mpn-)  
// [Deactivation : What happens to your data when your account is deactivated](#mpn-)  
// [Policy Changes: How we will notify you if our privacy policy changes](#mpn-)  
// [Breach : How we will notify you and protect your data in case of an improper disclosure](#mpn-)  
// [Contact Us](#mpn-)  
// <div>When you use ${state['company-legalName'] || '[company-legalName]'} services, you trust us with your information. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it. You can find the full <a href='${state['company-privacyPolicyLink'] || "[company-privacyPolicyLink]"}' target='_blank'>privacy policy here</a> (${state['company-privacyPolicyLink'] || "[company-privacyPolicyLink]"}). If you have questions you can reach us at 
// <a href='mailto:${state['company-email'] || "[company-email]"}'>${state['company-email'] || "[company-email]"}</a>.
// 
