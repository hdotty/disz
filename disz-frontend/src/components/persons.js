//egy file lesz
//mindig ez lesz meghivva, és a "filtert" változtatjuk


import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

class PersonsTable extends Component {  //ezt csak az admin tudja majd megnézni

/*
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };

        this.productService = new ProductService();
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }
*/

    render() {
        return (
            <div>
                <div className="card">
                    <DataTable responsiveLayout="scroll">
                        <Column field="lastName" header="Last Name"></Column>
                        <Column field="firstName" header="First Name"></Column>
                        <Column field="email" header="Email"></Column>
                    </DataTable>
                </div>
            </div>
        );
    }
}
         
export default PersonsTable

