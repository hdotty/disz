import "primereact/resources/themes/tailwind-light/theme.css"
//import "primereact/resources/primereact.min.css";
//import "primeicons/primeicons.css";
//import 'bootstrap/dist/css/bootstrap.min.css'
import "primeflex/primeflex.css"
import "swagger-ui-react/swagger-ui.css"
import './App.css'
import Login from './components/login'
import Signup from "./components/signUp/signup";
import PersonPage from "./components/personPage/personPage";
import ForgotPsw from "./components/forgotPsw";
import Header from "./header"
import Home from "./components/home"
import ChangePsw from "./components/changePsw"
import {AddBook} from "./components/addBook/addBook"
import {
  BrowserRouter as Router,
  Route,
  Routes,
}from 'react-router-dom'  
import { useState } from "react"


import Book from "./components/displayBooks/displayBook"

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState(true);
    const [isAdmin, setIsadmin] = useState(true)


    return (
      <div>
        <h1></h1>
        <Router>
          <Header/><br/>
          <Book/>

          <Routes>
            <Route exact path='/' element={ <Home/> }/>
            <Route exact path='/components/books' element={ <Book/> }/>

            {<Route exact path='/components/signup' element={ <Signup /> }/>}
            {<Route exact path='/components/login' element={ <Login/> }/>}

            {<Route exact path='/components/personPage' element={ <PersonPage /> }/>}
            {<Route exact path='/components/forgotPsw' element={ <ForgotPsw /> }/>}

            {<Route exact path='components/addBook' element={ <AddBook/> }/>}

            
            {<Route exact path='components/changePsw' element={ <ChangePsw/> }/>}
            

          </Routes>
        </Router>
        
        
      </div>
    )
  
}

export default App

