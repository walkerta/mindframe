import React from 'react';
import Button from 'muicss/lib/react/button';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import 'typeface-roboto';
import '../styles/index.css';



export default () => (


      <div className="background">
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

      <Link to="/HomePage" type="submit" className='button2' size="lg">Submit</Link>

      </center>
    </fieldset>
      </div>

      </div>

    );
