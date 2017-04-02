import React from 'react'
import Link from 'next/link'
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
FormsySelect, FormsyText, FormsyTime, FormsyToggle, FormsyAutoComplete } from 'formsy-material-ui/lib';
Formsy.addValidationRule('minLengthOrEmpty', (values, value) => {
  console.log(value.length > 0, value)
  return value.length > 0
})
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
    maxWidth: 600,
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

let errorMessages = {
  isDefaultRequiredValue: 'Field is required',
  wordsError: "Please only use letters",
  numericError: "Please provide a number",
  requiredError: "This field is required",
  urlError: "Please provide a valid URL",
}

export default class extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  // shouldComponentUpdate({children}, nextState){
  //   return this.props.children !== children;
  // }

  getMyData () {
    this.setState({formData: this.refs.form.getModel()});
  }

  enableButton() {
    console.log('benabled')
    this.getMyData()
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.getMyData()
    this.setState({
      canSubmit: false,
    });
  }

  static getInitialprops ({req}) {
    return {server: req ? true : false}
  }

  render () {
    let { wordsError, numericError, urlError, requiredError, isDefaultRequiredValue } = errorMessages;
    return <div style={{fontFamily: 'system-ui, Roboto, Helvetica, Sans-Serif'}}>
      <div style={{textAlign:'center'}}>
        <h1 style={{fontWeight: 400}}>MPN GEN</h1>
        <h2 style={{fontWeight: 400}}>Model Privacy Notice Generator</h2>
        <TableOfContents />
      </div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Formsy.Form
          onValid={this.enableButton.bind(this)}
          onInvalid={this.disableButton.bind(this)}
          onValidSubmit={this.submitForm}
          onInvalidSubmit={this.notifyFormError}
          ref="form" >
          {
            formdata.map(function(section){
              return <Section {...section} />
            })
          }
          <br />
          <br />
          <Paper style={styles.paperStyle}>
          <div style={{color: 'red'}}>{!this.state.canSubmit ? "Some fields are unanswered. All fields are required." : ""}</div>
          <RaisedButton
            style={styles.submitStyle}
            type="submit"
            label="Submit"
            disabled={!this.state.canSubmit}
          />
          </Paper>
        </Formsy.Form>
      </MuiThemeProvider>
      <pre style={{fontFamily: 'courier, monospace'}}>{JSON.stringify(this.state, null, 2)}</pre>

    </div>
  }
}


// <FormsyAutoComplete
//   name="frequency-auto-complete"
//   required
//   floatingLabelText="How often do you?"
//   dataSource={[
//     'Never',
//     'Every Night',
//     'Weeknights'
//   ]}
// />


// <FormsyText
//   name="url"
//   validations="isUrl"
//   validationError={urlError}
//   required
//   hintText="http://www.example.com"
//   floatingLabelText="URL"
//   updateImmediately
// />



// <Paper style={styles.paperStyle}>
//   <Toolbar style={styles.toolbarInPaper}>
//     <ToolbarGroup>
//       <ToolbarTitle text="Company Info" />
//     </ToolbarGroup>
//   </Toolbar>
//   <FormsyCheckbox
//     name="agree"
//     label="Do you agree to disagree?"
//     style={styles.switchStyle} />
//   <FormsyToggle
//     name="toggle"
//     label="Toggle"
//     style={styles.switchStyle} />
//   <FormsyRadioGroup name="shipSpeed" defaultSelected="not_light">
//     <FormsyRadio
//       value="light"
//       label="prepare for light speed"
//       style={styles.switchStyle}
//     />
//     <FormsyRadio
//       value="not_light"
//       label="light speed too slow"
//       style={styles.switchStyle}
//     />
//   </FormsyRadioGroup>
//   <FormsyText
//     name="name"
//     validations="isExisty"
//     required
//     validationError={wordsError}
//     hintText="What is your name?"
//     floatingLabelText="Name" />
//   <FormsyText
//     name="age"
//     required
//     validations="isNumeric"
//     validationError={numericError}
//     hintText="Are you a wrinkly?"
//     floatingLabelText="Age (optional)" />
// </Paper>
