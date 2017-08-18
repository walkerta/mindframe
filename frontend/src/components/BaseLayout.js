import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';



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
               <MenuItem onClick={this.handleClose}>
                 <Link to="/">Landing Page</Link>
               </MenuItem>
               <MenuItem onClick={this.handleClose}>
                 <Link to="/Customize">Customize Page</Link>
               </MenuItem>
             </Drawer>
             {this.props.children}
           </div>

      );
  }
}
