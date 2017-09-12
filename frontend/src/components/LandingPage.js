import React from 'react';
import Button from 'muicss/lib/react/button';
import TextField from 'material-ui/TextField';
import { Redirect } from 'react-router-dom';
import 'typeface-roboto';
import '../styles/index.css';
import App from '../App';

export default class LandingPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      phone: "",
      password: "",
      redirect_HomePage: false,
    }
  }

handleSubmit = (e) => {
  e.preventDefault();
  const { firstName, lastName, userName, email, phone, password } = this.state;
  let User = JSON.stringify({ firstName, lastName, userName, email, phone, password });
  fetch("https://mindframebackend.herokuapp.com/users", {
    method: "POST",
    body: User,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    mode: "cors"
  }).then(data => {
    return data.json();
  }).then(response => {
    console.log(response);
    sessionStorage.setItem('api_token', "Token token=" + response.auth_token)
    sessionStorage.setItem("id", response.id)
    this.setState({ redirect_HomePage: true })
  }).catch(err => {
    console.log(err);
  });
  this.setState({ firstName: "", lastName: "", userName: "", email: "", phone: "", password: "" })
}

handleChange = (e, { name, value }) => {
  this.setState({ [name]: value });
  console.log([value]);
}

  render () {
    const { firstName, lastName, userName, email, phone, password, redirect_HomePage } = this.state;

    if (redirect_HomePage) {
      return <Redirect push to="/HomePage"/>;
    }
    return (
      <div className="background">
            <div className="body">

            <fieldset className='fieldset1'>
              <h1 className="signup"><center>SIGN UP</center></h1>
              <center>
            <TextField
              hintText="First Name"
              floatingLabelText="First Name"
              name="firstName"
              type="text"
              value={firstName}
              onChange={e => this.setState({firstName: e.target.value})}
            />
            </center>
            <center>
            <TextField
              hintText="Last Name"
              floatingLabelText="Last Name"
              name="lastName"
              type="text"
              value={lastName}
              onChange={e => this.setState({lastName: e.target.value})}
            />
            </center>
            <center>
            <TextField
              hintText="Username"
              floatingLabelText="Username"
              type="username"
              required="required"
              name="username"
              value={userName}
              onChange={e => this.setState({userName: e.target.value})}
            />
            </center>
            <center>
            <TextField
              hintText="Email"
              floatingLabelText="Email"
              type="email"
              name="email"
              value={email}
              onChange={e => this.setState({email: e.target.value})}
            />
            </center>
            <center>
            <TextField
              hintText="Phone Number"
              floatingLabelText="Phone Number"
              type="text"
              name="phone"
              value={phone}
              onChange={e => this.setState({phone: e.target.value})}
            />
            </center>
            <center>
            <TextField
              hintText="Password"
              floatingLabelText="Password"
              type="password"
              required="required"
              name="password"
              value={password}
              onChange={e => this.setState({password: e.target.value})}
            />
            </center>
            <center>
            <TextField
              hintText="Confirm Password"
              floatingLabelText="Confirm Password"
              type="password"
              required="required"
              name="confirm"
            />
            </center>
            <br />
            <center>
            <Button
              className="button"
              onClick={this.handleSubmit}>
              Submit
            </Button>
          </center>
        </fieldset>
      </div>
    </div>
    )
  }

}
