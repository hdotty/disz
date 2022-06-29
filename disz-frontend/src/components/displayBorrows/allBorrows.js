import { Button } from "primereact/button";
import React from "react";
import { Fragment } from "react";
import useDisplayBorrows from "./useDisplayBorrows";


const AllBorrows = (props) => {
    console.log(props)
    const {handleEdit, handleDelete} = useDisplayBorrows()
    const borrows = props.borrows 

    return (
    
        <tbody>    
            {borrows?.map((borrow, id) =>(
                <Fragment key={id}>
                <tr>
                    <td>{console.log("asd", borrow.person)}</td>
                    <td>{borrow.book}</td>
                    <td>{borrow.startTime}</td>
                    <td>{borrow.endTime}</td>
                    <td> <Button type="button" label="Edit" onClick={(e)=>handleEdit(e, borrow)} /></td>
                    <td> <Button type="button" label="Delete" onClick={(e)=>handleDelete(e, borrow)} /></td>
                </tr>
                </Fragment>
                
            ))}
        </tbody>

    )

}

export default AllBorrows