import React from 'react';
import Button from 'muicss/lib/react/button';
import TextField from 'material-ui/TextField';
import 'typeface-roboto';
import '../styles/index.css';


export default () => (


  <div>
    <div className="body">
    <fieldset className='fieldset'>

      <div>
        <header id="header">
          <div class="mui-appbar mui--appbar-line-height">
            <div class="mui-container-fluid">
                <span class="mui--text-title mui--visible-xs-inline-block"><h1><center>Welcome Back!</center></h1></span>
            </div>
            <div id="content-wrapper">
              <h2><center>Sign In</center></h2>
              <center>
              <TextField
                hintText="Email Field"
                floatingLabelText="Email"
                type="email"
              />
              </center>
              <br />
              <center>
              <TextField
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
                required="required"
                />
                </center>
                <br />
                <center>
              <Button  className='button' input type="submit" size="lg">Submit</Button>{' '}
              </center>
            </div>
          </div>
        </header>
      </div>
      </fieldset>
      </div>
    </div>

);
