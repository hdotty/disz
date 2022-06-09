import { useState, useEffect } from "react"
import PersonControllerApi from "../api/src/api/PersonControllerApi"
import PersonDtoRes from './../api/src/model/PersonDtoRes.js'

const UseSignUp = () => {
    const [isCanceled, setIsCanceled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [registered, setRegistered] = useState(false)

    const PersonController = new PersonControllerApi()

    function addUser(firstName, lastName, email, psw, psw2) {
        var person = new PersonDtoRes()
        person.firstName = firstName
        person.lastName = lastName
        person.email = email
        console.log(person)
        setIsPending(true)

        try{
            if (psw === psw2){
                console.log(person)
                person.password = psw
            }else{
                throw new Error ('nem egyezik a két jelszó')
            }

            PersonController.addPersonUsingPOST(person, function(error) {
                console.log(error)
                if (error !== null) {
                    setIsPending(false);
                    throw new Error (error)
                    
                } else {
                    setRegistered(true)
                    setIsPending(false);
                    setIsCanceled(true);
                    setError("")
                }
            })
            
        }catch(err){
            if(isCanceled){
                console.log(err)
                setError(err.message)
                setIsPending(false)
            }
            
        }

    }
    useEffect(() => {
        return () => setIsCanceled(true)
    }, [])

    return {error, isPending, addUser, registered}

}
export {UseSignUp}


