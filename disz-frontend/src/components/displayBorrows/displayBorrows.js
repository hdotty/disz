import React, { useState } from "react";
import {Button} from "primereact/button";
import useDisplayBorrows from "./useDisplayBorrows";
import { Fragment } from "react";

import AllBorrows from "./allBorrows";


const DisplayBorrows = () => {

    const {findAll, all, findNotReturned, findReturned, notReturned, handleEdit, handleDelete} = useDisplayBorrows()

    const [displayAll,  setDisplayAll] = useState(false)
    const [displayNotReturned, setDisplayNotReturned] = useState(false)
    const [displayReturned, setDisplayReturned] = useState(false)

    const [borrows, setBorrows] = useState(all)

return (

    <div className="flex align-items-center justify-content-center">
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6 ">


        <table className="flex align-items-center justify-content-center">
            <tbody>
            <tr>
                <td>
                    <Button label="All" type="button" 
                        onClick={(e)=>{
                            setDisplayAll(true)
                            setDisplayNotReturned(false)
                            setDisplayReturned(false)
                            findAll(e)
                            setBorrows(all)
                            console.log(all)
                        }} />
                </td>
                <td>
                    <Button label="Not Returned" type="button"
                        onClick={(e)=>{
                            setDisplayAll(false)
                            setDisplayNotReturned(true)
                            setDisplayReturned(false)
                            findNotReturned(e)
                            
                        }}/>
                </td>
                <td><Button label="Returned" type="button" 
                        onClick={(e)=>{
                            setDisplayAll(false)
                            setDisplayNotReturned(false)
                            setDisplayReturned(true)
                            findReturned(e)
                            setBorrows(notReturned)
                        }}/>
                </td>
            </tr>
            </tbody>
        </table><br/>

        <div className="flex align-items-center justify-content-center">
        {(displayAll || displayNotReturned || displayReturned) &&
        <table className="table" >
            <thead>
                <tr>
                    <th>User</th>
                    <th>Book</th>
                    <th>From</th>
                    <th>To</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>

            <tbody>    
           

                {borrows?.map((borrow, index) =>(
                <Fragment key={index}>
                <tr>
                    {console.log()}
                    <td>{borrow.person.email}</td>
                    <td>{borrow.book.title}</td>
                    <td>{borrow.startTime && borrow.startTime.toString()}</td>
                    <td>{borrow.endTime && borrow.endTime.toString()}</td>
                    <td><Button type="button" label="Edit" onClick={(e)=>handleEdit(e, borrow.email)}/></td>
                    <td><Button type="button" label="Delete" onClick={(e)=>handleDelete(e, borrow.email)}/></td>
                
                </tr>
                    
                </Fragment>
                
            ))}
            </tbody>
               
        </table>
        
        }
       
        </div>

                
        
    </div>
    </div>
)


}
export default DisplayBorrows


/*
{displayAll && <AllBorrows borrows={all} /> }
{displayNotReturned && <AllBorrows borrows={notReturned} /> }
{displayReturned && <AllBorrows borrows={returned} /> }
*/


/*
<td>{borrow.person.email}</td>
                    <td>{borrow.book.title}</td>
                    
                    <td> <Button type="button" label="Edit" onClick={(e)=>handleEdit(e, borrow.email)} /></td>
                    <td> <Button type="button" label="Delete" onClick={(e)=>handleDelete(e, borrow.email)} /></td>
                
*/