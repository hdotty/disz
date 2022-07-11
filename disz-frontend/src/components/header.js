import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

function Header(props){
    const user = props.user
    console.log(user)
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"> <Link to='/' className="nav-link"> Home </Link></li>
                <li className="nav-item"> <Link to='/components/books' className="nav-link"> Books </Link> </li>

                {!user && <li className="nav-item"> <Link to='/components/signup/signup' className="nav-link"> Sign Up </Link> </li>}
                {!user && <li className="nav-item"> <Link to='/components/login/login' className="nav-link"> Log In </Link> </li>}
                
                {user && <li className="nav-item"><Link to='/components/personPage/myPage' className='nav-link'>My Page</Link> </li>}
                
                { <li className="nav-item"> <Link to='/components/addBook/addBook' className="nav-link"> Add Book </Link> </li>}
                { <li className="nav-item"> <Link to='/components/displayPersons/displayPersons' className="nav-link"> Persons </Link> </li>}
                { <li className="nav-item"> <Link to='/components/displayPersons/displayPersons' className="nav-link"> Users </Link> </li>}
                { <li className="nav-item"> <Link to='/components/displayBorrows/displayBorrows' className="nav-link"> Borrows </Link> </li>}
                
            </ul>
        </nav>
    )
}

export default Header
