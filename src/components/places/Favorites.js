import React, { Component } from "react";
import { ListGroupItem, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
    console.log(state.favorites)
  return { favorites: state.favorites };
};

class Favorites extends Component{
   
    
    render(){
            
    return (
    
        <div>
            <h3 className="text-center">My Favorite Places</h3>
            <Link className=" linkto"  to = "/places">Home</Link>
            <hr/>
            <ListGroup>
                {this.props.favorites.map(place => (
                    <ListGroupItem key={place.id}>{place.name}</ListGroupItem>
                )
                    )}
            </ListGroup>
        </div>
    )
    
    }
    }
const FavList = connect(mapStateToProps)(Favorites);

export  { FavList as Favorites };