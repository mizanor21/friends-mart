import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/img/ipad.webp';
import img2 from '../../../assets/img/laptop.webp'
import img3 from '../../../assets/img/phn.webp'
import img4 from '../../../assets/img/printer.webp'
import img5 from '../../../assets/img/watchsmart.webp'

const Categories = () => {
    const icon = '>';
    return (
        <div className='max-w-[1200px] container mx-auto  my-10'>
            <h2 className='text-2xl font-bold text-gray-500'>Categories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 my-5">
                <Link to={''} className="flex bg-slate-100 shadow-xl p-5 rounded-xl">
                    <div className="w-1/2">
                        <img className='' src={img1} alt="img not found" />
                    </div>
                    <div className="w-1/2">
                        <h2 className='text-xl text-gray-600'>CATCH BIG <strong>DEALS</strong> ON THE ipad</h2> <br />
                        <button className='hover:font-bold'>Shop now {icon}</button>
                    </div>
                </Link>
                <Link to={''} className="flex bg-slate-100 shadow-xl p-5 rounded-xl">
                    <div className="w-1/2">
                        <img className='' src={img2} alt="img not found" />
                    </div>
                    <div className="w-1/2">
                        <h2 className='text-xl text-gray-600'>CATCH BIG <strong>DEALS</strong> ON THE Laptop</h2> <br />
                        <button className='hover:font-bold'>Shop now {icon}</button>
                    </div>
                </Link>
                <Link to={''} className="flex bg-slate-100 shadow-xl p-5 rounded-xl">
                    <div className="w-1/2">
                        <img className='' src={img3} alt="img not found" />
                    </div>
                    <div className="w-1/2">
                        <h2 className='text-xl text-gray-600'>CATCH BIG <strong>DEALS</strong> ON THE Mobile</h2> <br />
                        <button className='hover:font-bold'>Shop now {icon}</button>
                    </div>
                </Link>
                <Link to={''} className="flex bg-slate-100 shadow-xl p-5 rounded-xl">
                    <div className="w-1/2">
                        <img className='' src={img4} alt="img not found" />
                    </div>
                    <div className="w-1/2">
                        <h2 className='text-xl text-gray-600'>CATCH BIG <strong>DEALS</strong> ON THE Printer</h2> <br />
                        <button className='hover:font-bold'>Shop now {icon}</button>
                    </div>
                </Link>
                <Link to={''} className="flex bg-slate-100 shadow-xl p-5 rounded-xl">
                    <div className="w-1/2">
                        <img className='' src={img5} alt="img not found" />
                    </div>
                    <div className="w-1/2">
                        <h2 className='text-xl text-gray-600'>CATCH BIG <strong>DEALS</strong> ON THE Printer</h2> <br />
                        <button className='hover:font-bold'>Shop now {icon}</button>
                    </div>
                </Link>
                <Link to={''} className="flex bg-slate-100 shadow-xl p-5 rounded-xl">
                    <div className="w-1/2">
                        <img className='' src={img3} alt="img not found" />
                    </div>
                    <div className="w-1/2">
                        <h2 className='text-xl text-gray-600'>CATCH BIG <strong>DEALS</strong> ON THE Mobile</h2> <br />
                        <button className='hover:font-bold'>Shop now {icon}</button>
                    </div>
                </Link>
                <Link to={''} className="flex bg-slate-100 shadow-xl p-5 rounded-xl">
                    <div className="w-1/2">
                        <img className='' src={img4} alt="img not found" />
                    </div>
                    <div className="w-1/2">
                        <h2 className='text-xl text-gray-600'>CATCH BIG <strong>DEALS</strong> ON THE Printer</h2> <br />
                        <button className='hover:font-bold'>Shop now {icon}</button>
                    </div>
                </Link>
                <Link to={''} className="flex bg-slate-100 shadow-xl p-5 rounded-xl">
                    <div className="w-1/2">
                        <img className='' src={img5} alt="img not found" />
                    </div>
                    <div className="w-1/2">
                        <h2 className='text-xl text-gray-600'>CATCH BIG <strong>DEALS</strong> ON THE Printer</h2> <br />
                        <button className='hover:font-bold'>Shop now {icon}</button>
                    </div>
                </Link>
                <Link to={''} className="flex bg-slate-100 shadow-xl p-5 rounded-xl">
                    <div className="w-1/2">
                        <img className='' src={img3} alt="img not found" />
                    </div>
                    <div className="w-1/2">
                        <h2 className='text-xl text-gray-600'>CATCH BIG <strong>DEALS</strong> ON THE Mobile</h2> <br />
                        <button className='hover:font-bold'>Shop now {icon}</button>
                    </div>
                </Link>
                <Link to={''} className="flex bg-slate-100 shadow-xl p-5 rounded-xl">
                    <div className="w-1/2">
                        <img className='' src={img4} alt="img not found" />
                    </div>
                    <div className="w-1/2">
                        <h2 className='text-xl text-gray-600'>CATCH BIG <strong>DEALS</strong> ON THE Printer</h2> <br />
                        <button className='hover:font-bold'>Shop now {icon}</button>
                    </div>
                </Link>
                <Link to={''} className="flex bg-slate-100 shadow-xl p-5 rounded-xl">
                    <div className="w-1/2">
                        <img className='' src={img5} alt="img not found" />
                    </div>
                    <div className="w-1/2">
                        <h2 className='text-xl text-gray-600'>CATCH BIG <strong>DEALS</strong> ON THE Printer</h2> <br />
                        <button className='hover:font-bold'>Shop now {icon}</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Categories;