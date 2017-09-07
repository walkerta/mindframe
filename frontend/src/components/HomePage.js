import React from 'react';
import Journal from './JournalPage';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
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


const style = {
  marginRight: 20,

};


export default class ImageGridList extends React.Component {
  render() {
    return (
      <div className="background">
    <div>
      <center><h1 className="welcome">Hello USER</h1></center>
    </div>
    <div>
  <Table >
    <TableHeader className="backgroundTable">
      <TableRow className="listName">
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
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

      <div className="floatingButton">
        <FloatingActionButton >
          <ContentAdd className="listName"/>
        </FloatingActionButton>
      </div>
      </div>


    );
    {this.props.children}
  }
}
