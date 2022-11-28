import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData({});
    const [product, setProduct] = useState({});
    // console.log(products)
    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                    {
                        products.map(product => <Product key={product._id} product={product} setProduct={setProduct}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;