import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import App from "./App"



function Header(){
    console.log(App.loggedInUser)
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"> <Link to='/' className="nav-link"> Home </Link></li>
                { <li className="nav-item"> <Link to='/components/signup' className="nav-link"> Sign Up </Link> </li>}
                {   <li className="nav-item"> <Link to='/components/login' className="nav-link"> Log In </Link> </li>}
                <li className="nav-item"> <Link to='/components/books' className="nav-link"> Books </Link> </li>
                <li className="nav-item"> <Link to='/components/addBook' className="nav-link"> Add Book </Link> </li>
                
            </ul>
        </nav>
    )
}

export default Header
