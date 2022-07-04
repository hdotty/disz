import React, { useState } from "react";
import LoginControllerApi from "../../api/src/api/LoginControllerApi";
import PersonControllerApi from "../../api/src/api/PersonControllerApi";
import AuthenticationDto from "../../api/src/model/AuthenticationDto";
import PersonDto from "../../api/src/model/PersonDto";

const useLogin = () => {
    const LoginController = new LoginControllerApi()
    const [person, setPerson] = useState()

    const handleSubmit = (e, email, password) => {
        e.preventDefault();
        const login = new AuthenticationDto()
        login.email = email
        login.password = password
        LoginController.loginUsingPOST(login, function(error){
            if(error !== null){
                console.log(error)
            }else{
                console.log("hey ya")                
            }
        })
    }

    

    return {handleSubmit, person}
}
export default useLogin