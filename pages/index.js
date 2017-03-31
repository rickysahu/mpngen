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

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let styles = {
  paperStyle: {
    width: 300,
    margin: 'auto',
    padding: 20,
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
    return <div style={{fontFamily: 'Roboto, Helvetica, Sans-Serif'}}>
      <h1>MPN Generator</h1>

      <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Formsy.Form
            onValid={this.enableButton.bind(this)}
            onInvalid={this.disableButton.bind(this)}
            onValidSubmit={this.submitForm}
            onInvalidSubmit={this.notifyFormError}
            ref="form"
          >
          <Paper style={styles.paperStyle}>
            <FormsyCheckbox
              name="agree"
              label="Do you agree to disagree?"
              style={styles.switchStyle}
            />
            <FormsyToggle
              name="toggle"
              label="Toggle"
              style={styles.switchStyle}
            />
            <FormsyRadioGroup name="shipSpeed" defaultSelected="not_light">
              <FormsyRadio
                value="light"
                label="prepare for light speed"
                style={styles.switchStyle}
              />
              <FormsyRadio
                value="not_light"
                label="light speed too slow"
                style={styles.switchStyle}
              />
            </FormsyRadioGroup>
            <FormsyText
              name="name"
              validations="isExisty"
              required
              validationError={wordsError,isDefaultRequiredValue}
              hintText="What is your name?"
              floatingLabelText="Name"
            />
            <FormsyText
              name="age"
              required
              validations="isNumeric"
              validationError={numericError}
              hintText="Are you a wrinkly?"
              floatingLabelText="Age (optional)"
            />
            </Paper>
            <br />
            <br />
            <Paper style={styles.paperStyle}>
            <div style={{color: 'red'}}>{!this.state.canSubmit ? "All fields are required" : ""}</div>
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
