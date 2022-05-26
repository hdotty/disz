
import "primereact/resources/themes/tailwind-light/theme.css"
//import "primereact/resources/primereact.min.css";
//import "primeicons/primeicons.css";
//import 'bootstrap/dist/css/bootstrap.min.css'
import "primeflex/primeflex.css"

import './App.css'
import Login from './components/login'
import Signup from "./components/signup";
import PersonPage from "./components/personPage";
//import ChangePsw from "./components/changePsw";
import ForgotPsw from "./components/forgotPsw";
//import BookPage from "./components/bookPage";
import Header from "./header"
import Home from "./components/home"
//import { Button } from "primereact/button";
//import { Component } from "react"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
}from 'react-router-dom'  

function App() {

    return (
      <div>
        <h1>he</h1>
        
        <Router>
          <Header/>
          <Routes>
            <Route exact path='/' element={ <Home/> }/>
            <Route exact path='/components/signup' element={ <Signup/> }/>
            <Route exact path='/components/login' element={ <Login/> }/>
            <Route exact path='/components/personPage' element={ <PersonPage/> }/>
            <Route exact path='/components/forgotPsw' element={ <ForgotPsw/> }/>
          </Routes>
        </Router>

      </div>
    )
  
  


}

export default App



/*
      <Router>
            <div>
                <ul className="App-header">
                    <li> <Link to='/components/signup'> Signup </Link> </li>
                    <li> <Link to='/components/login'> Login </Link> </li>
                    <li> <Link to='/components/personPage'> MyPage </Link> </li>
                </ul>

                <Routes>
                    <Route exact path='/components/signup' element={ <Signup/> }/>
                    <Route exact path='/components/login' element={ <Login/> }/>
                    <Route exact path='/components/personPage' element={ <PersonPage/> }/>
                </Routes>
            </div>
      </Router>

      */