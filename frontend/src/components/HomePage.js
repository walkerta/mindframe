import React from 'react';

import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import JournalPeace from '../images/journalpeace.jpg';




export default class ImageGridList extends React.Component {
  render() {
    return (
      <Card style={{height: "100vh"}}>
        <CardHeader title="Johnny Miller" subtitle="December 2, 2018" avatar={JournalPeace}/>
        <CardMedia overlay={< CardTitle title = "Overlay title" subtitle = "Overlay subtitle" />}>
          <img src={JournalPeace} height={600}/>
        </CardMedia>
        <CardTitle title="Mindframe" subtitle="Capture Your Thoughts"/>
        <CardText >
          Successful People are known for putting there thoughts down on paper.  Now you can put them on your phone instead.
        </CardText>

      </Card>
    );
  }
}
