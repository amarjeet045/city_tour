import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button,CardLink,CardGroup,CardColumns } from 'reactstrap';
import one from '../assets/images/1.jpeg';
import two from '../assets/images/2.jpg';

import '../css/home.css';

class Home extends Component {
  render() {
    return (
       <>
        <CardColumns>
      <Card>
        <CardImg top width="100%" src={two}alt="Card image cap" />
        <CardBody>
          <CardTitle>London</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    
      <Card>
        <CardImg top width="100%" src={two} alt="Card image cap" />
        <CardBody>
          <CardTitle>Paris</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={two} alt="Card image cap" />
        <CardBody>
          <CardTitle>Sydney</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardColumns>
      </>
    );
  }
}
export default Home;
