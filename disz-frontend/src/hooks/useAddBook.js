import { useEffect, useState } from "react"
import BookControllerApi from "../api/src/api/BookControllerApi"
import Book from "../api/src/model/Book"

export const useAddBook = () => {
    const [isCanceled, setIsCanceled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const addbook = async(author, title) => {
        var book = new Book()
        book.author = author
        book.title = title
        
        setError(null)
        setIsPending(true)

        try{
            const res = await BookControllerApi.addBookUsingPOST(book)
            
            if(!res){
                throw new Error('Could not complete')
            }

            if(!isCanceled){
                setIsPending(false)
                setError(null)
            }
        }catch(err){
            if(!isCanceled){
                console.log(err.messege)
                setError(err.messege)
                setIsPending(false)
            }
        }
    }
    useEffect(() => {
        return () => setIsCanceled(true)
    }, [])

    return {error, isPending, addbook}

}