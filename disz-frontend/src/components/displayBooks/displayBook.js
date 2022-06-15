import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import BookControllerApi from "../../api/src/api/BookControllerApi";
import { Fragment } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useBooks } from "./useDisplayBooks";

const Book = () => {
    const BookController = new BookControllerApi()

    const [editBookId, setEditBookId] = useState(0)
    const [editAuthor, setEditAuthor] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const {books, displayBooks, handleSaveClick} = useBooks()
    const [reRenderBooks, setReRenderBooks] = useState(true)
    var edit = {'author': editAuthor, 'title': editTitle}

    displayBooks()
    

    const handleEditClick = (e, book) => {
        e.preventDefault()
        setEditBookId(book.bookId)
        console.log("book: ", book)
    }


console.log(books)
        
    
    const handleDeleteClick = (e, book) => {
        e.preventDefault()
        BookController.deleteBookUsingDELETE(book.bookId, function(error){})
    }
    
    return (
        <div className="flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6 ">
            <form >
            <table className="table table-striped" >
                <thead>
                    <tr>
                        <th scope="col" >Author</th>
                        <th scope="col">title</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, id)=>(
                        <Fragment key={id}>
                            {editBookId === book.bookId ? 
                            (<tr>
                                <td><InputText onChange={(e)=>setEditAuthor(e.target.value)} id="author" value={editAuthor} type="text" placeholder={book.author}/></td>
                                <td><InputText onChange={(e)=>setEditTitle(e.target.value)} id="title" value={editTitle} type="text" placeholder={book.title}/></td>
                                <td><Button type="button"  onClick={(e)=>{handleSaveClick(e, book, edit); setEditBookId(null); displayBooks()}}>Save</Button></td>
                                <td><Button type="button">Cancle</Button></td>
                            </tr>) : 
                            (<tr>
                                <td>{book.author}</td>
                                <td>{book.title}</td>
                                <td><Button type="button" onClick={(e)=>handleEditClick(e, book)}>Edit</Button></td>
                                <td><Button type="button" onClick={(e)=>{handleDeleteClick(e, book); displayBooks();}}>Delete</Button></td>
                            </tr>
                            )}
                        </Fragment>
                    ))}
                </tbody>
            </table>
            </form>
            </div>
        </div>
    )
}

export default Book