import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start ">
                    <Link to={'/'}><button className='btn btn-accent text-xl md:text-3xl font-bold text-gray-500'>Friends Mart</button></Link>
                </div>
                <div className="navbar-end lg:hidden">
                    <div className="dropdown">
                        <label htmlFor="products-drawer" tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;