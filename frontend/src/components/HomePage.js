import React from 'react';
import Journal from './JournalPage';
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



const style = {
  marginRight: 20,

};


export default class ImageGridList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
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
      <center><h1 className="welcome">Hello USER</h1></center>
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
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow className="backgroundTable">
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
      <TableRow className="backgroundTable">
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow className="backgroundTable">
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow className="backgroundTable">
        <TableRowColumn>5</TableRowColumn>
        <TableRowColumn>Christopher Nolan</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
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
        <Link to="/" className="button2">
          LogOut
        </Link>
      </div>
    </center>

      </div>


    );
    {this.props.children}
  }
}
