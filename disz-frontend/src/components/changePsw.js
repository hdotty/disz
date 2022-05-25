import React from "react";
import {InputText} from "primereact/inputtext"
import {Checkbox} from "primereact/checkbox"
import {Button} from "primereact/button"
import { useState } from "react"

function ChangePsw(){
    const [checked, setChecked] = useState(false)
    const handleClick = () => setChecked(!checked)

    return (
        
        <div className="flex align-items-center justify-content-center">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">

            <div>
            <label htmlFor="oldPsw" className="block text-900 font-medium mb-2">Password</label>
                <InputText id="oldPsw" type="password" className="w-full mb-3" />

                <label htmlFor="newPsw" className="block text-900 font-medium mb-2">New Password</label>
                <InputText id="newPsw" type="password" className="w-full mb-3" />

                <label htmlFor="newPsw2" className="block text-900 font-medium mb-2">New Password Again</label>
                <InputText id="newPsw2" type="password" className="w-full mb-3" />

                <Button label="Submit" icon="pi pi-user" className="w-full" />
                <br></br><br></br>
                <Button label="Cancle" icon="pi pi-user" className="w-full" />
            </div>
        </div>
    </div>
    )
}

export default ChangePsw