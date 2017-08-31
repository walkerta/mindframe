import React from 'react';
import Button from 'muicss/lib/react/button';
import DatePicker from 'material-ui/DatePicker';

export default class JournalPage extends React.Component {

  render () {
    return (
      <div>
        <DatePicker defaultDate={new Date()}
          className="red-border" />
        <p>What would you like to write about today?</p>
        <textarea name="" cols="100" rows="8">Tell me about your day.....</textarea>

          <br />
        <Button color="primary" type="submit" size="lg">Save Entry</Button>{' '}
      </div>
    )
  }
}
