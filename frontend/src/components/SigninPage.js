import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'muicss/lib/react/button';
import 'typeface-roboto';

const SigninPage = () => (
  <div>
    <fieldset>
      <legend><em><h2>Welcome!</h2></em></legend>

    <TextField
      hintText="Email"
      floatingLabelText="Email"
    /><br />


    <TextField
      hintText="Password"
      floatingLabelText="Password"
      type="password"
      required="required"
    /><br />


  <Button color="primary" type="submit" size="lg">Sign In</Button>{' '}
</fieldset>
  </div>

);

export default SigninPage;
