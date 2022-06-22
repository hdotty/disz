import React, { useState } from "react";
import LoginControllerApi from "../../api/src/api/LoginControllerApi";
import PersonControllerApi from "../../api/src/api/PersonControllerApi";
import PersonDto from "../../api/src/model/PersonDto";

const useLogin = () => {
    const LoginController = new LoginControllerApi()
    const [person, setPerson] = useState()

    const handleSubmit = (e, email, password) => {
        e.preventDefault();
        LoginController.loginUsingPOST(email, password, function(error,data,response){
            if(error !== null){
                console.log(error)
            }else{
                setPerson(data)
            }
        })
    }

    

    return {handleSubmit, person}
}
export default useLogin