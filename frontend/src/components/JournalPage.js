import React from 'react';
import DatePicker from 'material-ui/DatePicker';

export default class JournalPage extends React.Component {
  render () {
    return (
      <div>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          className="red-border" />
        <p>What would you like to write about today?</p>
        <textarea name="" cols="20" rows="4">Enter your comments.....</textarea>
      </div>
    )
  }
}
