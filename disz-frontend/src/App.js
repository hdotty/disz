//import "primereact/resources/themes/tailwind-light/theme.css"
//import "primereact/resources/primereact.min.css";
//import "primeicons/primeicons.css";
//import 'bootstrap/dist/css/bootstrap.min.css'
import "primereact/resources/themes/saga-orange/theme.css"
import "primeflex/primeflex.css"
import "swagger-ui-react/swagger-ui.css"
import './App.css'
import Login from './components/login/login'
import Signup from "./components/signUp/signup";
import PersonPage from "./components/personPage/personPage";
import ForgotPsw from "./components/forgotPsw";
import Header from "./header"
import Home from "./components/home"
import ChangePsw from "./components/changePsw/changePsw"
import AddBook from "./components/addBook/addBook"
import BookPage from "./components/bookPage/bookPage"
import DisplayPersons from "./components/displayPersons/displayPersons"
import DisplayBorrows from "./components/displayBorrows/displayBorrows"
import AddBorrow from "./components/addBorrow/addBorrow"
import Book from "./components/displayBooks/displayBook"

//import { useLogin } from "./components/login/useLogin"  // login?

import {
  BrowserRouter as Router,
  Route,
  Routes,
}from 'react-router-dom'  
import { useState } from "react"


const App = () => {
    const [loggedInUser, setLoggedInUser] = useState(true);
    const [isAdmin, setIsadmin] = useState(true)

    //const {person} = useLogin()
    //console.log(person)
  const user = {
    loggedIn: true,
    admin: true
  }



    return (
      <div>
        <h1></h1>
        <Router>
          <Header user={user} /><br/>
          
          
          <Routes>
            <Route exact path='/' element={ <Home user={user} /> }/>
            <Route exact path='/components/books' element={ <Book/> }/>

            {!user.loggedIn && <Route exact path='/components/signup/signup' element={ <Signup /> }/>}
            {!user.loggedIn && <Route exact path='/components/login/login' element={ <Login/> }/>}

            {user.loggedIn && <Route exact path='/components/personPage' element={ <PersonPage /> }/>}
            {user.loggedIn && <Route exact path='/components/forgotPsw' element={ <ForgotPsw /> }/>}
            {user.loggedIn && <Route exact path='/components/bookPage/bookPage' element={ <BookPage /> }/>}
            {user.loggedIn && <Route exact path='6components/changePsw' element={ <ChangePsw/> }/>}

            {(user.loggedIn && user.admin) && <Route exact path='components/addBook/addBook' element={ <AddBook /> }/>}
            {(user.loggedIn && user.admin) && <Route exact path='components/displayPersons/displayPersons' element={ <DisplayPersons/> }/>} 
            {(user.loggedIn && user.admin) && <Route exact path='components/addBorrow' element={ <AddBorrow/> }/>}
            {(user.loggedIn && user.admin) && <Route exact path='components/displayBorrows/displayBorrows' element={ <DisplayBorrows/> }/>}
          </Routes>
        </Router>
        
        
      </div>
    )
  
}

export default App

