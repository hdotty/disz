
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';

const BooksTable = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <DataTable value={products} responsiveLayout="scroll">
                    <Column field="author" header="Author"></Column>
                    <Column field="title" header="Title"></Column>
                    <Column field="isFree" header="Free"></Column>
                </DataTable>
            </div>
        </div>
    );
}
 

//TODO nagyon ki kell még ezt javítani