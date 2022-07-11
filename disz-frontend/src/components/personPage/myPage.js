import React from "react";
import { useState } from "react";
import ChangePsw from "../changePsw/changePsw";
import UsePerson from "./usePerson";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import useGetLoggedInUser from "../getLoggedInUser";

const MyPage = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [changePsw, setChangePsw] = useState(false)

    const {getLoggedInUser, user} = useGetLoggedInUser()
    const {handleEdit, edit, handleSave} = UsePerson()

    var bool = true
    
    const displayPage = (bool) => {
        if(bool){
            getLoggedInUser()
            bool = false
        }
    } 
    displayPage(true)
    
    return(
    <div>

        {changePsw ?
            <ChangePsw user={user}/> :
            <div className="text-center mb-5">
        
            <div>
            <div className="text-900 text-3xl font-medium mb-3">Personal Data</div>
            <div className="text-600 font-medium line-height-3">You can change your personalal data if you want.</div>
            <div className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">

            
                {edit ? 
                    <div><Button type="button" className="w-full" label="Save" 
                            onClick={(e)=>{
                                handleSave(e, user.id, user, firstName,lastName,email)
                            }}/><br/></div> :

                    <div><Button className="w-full" label="Edit" type="button" 
                            onClick={(e)=>{
                                handleEdit(e, user, firstName, lastName, email)
                                
                            }}
                        /><br/><br/></div>
                }
                
            </div>
            
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Last Name</div>
                    {edit ? 
                        <InputText onChange={(e)=>setLastName(e.target.value)} id="firstName" value={lastName} type="text" placeholder={user.lastName}/> :
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{user.lastName}</div>}
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">First Name</div>
                    {edit ? 
                        <InputText onChange={(e)=>setFirstName(e.target.value)} id="firstName" value={firstName} type="text" placeholder={user.firstName}/> :
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{user.firstName}</div>}
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Email</div>
                    {edit ? 
                        <InputText onChange={(e)=>setEmail(e.target.value)} id="firstName" value={email} type="text" placeholder={user.email}/> :
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{user.email}</div>}
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Password</div>
                    <Button type="button" className="p-button-text" label="Change password" onClick={(e)=>setChangePsw(true)} />
                </li>

                <li className="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Your Books</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">borrowed books</div>
                    
                </li>

            </ul>
            </div>
            </div>
        }
    </div>
    )
}
export default MyPage