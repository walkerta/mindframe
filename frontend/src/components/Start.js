import React from 'react';
import Button from 'muicss/lib/react/button';
import LandingPage from './LandingPage';
import SigninPage from './SigninPage';
import Introduction from './Introduction';

import '../styles/index.css';


export default class Start extends React.Component {

  constructor(props) {
    super(props);
    // The internal state of the component. In this case, we want to keep
    // track of the title, body, and user_id entered, as well as the reponse
    // data.
    this.state = {
      title: "",
      body: "",
      user_id: "",
      data:[]
    }
    }


  render() {
    return (
      <div>
        <Introduction />
      </div>
    );
  }
}
