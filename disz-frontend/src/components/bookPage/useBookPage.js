import React, { useState } from "react";
import BookControllerApi from "../../api/src/api/BookControllerApi";
import BookDto from "../../api/src/model/BookDto";

const useBookPage = () => {
    const BookController = new BookControllerApi()
    const [book, setBook] = useState(new BookDto)
    const [run, setRun] = useState(true)

    const getBook = (id) => {
        if(run){
            BookController.getBookUsingGET(id, function(error, data){
                if(error === null){
                    setBook(data)
                    setRun(false)
                }else{
                    console.log(error)
                    setRun(false)
                }
            })
        }
        
    }

    return {book, getBook}

}

export default useBookPage