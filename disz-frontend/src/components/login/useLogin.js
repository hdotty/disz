import React, { useState } from "react";
import LoginControllerApi from "../../api/src/api/LoginControllerApi";
import PersonControllerApi from "../../api/src/api/PersonControllerApi";
import AuthenticationDto from "../../api/src/model/AuthenticationDto";

const useLogin = () => {
    const LoginController = new LoginControllerApi()
    const PersonController = new PersonControllerApi()

    const [person, setPerson] = useState()

    const handleSubmit = (e, email, password) => {
        e.preventDefault();
        const login = new AuthenticationDto()
        login.email = email
        login.password = password
        console.log(login)
        LoginController.loginUsingPOST(login, function(error){
            if(error !== null){
                console.log(error)
            }else{
                console.log("hey ya")
                PersonController.getLoggedInPersonUsingGET(function(error,data){
                    if(error!==null){
                        console.log(error)
                    }else{
                        console.log(data)
                        setPerson(data)
                    }
                })
            }
        })
        
        

    }
    return {handleSubmit, person}
}

export default useLogin