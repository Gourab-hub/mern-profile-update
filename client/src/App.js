import React from 'react'
import Home from './components/Home';
import Navbar from "./components/Navbar";
import { Route,Switch } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import About from './components/About';
import ErrorPage from './components/Errorpage';

import "../src/App.css"
const App = () => {
  return (
    <>

    
    <Navbar/>
<Switch>


    <Route exact path="/">
    <Home/>
    </Route>
   

    <Route path="/about">
    <About/>
    </Route>
    

    <Route path="/contact">
    <Contact/>
    </Route>


    <Route path="/login">
    <Login/>
    </Route>


    <Route path="/signup">
    <Signup/>
    </Route>

    <Route >
    <ErrorPage/>
    </Route>
    
    </Switch>
      
    </>
  )
}

export default App
