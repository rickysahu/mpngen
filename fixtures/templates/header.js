function styles (state) {
  return `
<style>
  h2 {
    color: #76c77c;
    font-weight: 200;
    background-color: #444;
    padding: 1.5rem;
    margin-bottom: 0px;
  }
  a {
    color: #76c77c;
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
    background-color: #ddd;
  }
  th:last-child, td:last-child {
    width: 40%;
  }

  /* Tooltip container */
  .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 3px solid #7fda85;
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
# Welcome to the ${state['company-legalName'] || '[company-legalName]'} Privacy Notice 
When you use ${state['company-legalName'] || '[company-legalName]'} services, you trust us with your information. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it. You can find the full [privacy policy here](${state['company-privacyPolicyLink'] || "[company-privacyPolicyLink]"}). If you have questions you can reach us at [${state['company-email'] || "[company-email]"}](mailto:${state['company-email'] || "[company-email]"}).
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
