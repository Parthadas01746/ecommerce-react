import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props)
    const {name,img,seller,stock,price} = props.product
    return (
        <div className='products'>
          <div className="product-img">
              <img src={img} alt="" />
              <div className="products-show">
                  <h1>{name}</h1>
                  <p>By-{seller}</p>
                  <h2>price:{price}</h2>
                  <p>only {stock} left in stock - order soon

</p>
                <button onClick={()=>props.handleToCart(props.product)} className='btn'>Add to cart</button>
              </div>
          </div>
        </div>
    );
};

export default Product;