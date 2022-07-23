import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
// import pic from '../../images/giphy.gif';
import '../Products/Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    
    const handleAddToCart = (product) => {
        console.log(product);
        const newItem = [...item, product];
        setItem(newItem);
    }

    return (
        <div className='products_main_area'>
            <div className='products_main_text_area'>
                <div className='left_cart_area'>
                    <div className='left_send_cart'>
                        {
                            products.map(product => <Cart
                                key = {product.id}
                                product = {product}
                                handleAddToCart = {handleAddToCart}

                            ></Cart>)
                        }
                    </div>
                    
                </div>
                <div className='right_summery_area'>
                    <h1>Order Summary</h1>
                    <p>Selected Items: {item.length}</p>
                    <p>Total Price: $1140</p>
                    <p>Total Shipping Charge: $5</p>
                    <p>Tax: $114</p>
                    <p>Grand Total: $1559</p>
                    <button>Clear Cart</button>
                    <button>Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Products;