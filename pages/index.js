import React from 'react'
import Link from 'next/link'

export default class extends React.Component {

  static getInitialprops ({req}) {
    return {server: req ? true : false}
  }

  render () {
    return <div>
      <h1>MPN Generator</h1>
    </div>
  }
}


