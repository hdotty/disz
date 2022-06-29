import { Button } from "primereact/button";
import React from "react";

const AllBorrows = (props) => {

    const findAll = props.all 

    return (
        <tbody>
            {findAll.map((borrow,id) =>(
                <Fragment key={id}>
                <tr>
                    <td>{findAll.person}</td>
                    <td>{findAll.book}</td>
                    <td>{findAll.startTime}</td>
                    <td>{findAll.endTime}</td>
                    <td> <Button type="button" label="Edit" onClick={(e)=>handlEdit(e, borrow)} /></td>
                    <td> <Button type="button" label="Delete" onClick={(e)=>handlDelete(e, borrow)} /></td>
                </tr>
                </Fragment>
                
            ))}
        </tbody>

    )

}

export default AllBorrows