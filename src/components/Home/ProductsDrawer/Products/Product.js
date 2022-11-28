import React from 'react';

const Product = ({ product }) => {
    const { img, name, price } = product;
    // console.log(product)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className=" flex justify-center items-center">

                    <figure><img className='w-[250px] h-[250px] mt-5' src={img} alt="Shoes" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>

                    <p>${price}</p>
                    <div className="card-actions flex justify-end">
                        <button className="btn btn-secondary sm:btn-sm md:btn-md">Buy Now</button>
                        <button className="btn btn-outline btn-secondary sm:btn-sm md:btn-md">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;