import { Link } from "react-router-dom"
import {
    BrowserRouter as Router,
    Routes,
    Route
}from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from "./components/signup"
import Login from "./components/login"
import PersonPage from "./components/personPage"


function Header(){

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"> <Link to='/' className="nav-link"> Home </Link></li>
                <li className="nav-item"> <Link to='/components/signup' className="nav-link"> Sign Up </Link> </li>
                <li className="nav-item"> <Link to='/components/login' className="nav-link"> Log In </Link> </li>
            </ul>
        </nav>
    )
}

export default Header


/* 
<div className="navbar">
          <div className="logo">Shopio</div>
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/components/signup">sign Up</Link>
              <Link to="/shop">Shop</Link>
           </ul>

           <Router>
                <Route exact path="/components/signup" element={<Signup/>}></Route>
           </Router>
        </div>
*/
