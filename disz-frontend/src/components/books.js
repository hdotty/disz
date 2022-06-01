//egy file lesz
//mindig ez lesz meghivva, és a "filtert" változtatjuk


import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

class BooksTable extends Component {

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
                        <Column field="author" header="Author"></Column>
                        <Column field="title" header="Title"></Column>
                        <Column field="isFree" header="Free"></Column>
                    </DataTable>
                </div>
            </div>
        );
    }
}
         
export default BooksTable

