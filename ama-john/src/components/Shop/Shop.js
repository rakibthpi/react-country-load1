import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);
    // useEffect(() => {
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => console.log("Hello, Rakib Hosen"))
    // },[]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[]);

    const dataSend = (product) =>{
        console.log(product);

        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div>
            <div className="shop_main_area">
                <div className="shop_main_text_area">
                    <div className="shop_left_area">
                            {
                                products.map(product => <Products 
                                    key = {product.id}
                                    product = {product}
                                    dataSend = {dataSend}
                                ></Products>)
                            }
                    </div>
                    <div className="shop_right_area">
                        <h4>Order Summary</h4>
                        <div className='order_summary_area'>
                            <p>Selected Items: {cart.length}</p>
                            <p>Total Price: $1140</p>
                            <p>Total Shipping Charge: $5</p>
                            <p>Tax: $114</p>
                            <h4>Grand Total: $1559</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;