function top (state) {
  return `
# Welcome to the ${state['company-legalName'] || '[company-legalName]'} Privacy Notice 
`
}

function f (state) {
  if (typeof(state) === 'undefined'){
    state = {}
  }
  return top(state)
}

module.exports = {
  f: f,
  top: top,
}
