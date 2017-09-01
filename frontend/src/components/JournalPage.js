import React from 'react';
import Button from 'muicss/lib/react/button';
import DatePicker from 'material-ui/DatePicker';

export default class JournalPage extends React.Component {
  constructor(props){
    super(props);
    this.state={

      entries:[],

    }

  }
  render () {
    return (

      <div>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          className="red-border"
          />
        <p>What would you like to write about today?</p>
        <textarea name="" cols="100" rows="8" placeholder="Tell me about your day....."></textarea>
        <br />
        <Button onclick="myFunction()" color="primary" type="submit" size="lg">Save Entry</Button>{' '}
      </div>
    )
  }
}
