import React, { useState } from "react";
import BorrowControllerApi from "../../api/src/api/BorrowControllerApi";

const useDisplayBorrows = () => {
    const BorrowController = new BorrowControllerApi()
    
    const [runAll, setRunAll] = useState(true)
    const [all, setAll] = useState()

    const [runNotReturned, setRunNotReturned] = useState(true)
    const [notReturned, setNotReturned] = useState()

    const [runReturned, setRunReturned] = useState(true)
    const [returned, setReturned] = useState()

    const findAll = (e) => {
        if(runAll){
            BorrowController.findAllUsingGET(function(error, data){
                if(error!==null){
                    console.log(error)
                }else{
                    setAll(data)
                }
            })
            setRunAll(false)
        }
    }

    const findNotReturned = () => {
        if(runNotReturned){
            BorrowController.findBorrowByStartTimeIsNotNullAndEndTimeIsNullUsingGET(function(error,data){
                if(error!==null){
                    console.log(error)
                }else{
                    setNotReturned(data)
                }
            })
            setRunNotReturned(false)
        }
    }

    const findReturned = () => {
        if(runReturned){
            BorrowController.findBorrowByStartTimeAndEndTimeIsNotNullUsingGET(
                function(error, data){
                    if(error!==null){
                        console.log(error)
                    }else{
                        setReturned(data)
                    }
                }
            )
            setRunReturned(false)
        }

    }

    return {findAll, all, findNotReturned, notReturned, findReturned, returned}
}

export default useDisplayBorrows