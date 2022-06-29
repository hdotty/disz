import React, { useState } from "react";
import {Button} from "primereact/button";
import useDisplayBorrows from "./useDisplayBorrows";

import AllBorrows from "./allBorrows";
import NotReturnedBorrows from "./notReturnedBorrows";
import ReturnedBorrows from "./returnedBorrows";

const DisplayBorrows = () => {

    const {findAll, all, findNotReturned, notReturned, findReturned, returned} = useDisplayBorrows()

    const [displayAll,  setDisplayAll] = useState(false)
    const[displayNotReturned, setDisplayNotReturned] = useState(false)
    const [displayReturned, setDisplayReturned] = useState(false)

return (

    <div className="flex align-items-center justify-content-center">
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6 ">

        <table>
            <tr>
                <td>
                    <Button label="All" type="button" 
                        onClick={(e)=>{
                            setDisplayAll(true)
                            setDisplayNotReturned(false)
                            setDisplayReturned(false)
                            findAll(e)
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
                        }}/>
                </td>
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
            
            {displayAll ? 
                <AllBorrows all={all} />   :
                <tbody></tbody>
            }
            {displayNotReturned ?
                <NotReturnedBorrows notReturned={notReturned}/> :
                <tbody></tbody>
            }
            {displayReturned ?
                <ReturnedBorrows returned={returned}/> :
                <tbody></tbody>
            }
        
        </table>        
        
    </div>
    </div>
)


}
export default DisplayBorrows