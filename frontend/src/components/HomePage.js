import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';



export default class ImageGridList extends React.Component {
  render() {
    return (
      <Card style={{height: "100vh"}}>
        <CardHeader title="URL Avatar" subtitle="Subtitle" avatar="images/jsa-128.jpg"/>
        <CardMedia overlay={< CardTitle title = "Overlay title" subtitle = "Overlay subtitle" />}>
          <img src="./images/journalpeace.jpg" alt=""/>
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle"/>
        <CardText>
          Successful People are known for putting there thoughts down on paper.  Now you can put them on your phone instead.
        </CardText>

      </Card>
    );
  }
}
