import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  navBar: {'top': AppBar.height}
}

export default class DrawerSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <Drawer
          open={this.state.open}
          containerStyle={styles.navBar}
        >
          <MenuItem>Home</MenuItem>
          <MenuItem>JournalEntry</MenuItem>
          <MenuItem>LandingPage</MenuItem>
          <MenuItem>CustomizePage</MenuItem>
          <MenuItem>LogOut</MenuItem>
        </Drawer>
        {this.props.children}
      </div>
    );
  }
}
