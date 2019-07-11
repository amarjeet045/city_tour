import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class CityDetailCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const Detail = this.props.detail.map(Details => {
      return (
        <div key={Details.id} className="col-6 col-md-5 m-4">
            <Card>
            <CardImg top width="100%" src={Details.image} alt={Details.name} />
                <CardBody>
                    <CardTitle >{Details.name}</CardTitle>
                    <CardSubtitle>{Details.description}</CardSubtitle>
                </CardBody>
          <iframe src={Details.maps}></iframe>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{Detail}</div>
      </div>
    );
  }
}
export default CityDetailCard;
