import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'muicss/lib/react/button';
import 'typeface-roboto';
import '../styles/index.css';
import JournalPage from './JournalPage';
import Background from '../images/journalpeace.jpg';



const TextFieldExampleSimple = () => (


  <div className="background">

    <br/>
    <div className="body">
    <fieldset className='fieldset1'>
      <h1 className="signup "><center>SIGN UP</center></h1>
      <center>
    <TextField
      hintText="First Name"
      floatingLabelText="First Name"
    />
    </center>
    <center>
    <TextField
      hintText="Last Name"
      floatingLabelText="Last Name"
    />
    </center>

    <center>
    <TextField
      hintText="Email"
      floatingLabelText="Email"
      type="email"
    />
    </center>

    <center>
    <TextField
      hintText="User Name"
      floatingLabelText="User Name"
      type="username"
      required="required"
    />
    </center>

    <center>
    <TextField
      hintText="Password"
      floatingLabelText="Password"
      type="password"
      required="required"
    />
    </center>
    <br />
    <center>
  <Button className='button' input type="submit" size="lg" onChange={JournalPage}>Submit</Button>
  </center>
</fieldset>
  </div>

  </div>

);

export default TextFieldExampleSimple;
