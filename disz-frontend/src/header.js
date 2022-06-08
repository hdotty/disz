import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'



function Header(props){

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"> <Link to='/' className="nav-link"> Home </Link></li>
                <li className="nav-item"> <Link to='/components/signup' className="nav-link"> Sign Up </Link> </li>
                { props.loggedInUser === null && <li className="nav-item"> <Link to='/components/login' className="nav-link"> Log In </Link> </li>}
                <li className="nav-item"> <Link to='/components/addBook' className="nav-link"> Add Book </Link> </li>
                <li className="nav-item"> <Link to='/components/books' className="nav-link"> Books </Link> </li>
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
