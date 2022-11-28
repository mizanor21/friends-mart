import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ category }) => {
    const { catagory_name, _id } = category;
    // console.log(category);
    return (
        <div>
            <Link to={`/products/${_id}`} className='btn btn-wide'><li>{catagory_name}</li></Link>
        </div>
    );
};

export default CategoryItem;