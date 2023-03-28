import React from 'react';

const Product = (props) => {
    // console.log(props.product)
    const {name, price, img, seller, ratings} = props.product;
    const addToCraft = props.addToCraft; 
    return (
        <div>
          
          <div className="card w-full h-[550px]  border-2">

  <figure><img className="h-50 w-full" src={img} alt="product" /></figure>
  <div className="ml-2 mt-4">

    <h2 className="text-lg font-bold">{name}</h2>
     <p className='font-bold text-md mt-2'>Price: ${price}</p>

    <div className='mt-12'>
        <p>Manufactured: {seller}</p>
        <p>Ratings: {ratings} star</p>
    </div>
    </div>
    <button onClick={() => addToCraft(props.product)} className='flex justify-center bg-orange-300 py-4 w-full border-t-2 mt-4 rounded-b-lg font-bold hover:bg-orange-500'>Add to Cart<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg></button>


</div>

        </div>
    );
};

export default Product;