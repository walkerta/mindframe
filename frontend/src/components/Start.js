import React from 'react';
import Button from 'muicss/lib/react/button';
import LandingPage from './LandingPage';
import SigninPage from './SigninPage';
import '../styles/index.css';


export default class Start extends React.Component {

handleLanding = () => './LandingPage';

handleSignin = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <div>
        <center>
        <p className="start">MINDFRAME</p>
        <p className="successful">Successful People Capture their Thoughts through Jornals.</p>
        </center>
        </div>

        <div className="startButtons">

          <Button onClick={handleLanding} className="button2">Sign Up</Button>
          <Button onClick={handleSignin} className="button2">Log In</Button>

        </div>
      </div>
    );
  }
}
