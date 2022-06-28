import React from "react";
import {Button} from "primereact/button";

const DisplayBorrows = () => {

return (

    <div className="flex align-items-center justify-content-center">
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6 ">

        <table>
            <tr>
                <td><Button label="All" type="button"  /></td>
                <td> <Button label="Not Returned" type="button"/> </td>
                <td> <Button label="Returned" type="button" /> </td>
            </tr>
        </table>

        <table>
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
                {
                    <tr>
                        <td>user</td>
                        <td></td>
                    </tr>
                }
            </tbody>
        
        </table>        
        
    </div>
    </div>
)


}
export default DisplayBorrows