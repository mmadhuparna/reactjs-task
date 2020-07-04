import React, { Component } from "react";
import { ListGroupItem, Button } from "react-bootstrap";

import { connect } from "react-redux";
import { addFavorites } from "../../redux/action";

function mapDispatchToProps(dispatch) {
  
  return {
    
    addFavorites: article => dispatch(addFavorites(article)),//calling action
   
  };
  
}
/*const mapStateToProps = state => {
  console.log(state.favorites)
return { favorites: state.favorites };
};*/

class Place extends Component{

    addFav = ()=>{
      console.log(this.props.favorites);
      
       this.props.addFavorites(this.props.cityname)
      
    }

    render(){
return(
    <ListGroupItem>{this.props.cityname.name +" , " +this.props.cityname.location}
    
    <Button 
    className="float-right" 
    variant="success" 
    onClick={this.addFav}>
        Favorites</Button>
    </ListGroupItem>
)

}
}
const connectedPlace = connect(undefined,mapDispatchToProps)(Place);
export  { connectedPlace as Place };
