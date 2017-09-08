import React from 'react';
import Button from 'muicss/lib/react/button';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
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
                <span class="mui--text-title mui--visible-xs-inline-block"><h1 className="signin"><center>WELCOME BACK!</center></h1></span>
            </div>
            <div id="content-wrapper">
              <h2 className="signin"><center>SIGN IN</center></h2>
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
                hintText="Password"
                floatingLabelText="Password"
                type="password"
                required="required"
                />
                </center>
                <br />
                <center>
              <Link to="/HomePage" className='button' type="submit" size="lg">Submit</Link>{' '}
              </center>
            </div>
          </div>
        </header>
      </div>
      </fieldset>
      </div>
    </div>

);
