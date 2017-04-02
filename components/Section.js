// Container for a specific question
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
FormsySelect, FormsyText, FormsyTime, FormsyToggle, FormsyAutoComplete } from 'formsy-material-ui/lib';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import AutoComplete from 'material-ui/AutoComplete';
import Checkbox from 'material-ui/Checkbox'

let styles = {
  toolbarInPaper: {
    borderRadius: '2px 2px 0px 0px',
    margin: '-2rem -2rem 2rem -2rem',
    backgroundColor: '#7fda85'
  },
  questionHeader: {
    lineHeight: '1.5rem',
    color: '#82d087'
  },
  paperStyle: {
    maxWidth: 600,
    minWidth: 300,
    margin: 'auto',
    padding: '2rem',
  },
  switchStyle: {
    marginTop: '.5rem',
  },
  submitStyle: {
    marginTop: 32,
  },
}

export default class extends React.Component {

  // shouldComponentUpdate({children}, nextState){
  //   return this.props.children !== children;
  // }

  constructor (props) {
    super(props)
    this.state = {}
  }

  changeOtherValue (e) {
    let otherCheckbox = e.target.name.split('-').slice(0,-1).join('-')
    this.state[otherCheckbox] = e.target.value
  }

  render () {
    return <div>
      <div id={this.props.id}></div>
      <br /><br /><br /><br />
      <Paper style={styles.paperStyle}>
        <Toolbar style={styles.toolbarInPaper}>
          <ToolbarGroup>
            <ToolbarTitle text={this.props.title} />
          </ToolbarGroup>
        </Toolbar>
        {this.props.questions.map(function(q){
          if(q.formType === "text") {
            return <FormsyText
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
                    <span style={{display: 'inline-block', marginTop:'.5rem'}}>
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
                        style={{position: 'relative', lineHeight:'inherit', top:'-.4rem'}}
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
    </div>
  }

}
