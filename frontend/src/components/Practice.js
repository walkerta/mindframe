import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import '../styles/index.css';


let users= [
  {
    id: 1,
    firstName: "Carl",
    lastName: "Sagan",
    alive: "false",
    nationality: "United States",

  },
  {
    id: 2,
    firstName: "Neil",
    lastName: "deGrasse Tyson",
    alive: "true",
    nationality: "United States",
  },
  {
    id: 3,
    firstName: "Stephen",
    lastName: "Hawking",
    alive: "true",
    nationality: "United Kingdom, England",
  },

];


export default class Practice extends Component {
  render() {
    let user = users.map((user) => {
      return (


        <div key={user.id} >
          <h1>{user.lastName + ", " + user.firstName}</h1>
          <h2>Still alive: {user.alive}</h2>
          <h3>Nationality: {user.nationality}</h3>
        </div>

      )
    });
    return (
      <div className="App">
        {user}
      </div>
    );
    {this.props.children}
  }

}
