import React from 'react';
// import Categories from '../../components/Home/Categories/Categories';
import Footer from '../../components/Home/Footer/Footer';
import Navbar from '../../components/Home/Navbar/Navbar';
import Categories from '../../components/Home/ProductsDrawer/Categories/Categories';
import ProductsDrawer from '../../components/Home/ProductsDrawer/ProductsDrawer';
import Topbar from '../../components/Home/ProductsDrawer/Topbar';

const ProductsLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <ProductsDrawer></ProductsDrawer>
            <Footer></Footer>
            {/* <ProductsDrawer></ProductsDrawer> */}
        </div>
    );
};

export default ProductsLayout;