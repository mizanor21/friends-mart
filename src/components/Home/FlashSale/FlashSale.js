import React, { useEffect, useState } from 'react';
import CatagoryItems from '../ProductsDrawer/CategoryItem/CatagoryItems';
import FlashSaleItem from './FlashSaleItem';

const FlashSale = () => {
    const [flashsale, setFlashsale] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/flashsale')
            .then(res => res.json())
            .then(data => setFlashsale(data));
    }, []);

    return (
        <div className='lg:flex relative md:top-[-70px]'>
            <div className="w-[20%]">
                <ul className="menu p-4 w-80 bg-base-200 text-base-content">
                    <div className="flex items-center">
                        <label className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <h1 className='text-xl font-bold'>My markets</h1>
                    </div>
                    <hr />
                    <CatagoryItems></CatagoryItems>

                </ul>
            </div>
            <div className="md:w-[78%]">
                <div className="flex justify-between">
                    <h2 className='text-3xl font-bold text-gray-500'>FlashSale</h2>
                    <label htmlFor="category-drawer" tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-3 md:m-0">

                    {
                        flashsale.map(flashsaleItem => <FlashSaleItem key={flashsaleItem._id} flashsaleItem={flashsaleItem}></FlashSaleItem>)
                    }

                </div>
            </div>
        </div>
    );
};

export default FlashSale;