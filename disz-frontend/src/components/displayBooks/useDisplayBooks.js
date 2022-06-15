import React, { useState, useEffect } from 'react';
import BookControllerApi from '../../api/src/api/BookControllerApi';

const useBooks = () => {
    const BookController = new BookControllerApi()

    const [books, setBooks] = useState([]);
    const [editAuthor, setEditAuthor] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const [editBookId, setEditBookId] = useState(0)
    const [reRenderBooks, setReRenderBooks] = useState(true)
    
    
    const displayBooks = () => {
        if(reRenderBooks){
            BookController.getBooksUsingGET(function(error, data){
                console.log(error, data)
                if(error !== null){
                    console.log(error)
                }else{
                    setBooks(data)
                    setReRenderBooks(false)
                }  
            })
        }
    }
    

    const handleSaveClick = (e, book) => {
        e.preventDefault()
        var edit = {'author': editAuthor, 'title': editTitle}
        BookController.updateBookUsingPUT(book, edit, function(error, data, response){
            if(error !== null){
                console.log(response)
                console.log("something went wrong")
            }else{
                console.log("done")
                console.log(response)
                console.log("new book: ", book)
            }
            
        })
        setReRenderBooks(true)
        setEditBookId(null)
        displayBooks()
    }
    return {books, displayBooks, handleSaveClick}
}
export {useBooks}
