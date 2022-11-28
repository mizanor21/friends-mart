import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import CartProduct from '../ProductsDrawer/CartProduct/CartProduct';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [product, setProduct] = useState('');
    const url = `http://localhost:5000/addcart?email=${user?.email}`;
    // console.log(url);
    const { data: addcart } = useQuery({
        queryKey: ['addcart', user?.email],
        queryFn: () =>
            fetch(url)
                .then(res => res.json())
    })
    // console.log(product.img)
    const navItem = <>
        {/* <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><Link to={'/about'}>About Us</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li> */}
        {
            user ? <li><Link to={'/'}>Log Out</Link></li> : <li><Link to={'/Log in'}>Log in</Link></li>
        }
    </>


    return (
        <div className='bg-yellow-400 '>
            {
                // addcart?.length && addcart?.map((product) => product = { product } setProduct = { setProduct })
                // addcart.map(product => <CartProduct key={product._id} product={product} setProduct={setProduct}></CartProduct>)
            }
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">Friends Mart</Link>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <CartProduct></CartProduct>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.img} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;