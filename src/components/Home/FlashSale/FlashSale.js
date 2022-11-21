import React, { useEffect, useState } from 'react';
import FlashSaleItem from './FlashSaleItem';

const FlashSale = () => {
    const [flashsale, setFlashsale] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/flashsale')
            .then(res => res.json())
            .then(data => setFlashsale(data));
    }, []);

    return (
        <div className='container mx-auto max-w-[1200px]'>
            <h2 className='text-2xl font-bold text-gray-500'>FlashSale</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">

                {
                    flashsale.map(flashsaleItem => <FlashSaleItem key={flashsaleItem._id} flashsaleItem={flashsaleItem}></FlashSaleItem>)
                }

            </div>
        </div>
    );
};

export default FlashSale;