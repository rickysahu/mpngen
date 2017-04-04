// Container for a specific question
import React from 'react'
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { FormsyCheckbox, FormsyCheckboxGroup, FormsyDate, FormsyRadio, FormsyRadioGroup,
FormsySelect, FormsyText, FormsyTime, FormsyToggle, FormsyAutoComplete } from 'formsy-material-ui/lib';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import AutoComplete from 'material-ui/AutoComplete';
import Checkbox from 'material-ui/Checkbox';
import ReactMarkdown from 'react-markdown';
// let templates = require('../fixtures/templates/index.js');
import templates from '../fixtures/templates';

let styles = {
  questionHeader: {
    lineHeight: '1.5rem',
    color: '#82d087'
  },
  paperStyle: {
    margin: '2rem .5rem',
    textAlign: 'left',
    float: 'left',
    display: 'inline-block',
    maxWidth: 500,
    minWidth: 300,
    padding: '1rem 2rem',
  },
  paperMDStyle: {
    margin: '2rem .5rem',
    textAlign: 'left',
    float: 'left',
    display: 'inline-block',
    maxWidth: 400,
    minWidth: 200,
    padding: '1rem 1rem',
  },
  switchStyle: {
    marginTop: '.2rem',
  },
  submitStyle: {
    marginTop: 32,
  },
}

export default class extends React.Component {

  // shouldComponentUpdate({children}, nextState){
  //   return this.props.children !== children;
  // }

  getMyData () {
    this.setState({formData: this.refs.form.getModel()});
  }

  // check which questions have valid answers.
  // specifically needed for checkbox group which doesnt have 'required' support in formsy
  getInvalidQuestions (answers) {
    let questionValid = {}
    if (typeof answers === 'undefined') {
      return ['no questions answered']
    }
    Object.keys(answers).map(function(input){
      let qName = input.split('-')[1]
      let value = answers[input]
      console.log(input,value)
      if (typeof questionValid[qName] === 'undefined' || questionValid[qName] === false) {
        if (typeof value === 'boolean') {
          questionValid[qName] = value
        } else if (typeof value !== 'undefined' && value.trim().length > 0) {
          questionValid[qName] = true
        } else {
          questionValid[qName] = false
        }
      }
    }.bind(this))
    console.log(questionValid)
    return Array.from(new Set(Object.keys(questionValid).map(function(k){if(questionValid[k] === false){return k}}))).filter(f=>f)
  }

  enableButton() {
    this.getMyData()
    let invalidQuestions = this.getInvalidQuestions(this.refs.form.getModel())
    console.log(invalidQuestions)
    if (invalidQuestions.length === 0){
      let stateForParent = {form: this.refs.form.getModel(), canSubmit: true}
      this.props.setParentState(this.props.id, stateForParent)
      this.setState({canSubmit: true});
    } else {
      let stateForParent = {form: this.refs.form.getModel(), canSubmit: false}
      this.props.setParentState(this.props.id, stateForParent)
      this.setState({canSubmit: false})
    }
  }

