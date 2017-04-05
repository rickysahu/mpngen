function styles (state) {
  return `
<style>
  h2 {color: #76c77c; font-weight: 200; background-color: #444; padding: 1.5rem; margin-bottom: 0px}
  table {border-collapse: collapse}
  th, td {padding: 1.5rem; vertical-align: top; border: 1px solid #eee}
  th {background-color: #ddd;}
  a {color: #76c77c}
  th:last-child, td:last-child {width: 40%;}
</style>
  
`
}

function top (state) {
  return `
# Welcome to the ${state['company-legalName'] || '[company-legalName]'} Privacy Notice 
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
