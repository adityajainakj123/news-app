import './App.css';
import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
const App = () => {

    return (
      <>
      <NavBar/> 
      {/* <News key="general" pageSize={5} country="in" category="general"/> */}

      <Router>
      <Switch>
        {/* <News key="general" pageSize={5} country="in" category="general"/>
        <News key="health" pageSize={10} country="in" category="health"/> */}
          <Route exact path="/business" component={<News key="business" pageSize={5} country="in" category="business"/>}></Route> 
          <Route exact path="/entertainment" component={<News key="entertainment" pageSize={5} country="in" category="entertainment"/>} ></Route> 
          <Route exact path="/general"><News key="general" pageSize={5} country="in" category="general"/></Route> 
          <Route exact path="/health"><News key="health" pageSize={5} country="in" category="health"/></Route> 
          <Route exact path="/science"><News key="science" pageSize={5} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News key="sports" pageSize={5} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News key="technology" pageSize={5} country="in" category="technology"/></Route> 
          <Route exact path="/"  ><News key="general" pageSize={5} country="in" category="general"/></Route> 

        </Switch>
        </Router>
        </>
    )
      }
      export default App;