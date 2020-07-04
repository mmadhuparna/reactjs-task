import React, { Component } from "react";
import {FormGroup,FormLabel,FormControl,Button,FormText} from "react-bootstrap";
import { Route , withRouter} from 'react-router-dom';


class DetailsForm extends Component{
    constructor(props){
        super(props);

        this.state ={
            cityId: "",
            errors: ""
           
        }
      
    }
    
    //to check if input is empty or negative
    validate = () =>{
      let errors = "";
      

      const { cityId } = this.state//object destructuring
     if (cityId == "" ) errors = "Please enter city Id";
     if(cityId <= 0) errors = "Please enter a valid Id"
     

     return errors;
  }
      //submit id to get place details      
    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        console.log(errors);
        if(errors === ""){
        const cityId = this.state.cityId
        this.props.history.push('/place/'+ cityId)
        }
        else{
          this.setState({
            errors:errors
        })
        }
    }
//while user add input state changes
    handleChange = e =>{
        this.setState({
           
            cityId: e.target.value,
            errors : ""
        });
        console.log(e.target.value)
        
    }

render(){
  const{errors}=this.state;
  return(
          
    <form onSubmit={this.handleSubmit}>
      <FormGroup controlId="citydetails">
        
        <FormControl 
        className = {errors? " is-invalid":"" }
        onChange ={this.handleChange} 
        placeholder="Add Place Id"
        type="number"/>

        <FormText className=" invalid-feedback">{errors}</FormText>
      </FormGroup>
      
      <Button 
      type ="submit" 
      variant="info">Get Details</Button>
    </form>
   
  )

}
}
export default withRouter(DetailsForm);