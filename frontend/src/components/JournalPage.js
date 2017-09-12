import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Button from 'muicss/lib/react/button';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { Link } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';



const styles = {
  radioButton: {
    marginTop: 16,
  },
};

const style1 = {
  marginRight: 20,
};


/**
 * Dialog content can be scrollable.
 */
export default class JournalPage extends React.Component {

  addEntry = () => {
   const {title, body} = this.state;

   // Your API expects POST data to be sent as form data, which is why we need the next few lines
   const form = new FormData();
   form.append("title", title);
   form.append("body", body);
   form.append("user_id", 12);
   // This particular end point is used to create a new journal entry
   fetch("https://mindframebackend.herokuapp.com/users/12", {
       method: "POST",
       body: form
   })
   // The response type of the request is JSON
   .then(response => response.json())
   // Once we add a new journal entry, we should fetch all journal entries so that we can update the display
   .then(this.getEntries())
  }
  getEntries = () => {
    /// This end point just gets a list of all entries
    fetch("https://mindframebackend.herokuapp.com/entries")
      .then(r => r.json())
      .then(entries => {
        this.setState({entries: entries.filter(function(entry){
          return entry.user_id === 12;
        })
      });
    })
  }

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
      <div className="journalBackground">
      <div>
      <FloatingActionButton style={style1} onClick={this.handleOpen}>
      <ContentAdd />
    </FloatingActionButton>

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
        <Button><Link style={{textDecoration: 'none'}} to="/HomePage" onClick={this.handleClose}>Submit</Link></Button>
        </center>
      </div>
        </Dialog>
      </div>
    </div>
    );
  }
}
