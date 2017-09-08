import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Button from 'muicss/lib/react/button';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { Link } from 'react-router-dom';


const styles = {
  radioButton: {
    marginTop: 16,
  },
};

/**
 * Dialog content can be scrollable.
 */
export default class JournalPage extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  

  render() {


    return (
      <div>
        <Button className="button1" onClick={this.handleOpen} >New Entry</Button>
        <Dialog
          title="What would you like to write about today?"

          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
        <center>
        <div className="title">
        <textarea className="journalEntry1" rows="1" cols="69" placeholder="Title"></textarea>
        </div>
      </center><br/>
      <div className="body">
      <center>
        <textarea className="journalEntry" rows="20" cols="69" name="" placeholder="Tell me about your day....."></textarea>
        <br/>
        <Link to="/HomePage"
          className="button2"
          type="submit"
          onClick={this.handleClose}>

            Submit
        </Link>

      </center>
      </div>
        </Dialog>
      </div>
    );
  }
}
