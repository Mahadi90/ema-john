import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='w-full h-[80px] bg-slate-800 flex justify-between items-center px-20'>
            <img src={logo} alt="" />
            <div className='text-white'>
                <a className='px-6' href="/Shop">Shop</a>
                <a className='px-6' href="/Order Review">Order Review</a>
                <a className='px-6' href="/Inventory">Inventory</a>
                <a className='px-6' href="/Login">Login</a>
            </div>
        </div>
    );
};

export default Header;