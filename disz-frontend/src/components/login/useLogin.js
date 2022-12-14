import React, { useState } from "react";
import LoginControllerApi from "../../api/src/api/LoginControllerApi";
import AuthenticationDto from "../../api/src/model/AuthenticationDto";
import useGetLoggedInUser from "../getLoggedInUser";

const useLogin = () => {
    const LoginController = new LoginControllerApi()

    const {getLoggedInUser, user} = useGetLoggedInUser()

    const handleSubmit = (e, email, password) => {
        e.preventDefault();
        const login = new AuthenticationDto()
        login.email = email
        login.password = password
        LoginController.loginUsingPOST(login, function(error){
            if(error !== null){
                console.log(error)
            }else{
                getLoggedInUser()

            }
        })
    }
    return {handleSubmit, user}
}

export default useLogin