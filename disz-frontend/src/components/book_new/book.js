import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import ReadOnlyRows from "./readOnlyrows";

import BookControllerApi from "../../api/src/api/BookControllerApi";
import EditableRows from "./EditableRows";
import edit from "./EditableRows"
import { Fragment } from "react";
import BookDto from "../../api/src/model/BookDto";

const Book = () => {
    const BookController = new BookControllerApi()
    const [books, setBooks] = useState([]);
    const [editBookId, setEditBookId] = useState(0)
    const [editAuthor, setEditAuthor] = useState('')
    const [editTitle, setEditTitle] = useState('')

    useEffect(() => {
        BookController.getBooksUsingGET(function(error, data){
            if(error !== null){
                console.log(error)
            }else{
                setBooks(data)
            }  
        })
    }, [])

    const handleEditClick = (e, book) => {
        e.preventDefault()
        setEditBookId(book.bookId)
    }

    const handleEditFormChange = (e) => {
        e.preventDefault()
        //const fieldName = e.target.getAttribute("name")
        //const fieldValue = e.target.value
        //console.log(fieldName)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }
    

    return (
        <div className="card p-fluid">
            <form onSubmit={(e=>handleSubmit(e))}>
            <table className="table table-striped">
                <thead>
                    <td scope="col" >Author</td>
                    <td scope="col">title</td>
                    <td scope="col">sdf</td>
                </thead>
                <tbody>
                    {books.map((book)=>(
                        <Fragment>
                            {editBookId === book.bookId ? 
                            (<EditableRows book={book}/>) : 
                            (<ReadOnlyRows book={book}  handleEditClick={handleEditClick}/>
                            )}
                        </Fragment>
                    ))}
                </tbody>
            </table>
            </form>
        </div>
    )
}

export default Book