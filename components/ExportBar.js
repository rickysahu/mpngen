import React from 'react'
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import ReactMarkdown from 'react-markdown';
import showdown from 'showdown';

let converter = new showdown.Converter();
    
export default class extends React.Component {
  state = {
    openJson: false,
    openMarkdown: false,
    openHtml: false,
  };

  constructor (props) {
    super(props)
    this.state = {}
  }

  handleMarkdownOpen = () => {
    this.setState({openMarkdown: true});
  };

  handleMarkdownClose = () => {
    this.setState({openMarkdown: false});
  };

  handleHtmlOpen = () => {
    this.setState({openHtml: true});
  };

  handleHtmlClose = () => {
    this.setState({openHtml: false});
  };

  handleJsonOpen = () => {
    this.setState({openJson: true});
  };

  handleJsonClose = () => {
    this.setState({openJson: false});
  };
  
  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleMarkdownClose}
      />,
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleHtmlClose}
      />,
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleJsonClose}
      />,
    ];

    return (
      <div style={{width: '100%', textAlign: 'center'}}>
        <MuiThemeProvider muiTheme={getMuiTheme({palette: {primary1Color: '#3dace3'}})}>
          <div>
            <div>
              <h1>Export Privacy Notice As</h1>
              <RaisedButton primary={true} label="Markdown" onTouchTap={this.handleMarkdownOpen} />&nbsp;&nbsp;
              <RaisedButton primary={true} label="HTML" onTouchTap={this.handleHtmlOpen} />&nbsp;&nbsp;
              <RaisedButton primary={true} label="JSON Answers" onTouchTap={this.handleJsonOpen} />              
            </div>   
            <Paper style={{
              margin: '2rem .5rem',
              textAlign: 'left',
              display: 'inline-block',
              maxWidth: 950,
              minWidth: 300,
              padding: '1rem 2rem',
            }}>
              <Toolbar style={{borderRadius: '2px 2px 0px 0px',margin: '-1rem -2rem 2rem -2rem',backgroundColor: this.state.canSubmit ? '#7fda85' : '#dedede'}}>
                <ToolbarGroup>
                  <ToolbarTitle text={'Full Privacy Notice'} />
                </ToolbarGroup>
              </Toolbar>
              <Dialog
                title="Markdown Code"
                contentStyle={{width:'95%', maxWidth: 'none'}}
                actions={[actions[0]]}
                modal={false}
                open={this.state.openMarkdown}
                onRequestClose={this.handleMarkdownClose}
                autoScrollBodyContent={true}
              >
                <pre>{this.props.sourceData}</pre>
              </Dialog>
              <Dialog
                title="HTML Code"
                contentStyle={{width:'95%', maxWidth: 'none'}}
                actions={[actions[1]]}
                modal={false}
                open={this.state.openHtml}
                onRequestClose={this.handleHtmlClose}
                autoScrollBodyContent={true}
              >
                <pre>{converter.makeHtml(this.props.sourceData)}</pre>
              </Dialog>
              <Dialog
                title="JSON Answers"
                contentStyle={{width:'95%', maxWidth: 'none'}}
                actions={[actions[2]]}
                modal={false}
                open={this.state.openJson}
                onRequestClose={this.handleJsonClose}
                autoScrollBodyContent={true}
              >
                <pre style={{fontFamily: 'courier, monospace'}}>{JSON.stringify(this.props.jsonData, null, 2)}</pre>
              </Dialog>
              <br />
              <br />
              <ReactMarkdown source={this.props.sourceData}/>
              <br />
              <br />
            </Paper>
            {this.props.sourceData.length < 1000 ? '' : (
              <div>
                <h1>Export Privacy Notice As</h1>
                <RaisedButton primary={true} label="Markdown" onTouchTap={this.handleMarkdownOpen} />&nbsp;&nbsp;
                <RaisedButton primary={true} label="HTML" onTouchTap={this.handleHtmlOpen} />&nbsp;&nbsp;
                <RaisedButton primary={true} label="JSON Answers" onTouchTap={this.handleJsonOpen} />
              </div>
            )}
            <br />
            <br />
          </div>
        </MuiThemeProvider>
      </div>
    );

  }
}
