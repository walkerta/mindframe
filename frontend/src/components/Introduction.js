import React from 'react';
import Button from 'muicss/lib/react/button';
import LandingPage from './LandingPage';
import SigninPage from './SigninPage';
import { Link } from 'react-router-dom';
import '../styles/index.css';


export default class Introduction extends React.Component {



  render() {
    return (
      <div>
        <div>
        <center>
        <p className="start">MINDFRAME</p>
        <p className="successful">Capture Your Life</p>
        </center>
        </div>

        <div className="startButtons">
<center>
          <Link to="/LandingPage" className="button2">Sign Up</Link>
          <Link to="/SigninPage" className="button2">Log In</Link>
</center>
        </div>
      </div>
    );
  }
}
