import React, { useEffect, useState } from "react";
import PersonControllerApi from "../../api/src/api/PersonControllerApi";
import PersonDto from "../../api/src/model/PersonDto";
import useDisplayPersons from "../displayPersons/useDisplayPersons";

const UsePerson = () => {
    const PersonController = new PersonControllerApi()
    const [isCanceled, setIsCanceled] = useState(false)
    const [person, setPerson] = useState(new PersonDto())


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
    console.log("usePerson person", person)
    
    return {getPerson, person}
}

export default UsePerson