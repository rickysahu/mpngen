import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
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
import footnotes from '../fixtures/footnotes';
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
      sourceData += templates['security'].hipaa(fullForm)
      sourceData += templates['data'].f(fullForm)
      sourceData += templates['security'].nonhipaa(fullForm)
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

  static getInitialprops ({req}) {
    return {server: req ? true : false}
  }

  render () {
    return <div style={{fontFamily: 'system-ui, Roboto, Helvetica, Sans-Serif', lineHeight: '1.5rem'}}>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no"/>
        <meta name="description" content="MPN GEN - 1upHealth Healthcare Model Privacy Notice Generator"/>
      </Head>
      <div style={{textAlign:'center'}}>
        <h1 >MPN GEN (1upHealth)</h1>
        <h1 style={{lineHeight: '2rem'}}>{`Let's Build Your Privacy Notice`}</h1>
        <div style={{textAlign: 'center', display:'block', width: '100%'}}>
          <div style={{textAlign: 'left', display:'inline-block', maxWidth: '600'}}>
            Welcome to the <a href='https://1uphealth.care'>1upHealth</a> Model Privacy Notice Generator (mpn gen). This project is a response to the USA Challenge.gov Healthcare Privacy Policy Snapshot Challenge.
            <br /><br />
            MPN GEN will help you create a Privacy Notice for consumers of your healthcare app, company, or organization. It has many features including form validation, multi-device friendly layout, and helpful user experience to guide users through the process. The left side presents inputs for the Model Privacy Notice. The right side shows snippets of the output. You can learn <a href='/'>more about the features here</a>. 
            <h3>To get started <a href='#mpngen'>jump right into the form</a> or read on for more background.</h3>
            <br />
            <h3>MPN GEN Video</h3>
            <img src='./static/mpn-gen.gif' width='100%' style={{border: '1px solid #eee', borderRadius: '3px'}}/>
            <h1>2016 Model Privacy Notice</h1>
            <h2>Draft Preamble</h2>
            <h3>As of December 2, 2016</h3>
            The Model Privacy Notice (MPN) is a voluntary, openly available resource designed to help health technology developers provide transparent notice to consumers about what happens to their digital health data when the consumer uses the developer’s product. The MPN’s approach is to provide a standardized, easy-to-use framework to help developers clearly convey information about privacy and security to their users. The MPN does not mandate specific policies or substitute for more comprehensive or detailed privacy policies. 
            <br/>
            <br/>
            The Office of the National Coordinator for Health Information Technology (ONC) is updating the 2011 version of the MPN. The 2011 version focused on personal health records (PHRs), which were the emerging technology at the time. The health information technology market has changed significantly in the last five years and there is now a larger variety of products such as exercise trackers, wearable health technologies, or mobile applications that help individuals monitor various body measurements. As such, it is increasingly important for consumers to be aware of health technology developers’ privacy and security policies, including data sharing practices. 
            <h2>Preamble for Health Technology Developers</h2>
            <h3>What is the Model Privacy Notice (MPN)?</h3>
            The MPN is a voluntary, openly available resource to help health technology developers who collect digital health data clearly convey information about their privacy policies to their users. Similar to a nutritional label, the MPN provides a snapshot of a company’s existing privacy and security policies to encourage transparency and help consumers make informed choices when selecting products. The MPN does not mandate specific policies or substitute for more comprehensive or detailed privacy policies. 
            <h3>Who is the MPN for?</h3>
            The MPN is for health technology developers whose technology or app uses and/or {`shares users' `} 
            <div className="tooltip">
              health data
              <div className="tooltiptext">
                {footnotes.healthData}
              </div>
            </div>
            <h3>What laws might apply to you?</h3>Health technology developers should consult the Federal Trade Commission (FTC)’s <a rel='nofollow' target='blank' href='https://www.ftc.gov/tips-advice/business-center/guidance/mobile-health-apps-interactive-tool'>Mobile Health Apps Interactive Tool</a> (which was developed in conjunction with the following Department of Health and Human Services offices and agency: ONC, Office for Civil Rights (OCR), and the Food and Drug Administration (FDA)) to determine if they need to comply with the FTC Act, the FTC’s Health Breach Notification Rule, HHS’s Health Insurance Portability and Accountability Act (HIPAA) Privacy, Security and Breach Notification Rules, or FDA rules implementing the Federal Food, Drug & Cosmetic Act, as applicable. This tool is not meant to be legal advice about all compliance obligations, but identifies relevant laws and regulations from these three federal agencies.            
            <h3>Does use of this MPN satisfy HIPAA requirements to provide a notice of privacy practices?</h3>
            No. The MPN does not ensure compliance with HIPAA or any other law. However, the MPN may be used, as applicable, in conjunction with a HIPAA notice of privacy practices (please see MPN). To find more information on HIPAA directed towards health technology developers, visit the <a rel='nofollow' target='blank' href='http://hipaaqsportal.hhs.gov/'>HIPAA Q’s Portal for Health App Developers</a>. 
          </div>
        </div>
        <br /><br />
        <h2 id='mpngen'>Create a Custom Model Privacy Notice</h2>
        <br />
        <div style={{textAlign: 'left', display:'inline-block', maxWidth: '600'}}>
          The MPN generator will help you create a Consumer Privacy Notice. It requires you provide links to a full company Privacy Policy, and, if applicable, HIPAA Notice of Privacy Practices and documentation for adjusting certain user perferences.
        </div>
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
