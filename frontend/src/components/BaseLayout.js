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
import '../styles/index.css';




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
              zDepth={100}
              title="MINDFRAME"
              className="appBar"
               onLeftIconButtonTouchTap={this.handleToggle}
               iconClassNameRight="muidocs-icon-navigation-expand-more"/>

            <Drawer
               docked={false}

               zDepth={10}
               width={200}
               open={this.state.open}
               onRequestChange={(open) => this.setState({open})}

             >
             <div className="theme">
               <MenuItem onClick={this.handleClose} onChange={LandingPage}>
                 <Link to="/" className="theme">Landing Page</Link>
               </MenuItem>

               <MenuItem onClick={this.handleClose} onChange={HomePage}>
                 <Link to="/HomePage" className="theme">Home Page</Link>
               </MenuItem>

               <MenuItem onClick={this.handleClose}>
                 <Link to="/JournalPage" className="theme">Journal Page</Link>

               </MenuItem>
               <MenuItem onClick={this.handleClose}>
                 <Link to="/SigninPage" className="theme">Sign In</Link>
               </MenuItem>
               </div>
             </Drawer>
             {this.props.children}
           </div>

      );
  }
}
