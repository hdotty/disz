import React, {Component, useState} from "react";
import Select from "react-select"
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/primereact.min.css';


const AddBorrow = () => {

    const [selectedCity1, setSelectedCity1] = useState(null);

    const [city, setCity] = useState()   
    const cities = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
 


    return(
        
        <div className="flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6" >
            
                <Dropdown value={city} options={cities} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>
 

            </div>
        </div>
    )
}
export default AddBorrow