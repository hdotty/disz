import { useState } from "react";
import { Button } from 'primereact/button';

function PersonPage(){

    return (

        <div className="surface-0">
            <div className="font-medium text-3xl text-900 mb-3">Personal Data</div>
            <div className="text-500 mb-5">You can change your personal data if you want.</div>
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Last Name</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">lastName</div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
                    </div>
                </li>
                
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">First Name</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">firstName</div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Email</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">email</div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Password</div>
                    <Button label="Change your password" className="p-button-text" ></Button>
                </li>

                <li className="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Your Books</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">borrowed books</div>
                    
                </li>


            </ul>
        </div>
            
    )
}

export default PersonPage;