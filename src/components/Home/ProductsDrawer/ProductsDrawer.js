import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ProductsDrawer = ({ category }) => {
    console.log(category)
    return (
        <div>
            <div className="drawer drawer-mobile ">
                <input id="products-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="products-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <div className="flex items-center">
                            <label className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <h1 className='text-xl font-bold'>My markets</h1>
                        </div>
                        <hr />
                        <h3 className='text-xl font-bold mt-5'>Devices</h3>
                        <li><Link to={'/categories/computers'}>Computer Products</Link></li>
                        <li><Link to={'/categories/mobiles'}>Mobile Phones</Link></li>
                        <li><Link to={'/categories/ipads'}>iPad Products</Link></li>
                        <li><Link to={'/categories/printers'}>Printer Products</Link></li>

                        <h3 className='text-xl font-bold mt-5'>Fashions</h3>
                        <li><Link to={'/categories/mens'}>Men's Collections</Link></li>
                        <li><Link to={'/categories/women'}>Woman's Collections</Link></li>
                        <li><Link to={'/categories/children'}>Children's Collections</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default ProductsDrawer;