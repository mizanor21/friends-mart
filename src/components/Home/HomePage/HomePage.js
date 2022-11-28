import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import FlashSale from '../FlashSale/FlashSale';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <FlashSale></FlashSale>
        </div>
    );
};

export default HomePage;