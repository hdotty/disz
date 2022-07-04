import React from "react"
import {Button} from "primereact/button"
import useBookPage from "./useBookPage"
import AddBorrow from "../addBorrow/addBorrow"


function BookPage(props){
    const id = props.editBookId
    const {book, getBook, handleBorrow, borrow} = useBookPage()
    
    getBook(id)

    return(

        <div className="surface-0 ">
            <div className="font-medium text-3xl text-900 mb-3">{book.author}</div>
            <div className="font-medium text-3xl text-900 mb-3">{book.title}</div>

            {borrow ? 
            <AddBorrow book={book}/> :
            <ul className="list-none p-0 m-0">
            <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                <div className="text-500 w-6 md:w-2 font-medium">Author</div>
                <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{book.author}</div>
            </li>
            
            <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                <div className="text-500 w-6 md:w-2 font-medium">Title</div>
                <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{book.title}</div>
            </li>
            <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                <div className="text-500 w-6 md:w-2 font-medium">Available</div>
                <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">yes or no</div>
            </li>
            <li>
                <div>
                    <br></br>
                    <Button label="Borrow It" icon="pi pi-user" className="w-full" onClick={(e)=>(handleBorrow(e))} />
                </div>
            </li>
            <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                <div className="text-500 w-6 md:w-2 font-medium">Who borrowed it?
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Who</th>
                                <th>From</th>
                                <th>To</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </li> 
        </ul>
        }
        </div>
    )
}


export default BookPage