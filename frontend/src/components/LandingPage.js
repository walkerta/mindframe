import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'muicss/lib/react/button';
import 'typeface-roboto';
import '../styles/index.css';
import JournalPage from './JournalPage';




const TextFieldExampleSimple = () => (


  <div>
    <div className="body">
    <fieldset className='fieldset1'>
      <h1><center>Sign Up</center></h1>
      <center>
    <TextField
      hintText="First Name"
      floatingLabelText="First Name"
    />
    </center>
    <br />
    <center>
    <TextField
      hintText="Last Name"
      floatingLabelText="Last Name"
    />
    </center>
    <br />
    <center>
    <TextField
      hintText="Email"
      floatingLabelText="Email"
      type="email"
    />
    </center>
    <br />

    <center>
    <TextField
      hintText="User Name"
      floatingLabelText="User Name"
      type="username"
      required="required"
    />
    </center>
    <br />
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
    <TextField
      hintText="Confirm Password"
      floatingLabelText="Confirm Password"
      input type="password"
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
