import React, { useState } from "react";
import LoginControllerApi from "../../api/src/api/LoginControllerApi";
import PersonControllerApi from "../../api/src/api/PersonControllerApi";
import PersonDto from "../../api/src/model/PersonDto";

const useLogin = () => {
    const LoginController = new LoginControllerApi()
    const PersonController = new PersonControllerApi()
    const [person, setPerson] = useState()

    const handleSubmit = (e, email, password) => {
        e.preventDefault();
        LoginController.loginUsingPOST(email, password, function(error,data,response){
            if(error !== null){
                console.log(error)
                console.log(response)
            }else{
                
                console.log("hello there")
                console.log(response)

                console.log(person)
            }
        })

       /* PersonController.personGetByEmailUsingGET(email, function(error, data){
            if(error===null){
                setPerson(data)
                console.log("setperson", data)
            }else{
                console.log(error)
            }
            
        })*/
    }
    return {handleSubmit}
}
export default useLogin