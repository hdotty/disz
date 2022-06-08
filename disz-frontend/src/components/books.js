//egy file lesz
//mindig ez lesz meghivva, és a "filtert" változtatjuk

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {useBooks} from "../hooks/useBooks.js"
import { useState, useEffect } from 'react';
import BookControllerApi from '../api/src/api/BookControllerApi.js';


const BooksTable = () => {
    const BookController = new BookControllerApi()
    const [books, setBooks] = useState([]);
 
    useEffect(() => {
        BookController.getBooksUsingGET(function(error, data){
            if(error !== null){
                console.log(error)
            }else{
                setBooks(data)
                console.log("done?")
            }  
        })
    }, [])
    
        
    return (
        <div>
            <div className="card">
                <DataTable value={books} responsiveLayout="scroll">
                    <Column field="author" header="Author"></Column>
                    <Column field="title" header="Title"></Column>
                </DataTable>
            </div>
        </div>
    );
    
}
         
export default BooksTable

