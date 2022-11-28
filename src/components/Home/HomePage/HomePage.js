import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import FlashSale from '../FlashSale/FlashSale';
import CartProduct from '../ProductsDrawer/CartProduct/CartProduct';

const HomePage = () => {
    return (
        <div>
            {/* <CartProduct></CartProduct> */}
            <Banner></Banner>
            <Category></Category>
            <FlashSale></FlashSale>
        </div>
    );
};

export default HomePage;