import {InputText} from "primereact/inputtext"
import {Button} from "primereact/button"

function ForgotPsw(){

    return (
        <div>
            <div className="flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div className="text-center mb-5">
                    <img src="assets/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" />
                    <div className="text-900 text-3xl font-medium mb-3">Forgot your password?</div>
                    <span className="text-600 font-medium line-height-3">We will send you an email.</span>
                    <br></br>
                    <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Log In</a>  or 
                    <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Sign Up</a>
                </div>

                <div>
                    <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                    <InputText id="email" type="text" className="w-full mb-3" />
                    <Button label="Send" icon="pi pi-user" className="w-full" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default ForgotPsw