import React, { useState } from "react"
import PersonControllerApi from "../../api/src/api/PersonControllerApi"

const useChangePsw = () => {

    const PersonController = new PersonControllerApi()
    const [run, setRun] = useState(true)
    const [error, setError] = useState(null)

    const handleSubmit = (e, person, oldPsw, newPsw1, newPsw2) => {
        e.preventDefault()
        try{
            if(newPsw1 !== newPsw2){
                throw Error("New passwords not match")
            }else{
                if(run){
                    PersonController.pswChangeUsingPUT(newPsw1, oldPsw, person, function(error){
                        if(error===null){
                            setRun(false)
                            
                        }else{
                            throw Error(error)
                        }
                    })
                }

            }
        }catch(err){
            setError(err)
            console.log(error)
        }        
    }

    
    return {handleSubmit, error}
}

export default useChangePsw