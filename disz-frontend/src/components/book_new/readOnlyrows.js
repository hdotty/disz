import React from "react";

const ReadOnlyRows = ({book, handleEditClick}) => {

    return(
        <tr>
            <td>{book.author}</td>
            <td>{book.title}</td>
            <td><button type="button" onClick={(e)=>handleEditClick(e, book)}>edit</button></td>
        </tr>

    )
}
export default ReadOnlyRows