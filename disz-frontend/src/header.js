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
        <div>
            <ul>
                <li> <Link to='/'> Home </Link></li>
                <li> <Link to='/components/signup'> Signup </Link> </li>
                <li> <Link to='/components/login'> Login </Link> </li>
            </ul>
        </div>
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
