import React,{Component} from "react";
import { Link } from 'react-router-dom'
import { ListGroup} from "react-bootstrap";
import {Place} from './Place';


 
class PlaceList extends Component{
       
render(){
    console.log(this.props.placeList)
    
return (

    <div>
        <h3 className="text-center">List Of Amazing Places</h3>
        <Link className=" linkto"  to = "/favorites">My Favorites</Link>
        <hr/>
        <ListGroup>
            {this.props.placeList.map(place => (
                <Place key={place.id} cityname = {place} />
            )
                )}
        </ListGroup>
    </div>
)

}
}
export default PlaceList;