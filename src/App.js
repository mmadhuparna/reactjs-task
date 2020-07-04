import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/shared/Header';
import Footer from './components/shared/Footer'
import { Provider } from "react-redux";
import store from "./redux/store";
import PlaceDetails from './components/places/PlaceDetails';
import PlaceApp from './components/places/PlaceApp';
import {Favorites} from './components/places/Favorites';

import './App.css'

class App extends Component{
render(){
  return (
    <div className="container ">
      <div className="row">
        <div className="col">
          <Header/>
          </div>
          </div>

        <div className="row">
        <div className="col col-md-8 offset-md-2 shadow">
        <Provider store={store}>
          <Switch>
          <Route path = "/" exact = {true} render = { () => <Redirect to = "places"/> } />{/*to make 'places' the default page*/}
            <Route path="/place/:id" component = {PlaceDetails}/>
            <Route path = "/places" component = {PlaceApp}/>
            <Route path = "/favorites" component = {Favorites}/>
          </Switch>
          
          </Provider>
          </div>
          </div>

        <div className="row">
        <div className="col">
          <Footer/>
          </div>
          </div>
      </div>
    
  );

}
}



export default App;