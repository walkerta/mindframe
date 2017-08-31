import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import JournalEntry from './JournalEntry';

import Journal from '../images/journal.jpg';
import Diary from '../images/Diary.png';
import Images from '../images/images.jpeg';
import Journaling from '../images/journaling.jpg';
import JournalPeace from '../images/journalpeace.jpg';
import Mobileapp from '../images/mobileapp.png';
import TSMobile from '../images/ts-mobile.jpg';

import DialogExampleSimple from './JournalEntry.js';
import DrawerSimpleExample from './Drawer.js';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData1 = [
  {
    img: Diary,
    title: 'January 1, 2018',
    author: 'boaz',
  },
  {
    img: Journal,
    title: 'Febuary 4, 2018',
    author: 'alex',
  },
  {
    img: Images,
    title: 'March 3, 2018',
    author: 'Tabetha',
  },
  {
    img: Journaling,
    title: 'April 6, 2018',
    author: 'Edwin',
  },
  {
    img: JournalPeace,
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: Mobileapp,
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: TSMobile,
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: Images,
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const tilesData2 = [
  {
    img: Journal,
    title: 'January 1, 2018',
    author: 'boaz',
  },
  {
    img: Diary,
    title: 'Febuary 4, 2018',
    author: 'alex',
  },
  {
    img: Images,
    title: 'March 3, 2018',
    author: 'Tabetha',
  },
  {
    img: Journaling,
    title: 'April 6, 2018',
    author: 'Edwin',
  },
  {
    img: JournalPeace,
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: Mobileapp,
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: TSMobile,
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: Images,
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const tilesData3 = [
  {
    img: Journaling,
    title: 'January 1, 2018',
    author: 'boaz',
  },
  {
    img: Diary,
    title: 'Febuary 4, 2018',
    author: 'alex',
  },
  {
    img: Journal,
    title: 'March 3, 2018',
    author: 'Tabetha',
  },
  {
    img: Images,
    title: 'April 6, 2018',
    author: 'Edwin',
  },
  {
    img: JournalPeace,
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: Mobileapp,
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: TSMobile,
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: Images,
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const tilesData4 = [
  {
    img: Journal,
    title: 'January 1, 2018',
    author: 'boaz',
  },
  {
    img: Diary,
    title: 'Febuary 4, 2018',
    author: 'alex',
  },
  {
    img: Images,
    title: 'March 3, 2018',
    author: 'Tabetha',
  },
  {
    img: Journaling,
    title: 'April 6, 2018',
    author: 'Edwin',
  },
  {
    img: JournalPeace,
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: Mobileapp,
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: TSMobile,
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: Images,
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];



/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */



const GridListExampleSingleLine = () => (
  <div>
  <div>
  <center><DrawerSimpleExample/></center>
  </div>
  <div>
    <center><DialogExampleSimple/></center>
  </div>
    <div>
       <center><DatePicker hintText="Calender" autoOK='true' mode="landscape" /></center>
    </div>
      <h1><center>Week 1</center></h1>
      <div style={styles.root}>
         <GridList style={styles.gridList} cols={2.2}>
           {tilesData1.map((tile) => (
             <RaisedButton style={{height: 300, width: 300}}>
             <GridTile
               key={tile.img}
               title={tile.title}
               actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
               titleStyle={styles.titleStyle}
               titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
             >
               <img src={tile.img} />
             </GridTile>
             </RaisedButton>
           ))}
         </GridList>
       </div>
       <h1><center>Week 2</center></h1>
       <div style={styles.root}>
          <GridList style={styles.gridList} cols={2.2}>
            {tilesData2.map((tile) => (
              <FloatingActionButton>
              <GridTile
                key={tile.img}
                title={tile.title}
                actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                titleStyle={styles.titleStyle}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
                <img src={tile.img} />
              </GridTile>
              </FloatingActionButton>
            ))}
          </GridList>
        </div>



     </div>
   );


   export default GridListExampleSingleLine;
