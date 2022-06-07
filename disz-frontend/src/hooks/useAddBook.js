import { useEffect, useState } from "react"
import BookControllerApi from "../api/src/api/BookControllerApi"
import BookDto from "../api/src/model/BookDto"

export const useAddBook = () => {
    const [isCanceled, setIsCanceled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [posted, setPosted] = useState('')

    function addbook(author, title) {
        var book = new BookDto()
        book.author = author
        book.title = title
        
        setIsPending(true)

        //a try-ba rakjuk az if-et, amiben megnézzük h üres e string. Ha az, errort dobunk. miután a catch is lefutott, az urán POSTolunk csak


        try{
            if (book.author=='' || book.title==''){
                setIsCanceled(true)
                setIsPending(false)
                setPosted('')
                throw new Error ('The book needs an author and a title!')
            }

            BookControllerApi.addBookUsingPOST(book, function(error) {
                if (error !== null) {
                    setPosted('Something went wrong!')
                } else {
                    setPosted("You have added a new book!")
                    setIsPending(false);
                    setIsCanceled(true);
                    setError("")
                }
            })
            
        }catch(err){
            if(isCanceled){
                console.log(err)
                setError(err.message)
                setIsPending(false)
            }
            
        }

    }
    useEffect(() => {
        return () => setIsCanceled(true)
    }, [])

    return {error, isPending, addbook, posted}

}