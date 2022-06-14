import React, { useState } from "react";
import BookDto from "../../api/src/model/BookDto";

const EditableRow = ({book, props }) => {
    props.func("hello there")

    return (
        <tr>
            <td><input  type="text" placeholder={book.author} name="author" /></td>
            <td><input  type="text" placeholder={book.title} name="title"/></td>
            <td>
                <button type="submit">Save</button>
                <button>cancle</button>
            </td>
        </tr>
    )
}
export default {EditableRow}

