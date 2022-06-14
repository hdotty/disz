import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import BookControllerApi from "../../api/src/api/BookControllerApi";
import { Fragment } from "react";
import BookDto from "../../api/src/model/BookDto";

const Book = () => {
    const BookController = new BookControllerApi()
    const [books, setBooks] = useState([]);
    const [editBookId, setEditBookId] = useState(0)
    const [editAuthor, setEditAuthor] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const [currentBook, setCurrentBook] = useState(new BookDto)

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
        console.log("book: ", book)
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
        setEditBookId(null)
    }

        
    
    const handleDeleteClick = (e, book) => {
        e.preventDefault()
        BookController.deleteBookUsingDELETE(book.bookId, function(error){})
    }
    
    return (
        <div className="card p-fluid">
            <form>
            <table className="table table-striped" >
                <thead>
                    <tr>
                        <th scope="col" >Author</th>
                        <th scope="col">title</th>
                        <th scope="col">sdf</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, id)=>(
                        <Fragment key={id}>
                            {editBookId === book.bookId ? 
                            (<tr>
                                <td><input onChange={(e)=>setEditAuthor(e.target.value)} id="author" value={editAuthor} type="text" placeholder={book.author}/></td>
                                <td><input onChange={(e)=>setEditTitle(e.target.value)} id="title" value={editTitle} type="text" placeholder={book.title}/></td>
                                <td>
                                    <button type="button" onClick={(e)=>handleSaveClick(e, book)}>Save</button>
                                    <button type="button">Cancle</button>
                                </td>
                            </tr>) : 
                            (<tr>
                                <td>{book.author}</td>
                                <td>{book.title}</td>
                                <td><button type="button" onClick={(e)=>handleEditClick(e, book)}>Edit</button></td>
                                <td><button type="button" onClick={(e)=>handleDeleteClick(e, book)}>Delete</button></td>
                            </tr>
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