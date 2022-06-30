import {  useState } from "react";
import { Button } from 'primereact/button';
import UsePerson from "./usePerson";
import { Link } from "react-router-dom";
import useDisplayPersons from "../displayPersons/useDisplayPersons";
import { InputText } from "primereact/inputtext";
import ChangePsw from "../changePsw/changePsw";


const PersonPage = (props) => {
    const id = props.currentId

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [changePsw, setChangePsw] = useState(false)

    const {person, getPerson, handleEdit, edit, handleSave} = UsePerson()
    const [done, setDone] = useState(false)

    const displayPerson = (id, bool) => {
        if(bool){
            getPerson(id)
            bool = false
            //setDone(true)
        }
    }
    
    displayPerson(id, true)

    return (
        
        <div>

            {changePsw ?
                <ChangePsw person={person}/> :
                <div className="text-center mb-5">
            
            
                <div>
                <div className="text-900 text-3xl font-medium mb-3">Personal Data</div>
                <div className="text-600 font-medium line-height-3">You can change your personal data if you want.</div>
                <div className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">

                
                    {edit ? 
                        <div><Button type="button" className="w-full" label="Save" 
                                onClick={(e)=>{
                                    handleSave(e, id, person, firstName,lastName,email)
                                    displayPerson(id, true)
                                }}/><br/></div> :

                        <div><Button className="w-full" label="Edit" type="button" 
                                onClick={(e)=>{
                                    handleEdit(e, person, firstName, lastName, email)
                                    
                                }}
                            /><br/><br/></div>
                    }
                    
                    
                </div>
                
                <ul className="list-none p-0 m-0">
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Last Name</div>
                        {edit ? 
                            <InputText onChange={(e)=>setLastName(e.target.value)} id="firstName" value={lastName} type="text" placeholder={person.lastName}/> :
                            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{person.lastName}</div>}
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">First Name</div>
                        {edit ? 
                            <InputText onChange={(e)=>setFirstName(e.target.value)} id="firstName" value={firstName} type="text" placeholder={person.firstName}/> :
                            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{person.firstName}</div>}
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Email</div>
                        {edit ? 
                            <InputText onChange={(e)=>setEmail(e.target.value)} id="firstName" value={email} type="text" placeholder={person.email}/> :
                            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{person.email}</div>}
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

export default PersonPage;