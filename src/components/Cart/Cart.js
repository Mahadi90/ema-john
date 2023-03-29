import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    
   let totalPrice = 0;
   let totalShipping = 0;
   let quantity = 0;
   for(const product of cart){
    
    product.quantity = product.quantity || 1;

    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
   }
   const tax = totalPrice * 5 / 100;
   const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div>
            <h2 className='text-center text-2xl mt-4 font-bold'>Order Summary</h2>
                <p className='text-lg mt-4'>Selected Items: {cart.length}</p>

                <p className='text-lg mt-4'>Total price: ${totalPrice}</p>

                <p className='text-lg mt-4'>Total Shipping: ${totalShipping}</p>

                <p className='text-lg mt-4'>Tax: ${tax}</p>

                <h3 className='text-lg mt-4 font-bold text-2xl'>Grand Total: ${grandTotal}</h3>

                <button className='btn bg-red-600 border-0 mt-4 w-full mx-4 hover:bg-red-800'>Clear Cart</button> <br />

                <button className='btn bg-green-600 border-0 mt-4 w-full mx-4 hover:bg-green-800'>Review Order</button>
        </div>
    );
};

export default Cart;