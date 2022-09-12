import React from 'react'
import ProductTable from './ProductTable'
import './products.css'


function Products() {
    const data = JSON.parse(localStorage.getItem('data'))

    return (
        <>
            <div className="product_div m-5 ">
                <ProductTable data={data.productsPage.products} />
            </div>
        </>
    )
}
export default Products;