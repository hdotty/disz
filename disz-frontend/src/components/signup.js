import React from "react";
import {InputText} from "primereact/inputtext"
import {Button} from "primereact/button"
import { useState } from "react";
import { Link } from "react-router-dom";


function Singup(){
    const [checked, setChecked] = useState(false)
    const handleClick = () => setChecked(!checked)

    return(
        
        <div className="flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div className="text-center mb-5">
                    <img src="assets/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" />
                    <div className="text-900 text-3xl font-medium mb-3">Welcome!</div>
                    <span className="text-600 font-medium line-height-3">Do you already have an account?</span>
                    <div className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"><Link to='/components/login'>  Log In! </Link> </div>
                </div>

                <div>
                    <label htmlFor="firsName" className="block text-900 font-medium mb-2">First Name</label>
                    <InputText id="firsName" type="text" className="w-full mb-3" />

                    <label htmlFor="lastName" className="block text-900 font-medium mb-2">Last Name</label>
                    <InputText id="lastName" type="text" className="w-full mb-3" />


                    <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                    <InputText id="email" type="text" className="w-full mb-3" />

                    <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                    <InputText id="password" type="password" className="w-full mb-3" />

                    <label htmlFor="password2" className="block text-900 font-medium mb-2">Password Again </label>
                    <InputText id="password2" type="password" className="w-full mb-3" />

                    

                    <Button label="Sign Up" icon="pi pi-user" className="w-full" />
                    <br></br> <br></br>
                    <Button icon="pi pi-user" className="w-full"> <Link className='nav-link' to="/"> Cancle </Link> </Button>
                </div>
            </div>
        </div>
    
    )
}

export default Singup