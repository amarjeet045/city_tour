import React, { Component } from "react";
import {Media } from "reactstrap";
import {Redirect} from 'react-router-dom';
import CardConatiner from './CardContainer';
import {CITY} from '../shared/data';

import '../css/home.css';

//const data = [{'title: }]
class Home extends Component {
  constructor(props){
    super(props);
    this.state ={
      City:CITY
    }
    
  }
  render() {
  
    return (
      <div>
        <CardConatiner City ={this.state.City} />
      </div>
      
    );
  }
}
export default Home;