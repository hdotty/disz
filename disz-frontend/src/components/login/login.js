import React from "react";
import {InputText} from "primereact/inputtext"
import {Button} from "primereact/button"
import { useState } from "react"
import { Link } from "react-router-dom";

// import {useNavigate} from "react-router-dom"


function Login(){
    const [checked, setChecked] = useState(false)
    const handleClick = () => setChecked(!checked)



    return(
        
        <div className="flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div className="text-center mb-5">
                    <img src="assets/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" />
                    <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                    <span className="text-600 font-medium line-height-3">Don't have an account?</span>
                    <div className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"><Link to='/components/signup'>Create today!</Link></div>

                </div>

                <div>
                    <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                    <InputText id="email" type="text" className="w-full mb-3" />

                    <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                    <InputText id="password" type="password" className="w-full mb-3" />

                    <div className="flex align-items-center justify-content-between mb-6">
                        
                        
                        <div className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"><Link to="/components/forgotPsw">Forgot your password?</Link>  </div>
                    </div>

                    <Button label="Sign In" icon="pi pi-user" className="w-full" />
                </div>
            </div>
        </div>
    
    )
}

export default Login