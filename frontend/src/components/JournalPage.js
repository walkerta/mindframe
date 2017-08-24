import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';



function JournalPage() {
  return (

  class JournalPageCustomInput extends React.Component {

    <div>
      render () {
        return (
          <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          className="red-border"
    </div>
  )
 }
}

    <div>
      <MuiThemeProvider theme={theme}>
      <form action="" method="post">
      <p>What would you like to write about today?<p>
      <textarea name="" cols="20" rows="4">Enter your comments.....</textarea>
      </MuiThemeProvider>
      </form>
    </div>

  );
}

//render(<JournalPage />, document.querySelector('#JournalPage'));
