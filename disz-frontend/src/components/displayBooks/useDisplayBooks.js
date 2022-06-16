import React, { useState, useEffect } from 'react';
import BookControllerApi from '../../api/src/api/BookControllerApi';

const useBooks = () => {
    const BookController = new BookControllerApi()

    const [books, setBooks] = useState([]);
    const [editBookId, setEditBookId] = useState(0)
    const [reRenderBooks, setReRenderBooks] = useState(true)
    
    
    const displayBooks = () => {
        if(reRenderBooks){
            BookController.getBooksUsingGET(function(error, data){
                if(error !== null){
                    console.log(error)
                }else{
                    setBooks(data)
                    setReRenderBooks(false)
                }  
            })
        }
    }
    
    const handleEditClick = (e, book) => {
        e.preventDefault()
        setEditBookId(book.bookId)
    }    

    const handleSaveClick = (e, book, editAuthor, editTitle) => {
        e.preventDefault()
        console.log(edit)
        var edit = {'author': editAuthor, 'title': editTitle}
        BookController.updateBookUsingPUT(book, edit, function(error, data, response){
            if(error !== null){
                console.log(response)
                console.log("something went wrong")
            }else{
                setEditBookId(null)
                setReRenderBooks(true)
                displayBooks()
            }
        })
        
        setEditBookId(null)
        
    }

    const handleDeleteClick = (e, book) => {
        e.preventDefault()
        BookController.deleteBookUsingDELETE(book.bookId, function(error){
            if(error === null){
                setReRenderBooks(true)
                displayBooks()
            }
        })
    }

    return {books, editBookId, displayBooks, handleEditClick, handleSaveClick, handleDeleteClick}
}
export {useBooks}
