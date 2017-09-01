import React from 'react';

import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import JournalPeace from "../images/journalpeace.jpg";



export default class ImageGridList extends React.Component {
  render() {
    return (
      <Card style={{height: "100vh"}}>
        <CardHeader title="URL Avatar" subtitle="Start your day with the right frame of mind" avatar="/..images/letterM.jpeg" size={30} />
        <CardMedia overlay={< CardTitle title = "Peace and Serenity" subtitle = "Overlay subtitle" />}>
          <img src={JournalPeace} alt=""/>
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle"/>
        <CardText>
          Successful People are known for putting there thoughts down on paper.  Now you can put them on your phone instead.
        </CardText>

      </Card>
    );
  }
}
