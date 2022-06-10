//egy file lesz
//mindig ez lesz meghivva, és a "filtert" változtatjuk

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useEffect } from 'react';
import BookControllerApi from '../../api/src/api/BookControllerApi.js';



const BooksTable = () => {
    const BookController = new BookControllerApi()
    const [books, setBooks] = useState([]);
 
    useEffect(() => {
        BookController.getBooksUsingGET(function(error, data){
            if(error !== null){
                console.log(error)
            }else{
                setBooks(data)
                console.log("books")
            }  
        })
    }, [])
    
    const asd = (e) => {}
        
    return (
        <div>
            <div className="card p-fluid">
                <DataTable value={books} editMode="row" dataKey='id' onRowEditComplete={asd} responsiveLayout="scroll">
                    <Column field="author" header="Author"></Column>
                    <Column field="title" header="Title"></Column>
                    <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>

                </DataTable>


            </div>
            
        </div>
    );
    
}
         
export default BooksTable

