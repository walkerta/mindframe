import React from 'react';
import Button from 'muicss/lib/react/button';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';



export default class JournalPage extends React.Component {
  render () {
    return (
      <div>
        <div className="body">
        <center>
          <p className="write">What would you like to write about today?</p>
          <textarea className="journalEntry" name="" cols="100" rows="8" placeholder="Tell me about your day....."></textarea>
          <br/>
          <Button
            className="button1"
            type="submit">
              Submit
          </Button>
        </center>
        </div>
      </div>
    )
  }
}
