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
import ExportBar from '../components/ExportBar';
import formdata from '../fixtures/formdata';
import ReactMarkdown from 'react-markdown';
import templates from '../fixtures/templates';

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

  showMPN (returnSource) {
    let sourceData = '';
    try {
      let fullForm = Object.assign(
        this.state.company.form, 
        this.state.data.form, 
        this.state.security.form, 
        this.state.user.form);
      sourceData += templates['header'].f(fullForm)
      sourceData += templates['company'].hipaa(fullForm)
      sourceData += templates['data'].f(fullForm)
      sourceData += templates['security'].f(fullForm)
      sourceData += templates['user'].f(fullForm)
      sourceData += templates['company'].contact(fullForm)
      if(returnSource){
        return sourceData
      }
    } catch (e) {
      sourceData = `<div style='color: red'>Not all fields complete. Final Privacy Notice unavailable</div>`
    }
    return <ExportBar sourceData={sourceData} jsonData={this.state}/>

  }
  // <div style={{width: '100%', textAlign: 'center'}}>
  //   <br /><br />
  //   <MuiThemeProvider muiTheme={getMuiTheme()}>
  //   <Paper style={{
  //     margin: '2rem .5rem',
  //     textAlign: 'left',
  //     display: 'inline-block',
  //     maxWidth: 950,
  //     minWidth: 300,
  //     padding: '1rem 2rem',
  //   }}>
  //     <Toolbar style={{borderRadius: '2px 2px 0px 0px',margin: '-1rem -2rem 2rem -2rem',backgroundColor: this.state.canSubmit ? '#7fda85' : '#dedede'}}>
  //       <ToolbarGroup>
  //         <ToolbarTitle text={'Preview Full Privacy Notice'} />
  //       </ToolbarGroup>
  //     </Toolbar>
  //     <ReactMarkdown source={sourceData}/>
  //   </Paper>
  //   </MuiThemeProvider>
  // </div>


  // shouldComponentUpdate({children}, nextState){
  //   return this.props.children !== children;
  // }

  static getInitialprops ({req}) {
    return {server: req ? true : false}
  }

  render () {
    return <div style={{fontFamily: 'system-ui, Roboto, Helvetica, Sans-Serif', lineHeight: '1.5rem'}}>
      <div style={{textAlign:'center'}}>
        <h1 >mpn gen (1upHealth)</h1>
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
      <div style={{textAlign: 'left'}}>
        {this.showMPN()}
      </div>
    </div>
  }
}
