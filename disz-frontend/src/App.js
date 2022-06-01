
import "primereact/resources/themes/tailwind-light/theme.css"
//import "primereact/resources/primereact.min.css";
//import "primeicons/primeicons.css";
//import 'bootstrap/dist/css/bootstrap.min.css'
import "primeflex/primeflex.css"

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


import './App.css'
import Login from './components/login'
import Signup from "./components/signup";
import PersonPage from "./components/personPage";
import ForgotPsw from "./components/forgotPsw";
import Header from "./header"
import Home from "./components/home"
import BooksTable from "./components/books"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
}from 'react-router-dom'  

function App() {

    return (
      <div>
        <Router>
          <Header/><br/>
          <Routes>
            <Route exact path='/' element={ <Home/> }/>
            <Route exact path='/components/books' element={ <BooksTable/> }/>
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


//<SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />



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