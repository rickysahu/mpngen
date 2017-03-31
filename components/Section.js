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

let styles = {
  toolbarInPaper: {
    borderRadius: '2px 2px 0px 0px',
    margin: '-1rem -1rem 1rem -1rem',
    backgroundColor: '#7fda85'
  },
  paperStyle: {
    maxWidth: 500,
    minWidth: 300,
    margin: 'auto',
    padding: '1rem',
  },
  switchStyle: {
    marginTop: 16,
  },
  submitStyle: {
    marginTop: 32,
  },
}

export default class extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
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
              <h4 style={{lineHeight: '1.5rem'}}>{q.label}</h4>
              {q.choices.map(function(choice){
                return <FormsyCheckbox
                  name={this.props.id+"-"+q.name+"-"+choice.value}
                  label={choice.label}
                  style={styles.switchStyle}
                />
              }.bind(this))}
            </div>
          } else {
            return <div>{q.formType}</div>
          }
        }.bind(this))}
      </Paper>
    </div>
  }

}
