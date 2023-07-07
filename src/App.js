
import './App.css';
import React, { Component } from 'react'
// import NavBar from './components/NavBar';
import Home from './components/Home';
import Candidates from './components/Candidates';
// import Search from './components/Search';
import Register from './components/Register';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar/> */}
        {/* <Home/> */}
        {/* <Search/> */}
        {/* <Candidates/> */}
        {/* <Register/> */}
       
       
        {/* <Login/> */}

        <Router>
      
      
      <Routes>
          <Route exact path="/register"
            element= <Register  />
          /> 
         
           <Route exact path="/" 
            
            element= <Home />
          />
          <Route exact path="/login" 
            
            element= <Login />
          />
          <Route exact path="/candidates" 
            
            element= <Candidates />
          />
   </Routes> 
   
  </Router> 
      </div>
    )
  }
}


