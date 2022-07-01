import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import App from "./App"
import { Button } from "bootstrap"



function Header(props){
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"> <Link to='/' className="nav-link"> Home </Link></li>
                <li className="nav-item"> <Link to='/components/books' className="nav-link"> Books </Link> </li>

                {!props.user.loggedIn && <li className="nav-item"> <Link to='/components/signup/signup' className="nav-link"> Sign Up </Link> </li>}
                {!props.user.loggedIn && <li className="nav-item"> <Link to='/components/login/login' className="nav-link"> Log In </Link> </li>}
                
                {props.user.loggedIn && <li className="nav-item"><Link to='/components/personPage' className='nav-link'>My Page</Link> </li>}
                
                {(props.user.loggedIn && props.user.admin) && <li className="nav-item"> <Link to='/components/addBook/addBook' className="nav-link"> Add Book </Link> </li>}
                {(props.user.loggedIn && props.user.admin) && <li className="nav-item"> <Link to='/components/displayPersons/displayPersons' className="nav-link"> Persons </Link> </li>}
                {(props.user.loggedIn && props.user.admin) && <li className="nav-item"> <Link to='/components/displayPersons/displayPersons' className="nav-link"> Users </Link> </li>}
                {(props.user.loggedIn && props.user.admin) && <li className="nav-item"> <Link to='/components/displayBorrows/displayBorrows' className="nav-link"> Borrows </Link> </li>}
                
            </ul>
        </nav>
    )
}

export default Header
