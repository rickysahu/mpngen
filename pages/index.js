import React from 'react'
import Link from 'next/link'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TableOfContents from '../components/TableOfContents';
import Section from '../components/Section';
import formdata from '../fixtures/formdata';

import injectTapEventPlugin from 'react-tap-event-plugin';
try {
  injectTapEventPlugin();
} catch (e) {}

let styles = {
  toolbarInPaper: {
    margin: '-1rem -1rem 1rem -1rem'
  },
  paperStyle: {
    maxWidth: 500,
    minWidth: 300,
    margin: 'auto',
    padding: '1rem',
  },
  switchStyle: {
    marginBottom: 16,
  },
  submitStyle: {
    marginTop: 32,
  },
}

export default class extends React.Component {

  constructor (props) {
    super(props)
    this.setStateFromChild = this.setStateFromChild.bind(this);
    this.state = {}
  }

  setStateFromChild (childId, childState) {
    this.state[childId] = childState
    this.setState(this.state)
  }

  // shouldComponentUpdate({children}, nextState){
  //   return this.props.children !== children;
  // }

  static getInitialprops ({req}) {
    return {server: req ? true : false}
  }

  render () {
    return <div style={{fontFamily: 'system-ui, Roboto, Helvetica, Sans-Serif'}}>
      <div style={{textAlign:'center'}}>
        <h1 style={{color:'#7fda85'}}>mpn gen (1upHealth)</h1>
        <h2 style={{fontWeight: 400}}>1upHealth Model Privacy Notice Generator</h2>
        <h1>{`Let's Build Your Model Privacy Notice`}</h1>
        <div style={{textAlign: 'center', display:'block', width: '100%'}}>
          <div style={{textAlign: 'left', display:'inline-block', maxWidth: '600'}}>
            Welcome to the <a href='https://1uphealth.care'>1upHealth</a> Model Privacy Notice Generator (mpn gen). This project is a response to the USA Challenge.gov Healthcare Privacy Policy Snapshot Challenge.
            <br />
            <br />
            Mpn Gen has many features including form validation, multi-device friendly layout, and helpful UX to guide users through the process. The left hand side presents inputs for the Model Privacy Notice. The right hand side shows snippets of the output. You can learn <a href='/'>more about the features here</a>. Go ahead and jump right into the form to how it works.
          </div>
        </div>
        <br />
        <TableOfContents parentState={this.state}/>
      </div>
          {
            formdata.map(function(section){
              return <Section {...section} setParentState={this.setStateFromChild}/>
            }.bind(this))
          }
      <pre style={{fontFamily: 'courier, monospace'}}>{JSON.stringify(this.state, null, 2)}</pre>

    </div>
  }
}
