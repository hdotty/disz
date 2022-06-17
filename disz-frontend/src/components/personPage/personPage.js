import {  useState } from "react";
import { Button } from 'primereact/button';
import UsePerson from "./usePerson";
import { Link } from "react-router-dom";
import useDisplayPersons from "../displayPersons/useDisplayPersons";

const PersonPage = (props) => {
    const id = props.currentId
    console.log(id)
    const {person, getPerson} = UsePerson()
    const [done, setDone] = useState(false)

    if(!done){
        getPerson(id)
        setDone(true)
    }


    return (
        <div className="flex align-items-center justify-content-center">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6 ">
            <div className="text-center mb-5">
            <div className="text-900 text-3xl font-medium mb-3">Personal Data</div>
            <div className="text-600 font-medium line-height-3">You can change your personal data if you want.</div>
            <div className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"><Link to='/components/editPersonData'> Edit </Link> </div>
            </div>
            
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Last Name</div>
                    {  <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{person.lastName}</div>}
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">First Name</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{person.firstName}</div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Email</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{person.email}</div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Password</div>
                    <Button type="button" className="p-button-text" ><Link to='/components/changePsw' className="nav-link">Change your password</Link></Button>
                </li>

                <li className="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Your Books</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">borrowed books</div>
                    
                </li>


            </ul>
        </div>
        </div>
    )
}

export default PersonPage;