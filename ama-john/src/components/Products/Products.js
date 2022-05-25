import React from 'react';
import './Products.css';
import addToCart from '../../images/cart-plus.png';

const Products = (props) => {
    const {dataSend,product} = props; 
    const {seller,img,name,price,ratings} = product;
    
    return (
        <div className='product_card_item'>
            <img src={img} alt="photos" />
            <div className='product_single_text_area'>
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <p><span>Manufacturer : {seller}</span></p>
                <p><span>Rating : {ratings} start</span></p>
            </div>product
            <button onClick={() => dataSend(product)}>Add to Cart <img src={addToCart} alt="Photos" /></button>
        </div>
    );
};

export default Products;