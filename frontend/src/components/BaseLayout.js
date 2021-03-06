import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import 'typeface-roboto';

import LandingPage from './LandingPage';
import CustomizePage from './CustomizePage';
import HomePage from './HomePage';
import SigninPage from './SigninPage';




//import Container from 'muicss/lib/react/container';

export default class BaseLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
  render() {
      return (

          <div>
            <AppBar
              title="Mindframe"

               onLeftIconButtonTouchTap={this.handleToggle}
               iconClassNameRight="muidocs-icon-navigation-expand-more"/>
            <Drawer
               docked={false}
               width={200}
               open={this.state.open}
               onRequestChange={(open) => this.setState({open})}

             >
               <MenuItem onClick={this.handleClose} onChange={LandingPage}>
                 <Link to="/">Landing Page</Link>
               </MenuItem>

               <MenuItem onClick={this.handleClose} onChange={CustomizePage}>
                 <Link to="/Customize">Customize Page</Link>
               </MenuItem>

               <MenuItem onClick={this.handleClose} onChange={HomePage}>
                 <Link to="/HomePage">Home Page</Link>
               </MenuItem>

               <MenuItem onClick={this.handleClose}>
                 <Link to="/JournalPage">Journal Page</Link>
               </MenuItem>

               <MenuItem onClick={this.handleClose}>
                 <Link to="/ListPage">List Page</Link>
               </MenuItem>


               <MenuItem onClick={this.handleClose}>
                 <Link to="/SigninPage">Sign In</Link>
               </MenuItem>

             </Drawer>
             {this.props.children}
           </div>

      );
  }
}
