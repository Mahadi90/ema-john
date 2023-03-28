import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    
   let total = 0;
   for(const product of cart){
    total = total + product.price;
   }

    return (
        <div>
            <h2 className='text-center text-2xl mt-4 font-bold'>Order Summary</h2>
                <p className='text-lg mt-2'>Selected Items: {cart.length}</p>
                <p className='text-lg mt-2'>Total price: ${total}</p>
                <p className='text-lg mt-2'>Tax: </p>
                <p className='text-lg mt-2'>Grand Total:</p>
                <button className='btn bg-red-600 border-0 mt-4 w-full mx-4 hover:bg-red-800'>Clear Cart</button> <br />
                <button className='btn bg-green-600 border-0 mt-4 w-full mx-4 hover:bg-green-800'>Review Order</button>
        </div>
    );
};

export default Cart;