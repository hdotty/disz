import { Button } from "primereact/button";
import React from "react";

const NotReturnedBorrows = (props) => {

    const notReturned = props.notReturned 

    return (
        <tbody>
            {notReturned.map((borrow,id) =>(
                <Fragment key={id}>
                <tr>
                    <td>{notReturned.person}</td>
                    <td>{notReturned.book}</td>
                    <td>{notReturned.startTime}</td>
                    <td>{notReturned.endTime}</td>
                    <td><Button type="button" label="Edit" onClick={(e)=>handlEdit(e, borrow)}/></td>
                    <td><Button type="button" label="Delete" onClick={(e)=>handlDelete(e, borrow)}/></td>
                </tr>
                </Fragment>
            ))}
        </tbody>

    )

}

export default NotReturnedBorrows