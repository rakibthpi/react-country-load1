import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    const {name,price,ratings,seller} = props.product;
    
    return (
        <div className='cart_main_single'>
            <img src={props.product.img} alt="photos" />
            <div className='cart_text_area'>
                <h2>{name}</h2>
                <h3>Price: {price} </h3>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} start</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)}>Add to Cart</button>
        </div>
    );
};

export default Cart;