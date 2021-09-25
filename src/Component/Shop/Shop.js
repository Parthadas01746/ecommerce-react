import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    const handleToCart = (product)=>{
        console.log(product)
        
        const newCart = [...cart,product]
        setCart(newCart)
       
    }
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON")
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])

    return (
        <div className='product-container' >
          <div className="product-details">
              <h1>products found:{products.length}</h1>
              {
                  products.map(product => <Product handleToCart={handleToCart} product={product}></Product>)
              }
              </div>  
              <div className="cart-continer">
                <h1>order summary</h1>
                <h2>product ordered:{cart.length}</h2>
               
              </div>
        </div>
    );
};

export default Shop;