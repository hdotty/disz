import React, {Component, Fragment, useState} from "react";
import Select from "react-select"
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/primereact.min.css';
import useAddBorrow from './useAddBorrow'
import { Calendar } from 'primereact/calendar';
import { Button } from "primereact/button";
import BorrowDto from "../../api/src/model/BorrowDto";
 

const AddBorrow = (props) => {
    const bookId = props.id
    const {getAllPersons, persons, handleSubmit, findAll} = useAddBorrow()
    const [person, setPerson] = useState()
    const [date, setDate] = useState()

    getAllPersons();
    //findAll()

    return(
        
        <div>
            <label className="block text-900 font-medium mb-2">Email</label>
                <Dropdown
                optionLabel="email"
                value={person} 
                options={persons} 
                onChange={(e) => setPerson(e.value)} 
                placeholder="Who will borrow it..?"/><br/><br/>

            <label className="block text-900 font-medium mb-2">From</label>
            <Calendar value={date} onChange={(e) => setDate(e.value)}></Calendar><br/><br/>

            <Button type="button" className="w-full" label="Borrow" onClick={(e)=>handleSubmit(e, person, bookId, date)} />
        </div>
    )
}
export default AddBorrow