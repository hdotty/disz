
import "primereact/resources/themes/tailwind-light/theme.css"
//import "primereact/resources/primereact.min.css";
//import "primeicons/primeicons.css";
//import 'bootstrap/dist/css/bootstrap.min.css'
import "primeflex/primeflex.css"

import './App.css'
import Login from './components/login'
import Singup from "./components/singup";
import PersonPage from "./components/personPage";
import ChangePsw from "./components/changePsw";
import ForgotPsw from "./components/forgotPsw";
import BookPage from "./components/bookPage";

function App(){
  return(
    <div className="App">
      <br></br><br></br>
      <Login/>
      <br></br>
      <Singup/>
      <br></br>
      <PersonPage/>
      <br></br>
      <ChangePsw/>
      <br></br>
      <ForgotPsw/>
      <br></br>
      <BookPage/>


    </div>
  )



}

export default App