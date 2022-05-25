import {Button} from "primereact/button"

function BookPage(){

    return(
        <div className="surface-0">
            <div className="font-medium text-3xl text-900 mb-3">Book</div>
            <div className="text-500 mb-5">Do you want to borrow it?</div>
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Author</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">author</div>
                </li>
                
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Title</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">title</div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Available</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">yes or no</div>
                </li>
                <li>
                    <div>
                        <br></br>
                        <Button label="Borrow It" icon="pi pi-user" className="w-full" /> 
                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Who borrowed it?
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">yes or no</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">yes </div>
                    </div>
                </li>
                    
                
                    
            </ul>
        </div>
    )
}


//csak az admin láthatja a "Borrow It" gombot => ez át fogja irányítani a Borrow oldalra
export default BookPage