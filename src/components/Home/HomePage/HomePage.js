import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Category from '../Category/Category';
import FlashSale from '../FlashSale/FlashSale';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <FlashSale></FlashSale>
            <Categories></Categories>
        </div>
    );
};

export default HomePage;