import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'muicss/lib/react/button';
import Paper from 'material-ui/Paper';
import 'typeface-roboto';

const TextFieldExampleSimple = () => (
  <div>
    <fieldset>
      <legend><em><h2>Sign Up Information</h2></em></legend>
    <TextField
      hintText="First Name Field"
      floatingLabelText="First Name"
    /><br />

    <TextField
      hintText="Last Name Field"
      floatingLabelText="Last Name"
    /><br />
    <TextField
      hintText="Email Field"
      floatingLabelText="Email"
    /><br />


    <TextField
      hintText="User Name Field"
      floatingLabelText="User Name"
      type="username"
      required="required"
    /><br />
    <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
      required="required"
    /><br />


    <TextField
      hintText="Password Field"
      floatingLabelText="Confirm Password"
      input type="password"
      required="required"
    /><br />

  <Button color="primary" input type="submit" size="lg">Submit</Button>{' '}
</fieldset>
  </div>

);

export default TextFieldExampleSimple;
