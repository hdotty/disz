import React, { useState, useEffect } from 'react';
import BookControllerApi from '../api/src/api/BookControllerApi';

const useBooks = () => {
    const [books, setBooks] = useState([]);
    const BookController = new BookControllerApi()

    function getBooks(){
        setBooks(BookController.getBooksUsingGET(function(){}))

        return {books}
    }
    



    /*
        useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    */
}
export {useBooks}
