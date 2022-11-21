import React from 'react';

const FlashSaleItem = ({ flashsaleItem }) => {
    const { img, name, price } = flashsaleItem;
    // console.log(flashsaleItem)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className=" flex justify-center items-center">

                    <figure className='w-[300px] h-[400px]'><img src={img} alt="Shoes" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>

                    <p>{price}</p>
                    <div className="card-actions flex justify-around">
                        <button className="btn btn-secondary sm:btn-sm md:btn-md lg:btn-lg">Buy Now</button>
                        <button className="btn btn-outline btn-secondary sm:btn-sm md:btn-md lg:btn-lg">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashSaleItem;