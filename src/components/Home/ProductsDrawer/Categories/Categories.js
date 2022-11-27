import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductsDrawer from '../ProductsDrawer';

const Categories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: 'categories',
        queryFn: () => fetch('http://localhost:5000/categories')
            .then(res => res.json())
    })
    // console.log(categories);
    return (
        <div>
            {
                categories.map(category => <ProductsDrawer key={category} category={category}></ProductsDrawer>)
            }
        </div>
    );
};

export default Categories;