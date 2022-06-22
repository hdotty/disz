import React, { useState } from "react";
import PersonControllerApi from "../../api/src/api/PersonControllerApi";
import BorrowControllerApi from "../../api/src/api/BorrowControllerApi";
import BookControllerApi from "../../api/src/api/BookControllerApi";
import BorrowDto from "../../api/src/model/BorrowDto";


const useAddBorrow = () => {
    const PersonController = new PersonControllerApi();
    const BorrowController = new BorrowControllerApi()
    const BookController = new BookControllerApi()

    const [persons, setPersons] = useState()
    
    const [run1, setRun1] = useState(true)
    const [run2, setRun2] = useState(true)
    const [run3, setRun3] = useState(true)

    const [book, setBook] = useState()



    const getAllPersons = () => {
        if(run1){
            PersonController.getPersonsUsingGET(function(error, data){
                if(error!==null){
                    console.log(error)
                }else{
                    setPersons(data)
                }
                setRun1(false)
            })
            
        }
        
    }


    const getBook = (id) => {
        if(run2){
            BookController.getBookUsingGET(id, function(error, data){
                if(error !== null){
                    console.log(error)
                }else{
                    setBook(data)
                }
                setRun2(false)
            })
        }
    }


    const handleSubmit = (e, person, bookId, date) => {
        e.preventDefault()
        if(run3){
            getBook(bookId)
            console.log(person, book)
            const borrow = new BorrowDto()
            borrow.personDto=person
            borrow.bookDto
            console.log(borrow)
            //BorrowController.addBorrowUsingPOST()

        }

        

    }

    return{getAllPersons, persons, handleSubmit}
}

export default useAddBorrow