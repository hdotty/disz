import "primereact/resources/themes/tailwind-light/theme.css"
//import "primereact/resources/primereact.min.css";
//import "primeicons/primeicons.css";
//import 'bootstrap/dist/css/bootstrap.min.css'
import "primeflex/primeflex.css"
import "swagger-ui-react/swagger-ui.css"
import './App.css'
import Login from './components/login'
import Signup from "./components/signup";
import PersonPage from "./components/personPage";
import ForgotPsw from "./components/forgotPsw";
import Header from "./header"
import Home from "./components/home"
import BooksTable from "./components/books"
import {AddBook} from "./components/addBook"
import {
  BrowserRouter as Router,
  Route,
  Routes,
}from 'react-router-dom'  
import { useEffect, useState } from "react"

const App = () => {
    const [state, setState] = useState({
      loggedInUser: {
        userName: "admin",
        isAdmin: true
      } /* null */
    });

    return (
      <div>
        <Router>
          <Header loggedInUser={state.loggedInUser}/><br/>

          

          <Routes>
            <Route exact path='/' element={ <Home user={state.loggedInUser} /> }/>
            <Route exact path='components/addBook' element={ <AddBook/> }/>
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

