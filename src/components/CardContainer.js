import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


class CardContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
        
        }
      }
    render() {
        const place = this.props.City &&this.props.City.map(cities =>{
            return (
              <div key={cities.id} className ="col-6 col-mt-5 m-2">
               <Card>
              <CardImg top width="100%" src={cities.images} alt={cities.name} />
              <CardBody>
                <CardTitle>{cities.name}</CardTitle>
                <CardSubtitle>{cities.country}</CardSubtitle>
                <CardText>{cities.description}</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
                
              </div>
            )
      
          })

        return (
            <div className="container">
            <div className="row">
              {place}
            
            </div>
          </div>
         
        )
    }
}
export default CardContainer;