import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
       fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`)
       .then(res => res.json())
       .then(data => setProducts(data))
    },[])

    const [cart, setCart] = useState([]);

    const addToCraft = (product) =>{
         const newCart = [...cart, product];
         setCart(newCart)
    }
    return (
        <div className='flex'>
            <div className="products w-[75%] mx-10 py-6 pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {
                products.map(product => <Product
                key = {product.id}
                product = {product}
                addToCraft = {addToCraft}
                ></Product>)
               }
            </div>
            <div className="cart w-[25%] bg-orange-300 h-[100vh] px-8">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;