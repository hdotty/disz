import React, { useEffect, useState } from "react";
import PersonControllerApi from "../../api/src/api/PersonControllerApi";
import PersonDto from "../../api/src/model/PersonDto";


const UsePerson = () => {
    const PersonController = new PersonControllerApi()
    const [isCanceled, setIsCanceled] = useState(false)
    const [person, setPerson] = useState(new PersonDto())
    const [edit, setEdit] = useState(false)


    const getPerson = (id) => {
        try{
            if(!isCanceled){
                PersonController.getPersonUsingGET(id, function(error, data){
                    console.log(error, data)
                    if(error !== null){
                        setIsCanceled(true)
                        throw Error(error)
                        
                    }else{
                        setPerson(data)
                        setIsCanceled(true)
                    }
                })
            }
        }catch(err){
            console.log(err)
            setIsCanceled(true)
        }
        
    }    

    const handleEdit = (e) => {
        e.preventDefault()
        setEdit(true)
    }

    const handleSave = (e, firstName, lastName) => {
        e.preventDefault()
        //PersonController.updatePersonUsingPUT
        //
    }

    return {getPerson, person, handleEdit, edit}
}

export default UsePerson