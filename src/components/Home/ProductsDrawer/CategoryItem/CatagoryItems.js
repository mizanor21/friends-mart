import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryItem from './CategoryItem';

const CatagoryItems = () => {
    const { data: categories = [] } = useQuery({
        queryKey: 'categories',
        queryFn: () => fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
    })
    return (
        <div>
            <div className="grid grid-cols-1 gap-5">
                {
                    categories.map(category => <CategoryItem key={category._id} category={category}></CategoryItem>)
                }
            </div>
        </div>
    );
};

export default CatagoryItems;