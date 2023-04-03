import React from 'react';
import './Product.css';

const Product = ({product}) => {
    const {img,name,price,seller,ratings}=product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-ingo'>
            <h6 className='product-name'>{name}</h6>
            <p>Price:${price}</p>
            <p>Manufectarar:{seller}</p>
            <p>Rating:{ratings} Star</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;