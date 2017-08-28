import React from 'react';
import Button from 'muicss/lib/react/button';
import TextField from 'material-ui/TextField';
import 'typeface-roboto';


export default () => (


  <div>
    <fieldset>
      <div>
        <header id="header">
          <div class="mui-appbar mui--appbar-line-height">
            <div class="mui-container-fluid">
                <span class="mui--text-title mui--visible-xs-inline-block"><h1>Welcome Back!</h1></span>
            </div>
            <div id="content-wrapper">
              <br />
              <h2>Sign In</h2>
              <TextField
                hintText="Email Field"
                floatingLabelText="Email"
              /><br />
              <TextField
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
                required="required"
                /><br />
              <Button color="primary" input type="submit" size="lg">Submit</Button>{' '}
            </div>
          </div>
        </header>
      </div>
      </fieldset>
    </div>

);
