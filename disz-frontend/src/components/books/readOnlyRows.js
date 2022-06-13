//egy file lesz
//mindig ez lesz meghivva, és a "filtert" változtatjuk

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useState, useEffect } from 'react';
import BookControllerApi from '../../api/src/api/BookControllerApi.js';
import { ConnectedOverlayScrollHandler } from 'primereact/utils';



const BooksTable = () => {
    const BookController = new BookControllerApi()
    const [books, setBooks] = useState([]);
    const [row, setRow] = useState(null)
 
    useEffect(() => {
        BookController.getBooksUsingGET(function(error, data){
            if(error !== null){
                console.log(error)
            }else{
                setBooks(data)
            }  
        })
    }, [])
    

    const deleteButton = () => { 
        
        return (
            <div>
                <Button onClick={deleteRow()}> Delete </Button>
            </div>
    ); }

    const deleteRow = () => {
        //BookController.deleteBookUsingDELETE(id, callback)
        //console.log("delete")
    }

        
    return (
        <div>
            <div className="card p-fluid">
                
                <DataTable value={books} editMode="row" dataKey='id' responsiveLayout="scroll">
                    
                    <Column field="author" header="Author"></Column>
                    <Column headerStyle={{ width: '80%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                    <Column field="title" header="Title"></Column>
                    <Column  body={deleteButton()}  >  </Column>
                   
                </DataTable>


            </div>
            
        </div>
    );
} 
    
         
export default BooksTable

