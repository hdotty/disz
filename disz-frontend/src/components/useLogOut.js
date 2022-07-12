import LoginControllerApi from "../api/src/api/LoginControllerApi"

const useLogOut = () => {
    const LoginController = new LoginControllerApi()
    const handleLogOut = (e) => {
        e.preventDefault()
        LoginController.logoutUsingPOST(function(error){
            if(error!==null){
                console.log(error)
            }
        })
    }
    return {handleLogOut}
}
export default useLogOut