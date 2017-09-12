import React from 'react';
import Button from 'muicss/lib/react/button';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import 'typeface-roboto';
import '../styles/index.css';
import App from '../App';



export default class SigninPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    }
  }

// componentDidMount() {
//     this.getUsers();
//   }

  addUsers = () => {
    const {firstName, lastName, userName, email, password} = this.state;

    // Your API expects POST data to be sent as form data, which is why we need the next few lines
    const form = new FormData();
    form.append("firstName", firstName);
    form.append("lastName", lastName);
    form.append("userName", userName);
    form.append("email", email);
    form.append("password", password);
    // This particular end point is used to create a new journal entry
    fetch("https://mindframebackend.herokuapp.com/users", {
        method: "POST",
        body: form
    })
    // The response type of the request is JSON
    .then(response => response.json())
    // Once we add a new journal entry, we should fetch all journal entries so that we can update the display
    .then(this.getEntries())
  }

  getUser = () => {
    /// This end point just gets a list of all entries
    fetch("https://mindframebackend.herokuapp.com/users")
      .then(r => r.json())
      .then(data => this.setState({data}))
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.users.push({userName: this.state.userName});
    this.setState({user: this.state.user, userName: ""});

  }


render () {
  return (
    <div className="background">

          <div className="body">
          <fieldset className='fieldset1'>
            <h1 className="signin "><center>SIGN IN</center></h1>

          <center>
          <TextField
            hintText="Email"
            floatingLabelText="Email"
            type="email"
            email="email"
          />
          </center>
          <center>
          <TextField
            hintText="Password"
            floatingLabelText="Password"
            type="password"
            required="required"
            password="password"
          />
          </center>
          <br />
          <center>
          <Button
            className="button"
            onClick={this.addEntry}
            onSubmit={this.handleSubmit}>
            <Link
              style={{textDecoration: 'none'}}
              to="/HomePage">
                Sign In
            </Link>
          </Button>
        </center>
      </fieldset>
        </div>

        </div>
      )
    }
  }
