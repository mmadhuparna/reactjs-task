import React, { Component } from "react";
import placesApi from '../../api/places';
import { Link } from "react-router-dom";

class PlaceDetails extends Component{
    constructor(props){
        super(props);

        this.state ={
            city: []
           
        }
    }

    getcity = cityid =>{
        placesApi.getcity(cityid).then(res =>{       //api call 
            console.log(JSON.stringify(res.data));
             var result = res.data;
                         
                if(res !== null || res!== "") {
                    this.setState({
                        city:res.data[0]//res.data is in array format
                    })
                    
                }
                else {
                    console.log("error");
                    
                }
        })
    }

    componentDidMount(){
        
        const id = this.props.match.params.id; //getting the value of id from url parameter
        console.log(id)
        this.getcity(id);
    }

    render(){
        const{city}=this.state;
        return(
            
            <div>
                <Link className=" linkto"  to = "/places">Home</Link>
                <hr/>
            {city ?
            <div>   
            <h3>Place Details </h3>
            
        <p>ID:  {city.id}</p>
        
        <p>NAME:  {city.name}</p>
        
        <p>TYPE:  {city.type}</p>
        
        <p>COVER: <a href={city.cover}>{city.cover}</a></p>
        
        <p>DESCRIPTION: {city.official_description}</p>
        
        <p>LOCATION: {city.location}</p>
        
        <p>LATTITUDE: {city.lattitude}</p>
        
        <p>LONGITUDE: {city.longitude}</p>
        
        <p>PINCODE: {city.pincode}</p>
        </div>
        : <h3>Not a valid Id</h3>}
        </div>
        
        )
    }
}
export default PlaceDetails;