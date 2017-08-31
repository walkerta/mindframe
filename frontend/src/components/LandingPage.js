import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'muicss/lib/react/button';
import 'typeface-roboto';

const TextFieldExampleSimple = () => (
  <div>
    <fieldset>
      <legend><em><h2>Sign Up Information</h2></em></legend>
    <TextField
      hintText="First Name"
      floatingLabelText="First Name"
    /><br />

    <TextField
      hintText="Last Name"
      floatingLabelText="Last Name"
    /><br />
    <TextField
      hintText="Email"
      floatingLabelText="Email"
    /><br />


    <TextField
      hintText="User Name"
      floatingLabelText="User Name"
      type="username"
      required="required"
    /><br />
    <TextField
      hintText="Password"
      floatingLabelText="Password"
      type="password"
      required="required"
    /><br />


    <TextField
      hintText="Confirm Password"
      floatingLabelText="Confirm Password"
      type="password"
      required="required"
    /><br />

  <Button color="primary" type="submit" size="lg">Submit</Button>{' '}
</fieldset>
  </div>

);

export default TextFieldExampleSimple;
