import React from 'react';
//import { Link } from 'react-router-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import { Container, FormGroup, Label, } from 'reactstrap';



export default class LandingPage extends React.Component {
  render() {
    return (

      <Container>
      <Form>
        <legend>First Name</legend>
        <Input label="Required Text Field" floatingLabel={true} required={true} />

          <legend>Last Name</legend>
          <Input label="Required Text Field" floatingLabel={true} required={true} />

        <legend>Email</legend>
        <Input label="Required Email Address" type="email" floatingLabel={true} required={true} />


        <Input label="Password" type="password" defaultValue="Validation error" />

        <Input label=" Confirm Password" type="password" defaultValue="Validation error" />



        <Button variant="raised">Submit</Button>
      </Form>




</Container>
    );
  }
}
