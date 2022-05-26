import { Link } from 'react-router-dom'
import { Button } from 'primereact/button'


function Home(){
    return(
        <div className="flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div className="text-center mb-5">
                    <img src="assets/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" />
                    <div className="text-900 text-3xl font-medium mb-3">Welcome</div>


                </div>

                <div>
                    <Button label="Log In" icon="pi pi-user" className="w-full" /> <br/><br/>
                    <Button label="Sign Un" icon="pi pi-user" className="w-full" />
                </div>
            </div>
        </div>
    )
}

export default Home