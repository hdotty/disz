import { Button } from "primereact/button";
import React from "react";

const ReturnedBorrows = (props) => {

    const returned = props.returned

    return (
        <tbody>
            {returned.map((borrow,id) =>(
                <Fragment key={id}>
                <tr>
                    <td>{returned.person}</td>
                    <td>{returned.book}</td>
                    <td>{returned.startTime}</td>
                    <td>{returned.endTime}</td>
                    <td><Button type="button" label="Edit" onClick={(e)=>handlEdit(e, borrow)}/></td>
                    <td><Button type="button" label="Delete" onClick={(e)=>handlDelete(e, borrow)}/></td>
                </tr>
                </Fragment>
            ))}
        </tbody>

    )

}

export default ReturnedBorrows