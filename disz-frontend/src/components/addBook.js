import React, { useCallback } from "react";
import Axios from "axios"
import {InputText} from "primereact/inputtext"

import {Button} from "primereact/button"
import { useState } from "react";
import { Link } from "react-router-dom";

import BookControllerApi from "../api/src/api/BookControllerApi";
import Book from "../api/src/model/Book";

function AddBook(){
    const url = ''
    const [data, setData] = useState({
        author: "",
        title: ""
    })

    function submit(e){
        var book = new Book()
        book['author'] = data.author
        book['title'] = data.title
        console.log(book)
        //e.preventDefault()
        BookControllerApi.addBookUsingPOST(book)

    }

    var book = new Book()
    book['author'] = "jozsef attila"
    book['title'] = "osszes"
    console.log(book)


    function handle(e){
        const newData = { ...data } 
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData) 
    }
    return(
        
        <div className="flex align-items-center justify-content-center">
            <form onSubmit={(e)=>submit(e)} className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div className="text-center mb-5">
                    <img src="assets/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" />
                    <div className="text-900 text-3xl font-medium mb-3">Add a book!</div>
                    <span className="text-600 font-medium line-height-3">You need to add the author and the title of the book!</span>
                </div>

                <div>
                    <label htmlFor="author" className="block text-900 font-medium mb-2">Author</label>
                    <InputText onChange={(e)=>handle(e)} id="author" value={data.author} type="text" className="w-full mb-3" />

                    <label htmlFor="title" className="block text-900 font-medium mb-2">Title</label>
                    <InputText onChange={(e)=>handle(e)} id="title" value={data.title} type="text" className="w-full mb-3" />

                    <Button type="submit" label="Add" icon="pi pi-user" className="w-full" /> 
                    <br></br> <br></br>
                    <Button icon="pi pi-user" className="w-full"> <Link className='nav-link' to="/"> Cancle </Link> </Button>
                </div>
            </form>
        </div>
    
    )
}

export default AddBook