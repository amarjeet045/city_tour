import React, { Component } from 'react'
import CityDetailCard from './CityDetailCard';
import {DETAIL} from '../shared/detail';
 class CityDetail extends Component {
     constructor(props){
         super(props);
         this.state={
            detail:DETAIL
         }
     }
    render() {  
        return (
            <div>
                <CityDetailCard detail={this.state.detail}/>
            </div>
        )
    }
}

export default CityDetail;