  disableButton() {
    this.getMyData()
    if (this.state.canSubmit) {
      let stateForParent = {form: this.refs.form.getModel(), canSubmit: false}
      this.props.setParentState(this.props.id, stateForParent)
    }
    this.setState({
      canSubmit: false,
    });
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  changeOtherValue (e) {
    e.preventDefault();
    let otherCheckbox = e.target.name.split('-').slice(0,-1).join('-')
    this.state[otherCheckbox] = e.target.value
  }

  render () {
    return <div style={{width: '100%', display: 'inline-block', textAlign:'center'}}>
      <div id={this.props.id}></div>
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Formsy.Form
            onValid={this.enableButton.bind(this)}
            onInvalid={this.disableButton.bind(this)}
            onValidSubmit={this.submitForm}
            onInvalidSubmit={this.notifyFormError}
            style={{display: 'inline-block'}}
            ref="form" >
            <br /><br />
            <Paper style={styles.paperStyle}>
              <Toolbar style={{borderRadius: '2px 2px 0px 0px',margin: '-1rem -2rem 2rem -2rem',backgroundColor: this.state.canSubmit ? '#7fda85' : '#dedede'}}>
                <ToolbarGroup>
                  <ToolbarTitle text={this.props.title} />
                </ToolbarGroup>
              </Toolbar>
              {this.props.questions.map(function(q){
                if(typeof q.showif !== 'undefined' && this.state.formData){
                  if(q.showif.value.indexOf(this.state.formData[q.showif.field]) === -1) {
                    return ''
                  }
                }
                if(q.formType === "text") {
                  return <div>
                    {q.header ? <h2 style={styles.questionHeader}><span><br />{q.header}</span></h2> : <span></span> }
                    {q.helper ? <h4 style={{marginBottom: '0px', lineHeight: '1.5rem'}}>{q.helper}</h4> : <span></span> }
                    <FormsyText
                      name={this.props.id + "-"+ q.name}
                      type={q.inputType || "text"}
                      validations={q.validations}
                      required={q.required}
                      validationError={q.validationError}
                      hintText={q.hintText}
                      fullWidth={true}
                      multiLine={q.multiLine ? true : false}
                      rows={q.multiLine ? 2 : 1}
                      onKeyDown={ this.keyDownText }
                      style={q.style}
                      floatingLabelText={q.label} />
                    </div>
                } else if (q.formType === "autocomplete") {
                  return <FormsyAutoComplete
                    name={this.props.id + "-"+ q.name}
                    type={q.inputType || "text"}
                    required={q.required}
                    hintText={q.hintText}
                    dataSource={q.dataSource}
                    fullWidth={true}
                    openOnFocus={true}
                    filter={AutoComplete.fuzzyFilter}
                    floatingLabelText={q.label} />
                } else if (q.formType === "radio") {
                  return <div>
                    <h2 style={styles.questionHeader}>{q.header ? <span><br />{q.header}</span> : ''}</h2>
                    <h4 style={{lineHeight: '1.5rem'}}>{q.label}</h4>
                    <FormsyRadioGroup
                      name={this.props.id + "-"+ q.name}
                      required
                      label={q.label} >
                        {q.choices.map(function(choice){
                          return <FormsyRadio
                            value={choice.value}
                            label={choice.label}
                            style={styles.switchStyle}
                          />
                        })}
                      </FormsyRadioGroup>
                    </div>
                } else if (q.formType === "checkbox") {
                  return <div>
                    <h2 style={styles.questionHeader}>{q.header ? <span><br />{q.header}</span> : ''}</h2>
                    <h4 style={{lineHeight: '1.5rem'}}>{q.label}</h4>
                    {q.choices.map(function(choice){
                      if(choice.label === 'Other'){
                        return <div>
                          <span style={{display: 'inline-block', marginTop:'0rem'}}>
                            <Checkbox
                              checked={typeof this.state[this.props.id+"-"+q.name+"-"+choice.value] !== 'undefined' && this.state[this.props.id+"-"+q.name+"-"+choice.value].trim().length > 0}
                              label={'Other:'}
                              style={{ display: 'inline-block', width: '6rem' }} />
                          </span>
                          <span style={{display: 'inline-block'}}>
                            <FormsyText
                              id={this.props.id+"-"+q.name+"-"+choice.value+"-text"}
                              name={this.props.id+"-"+q.name+"-"+choice.value+"-text"}
                              type={"text"}
                              onChange={this.changeOtherValue.bind(this)}
                              required={false}
                              hintText={'fill in to check "other" option'}
                              style={{position: 'relative', lineHeight:'inherit', top:'-.6rem'}}
                              fullWidth={false} />
                          </span>
                        </div>
                      } else {
                        return <FormsyCheckbox
                          name={this.props.id+"-"+q.name+"-"+choice.value}
                          label={choice.label}
                          style={styles.switchStyle}
                        />
                      }
                    }.bind(this))}
                  </div>
                } else {
                  return <div>{q.formType}</div>
                }
              }.bind(this))}
              {JSON.stringify(this.state)}
            </Paper>
          </Formsy.Form>
        </MuiThemeProvider>
        <div style={{display: 'inline-block', fontSize: '.8rem'}}>
          <br /><br />
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <div style={styles.paperMDStyle}>
              <ToolbarGroup>
                <ToolbarTitle text={this.props.title + ' (Preview)'} style={{color: this.state.canSubmit ? '#7fda85' : '#aaa'}} />
              </ToolbarGroup>
              <ReactMarkdown source={templates[this.props.id].f(this.state.formData)}/>
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    </div>
  }

}
