import React from 'react';
import Journal from './JournalPage';
import Button from 'muicss/lib/react/button';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import JournalPeace from '../images/journalpeace.jpg';
import '../styles/index.css';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import JournalPage from './JournalPage';
import Practice from './Practice';

const style = {
  marginRight: 20,

};



export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: "",
      body: "",

    };
  }

  addEntry = () => {
   const {title, body} = this.state;

   // Your API expects POST data to be sent as form data, which is why we need the next few lines
   const form = new FormData();
   form.append("title", title);
   form.append("body", body);
   form.append("user_id", 12);
   // This particular end point is used to create a new journal entry
   fetch("https://mindframebackend.herokuapp.com/users/12", {
       method: "POST",
       body: form
   })
   // The response type of the request is JSON
   .then(response => response.json())
   // Once we add a new journal entry, we should fetch all journal entries so that we can update the display
   .then(this.getEntries())
  }
  getEntries = () => {
    /// This end point just gets a list of all entries
    fetch("https://mindframebackend.herokuapp.com/entries")
      .then(r => r.json())
      .then(entries => {

        this.setState({entries: entries.filter(function(entry){
          return entry.user_id === 1;
        })
      });
    })
  }

  componentDidMount() {

    this.getEntries();
  }


  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (

      <div className="background">

    <div>
      <center><h1 className="welcome">Hello </h1></center>
    </div>

    <div>
  <Table>
    <TableHeader className="backgroundTable">
      <TableRow className="listName">
        <TableHeaderColumn>Date</TableHeaderColumn>
        <TableHeaderColumn>Title</TableHeaderColumn>
        <TableHeaderColumn>Rating</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody className="listName">
      <TableRow className="backgroundTable">
        <TableRowColumn></TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn></TableRowColumn>
      </TableRow>

    </TableBody>
  </Table>
          </div>
    <center>
      <div>
        <JournalPage/>
      </div>
      <br/>
      <div>
        <Button><Link style={{textDecoration: 'none'}} to="/">Log Out</Link></Button>
      </div>
    </center>

      </div>


    );
    {this.props.children}
  }

}
