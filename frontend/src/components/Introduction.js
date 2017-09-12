import React from 'react';
import Button from 'muicss/lib/react/button';
import LandingPage from './LandingPage';
import SigninPage from './SigninPage';
import { Link } from 'react-router-dom';
import '../styles/index.css';


export default class Introduction extends React.Component {



  render() {
    return (
      <div className="bgImage">
        <div>
        <center>
        <p className="start">MINDFRAME</p>
        <p className="successful">Capture Your Life</p>
        </center>
        </div>

        <div className="startButtons">
        <center>
          <Button><Link style={{textDecoration: 'none'}} to="/LandingPage">Sign Up</Link></Button>
          <Button><Link style={{textDecoration: 'none'}} to="/SigninPage">Login</Link></Button>
        </center>
        </div>
      </div>
    );
  }
}
