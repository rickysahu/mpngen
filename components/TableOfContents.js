// Header showing what's complete and incomplete
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'

let sections = [
  {id: 'company', name: 'Company', isDone: true},
  {id: 'usage', name: 'Data Usage', isDone: true},
  {id: 'sharing', name: 'Data Sharing', isDone: true},
  {id: 'user', name: 'User Options', isDone: true},
  {id: 'policy', name: 'Policy Changes', isDone: true}
]

export default class extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    window.addEventListener('scroll', function(event){          //detect when user scroll to top and set position to relative else sets position to fixed
      var sticky = document.getElementById("sticky")
      var stickyPrev = document.getElementById("sticky-prev")
      var stickyHolder = document.getElementById("sticky-holder")
      if( document.body.scrollTop+document.documentElement.scrollTop >= stickyPrev.offsetTop+stickyPrev.scrollHeight-1){
        sticky.style.position = "fixed";
        sticky.style['box-shadow'] = "0px 1px 6px rgba(0, 0, 0, 0.12)";
        stickyHolder.style.display = "block"
      } else {
        sticky.style.position = "relative";
        sticky.style['box-shadow'] = "0px 0px 0px #fff";
        stickyHolder.style.display = "none"
      }
    });
  }

  render() {
    return <div>
      <div id="sticky-prev">The MPN Generator will guide you through completeing these steps</div>
      <span id="company"></span>
      <div id="sticky-holder" style={{display:'none', height:'3rem'}}>&nbsp;</div>
      <div id="sticky" style={{ marginLeft:'-10px', padding: '1rem .5rem', position: 'relative', width: '100%', top:0, backgroundColor: '#fff', zIndex: 100}}>
      {sections.map(function(sectionArray){
        return <div style={{ display: 'inline-block', paddingRight: '1rem' }}>
          <span>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
              <Checkbox checked={sectionArray.isDone} label={''} style={{ display: 'inline-block', width: '2rem' }} />
            </MuiThemeProvider>
          </span>
          <a href={`#${sectionArray.id}`} style={{verticalAlign: '.4rem', textDecoration:'none', color: '#000'}}>
            {`${sectionArray.name}`}
          </a>
        </div>
      })}
      </div>
      <br/>
      <br/>
    </div>
  }

}
// <a href={`#${sectionArray.id}`}>&#9711; {sectionArray.name}</a>&nbsp;
