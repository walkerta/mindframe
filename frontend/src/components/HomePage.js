import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile} from 'material-ui/GridList';
import tileData from './tileData';
import image from './images/journalpeace.jpg';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',

    
  function ImageGridList(props) {
  const classes = props.classes;

  return (

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-3">Mindframe</h1>
        <p class="lead">Successful People are known for putting their thoughts down on paper.  Now you can put them on your phone instead.</p>
      </div>
    </div>
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {tileData.map(tile =>
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src="./images/journalpeace.jpg" alt="Peace" style="width:150px;height:150px;"/>
             </GridListTile>,
        )}
      </GridList>
    </div>
  );
}


ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AdvancedGridList);
