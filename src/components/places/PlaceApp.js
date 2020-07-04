import React, { Component } from "react";
import { Link } from 'react-router-dom'
import DetailsForm from './DetailsForm'
import PlaceList from './PlaceList';
import placesApi from '../../api/places';

class PlaceApp extends Component{

    constructor(props){
        super(props)

        this.state ={
            places:[]
        }
    }

    componentDidMount(){
        this.getplaces();
    }

    getplaces(){
   
        placesApi.getcities().then(res => {//api call
            console.log(res.data);
            
            this.setState({
                places: res.data.places
            })
        })
    
    }

    render(){
        return(
            <div>
                
            <DetailsForm />{/*Form section */}
            <hr />
            
            {/*list section */} 
            <PlaceList    
            placeList={this.state.places} 
            removeTask={this.removeTask}/>
            </div>
        )
    }

    
}

export default PlaceApp;
