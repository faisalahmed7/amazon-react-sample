
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = ({handleCart,product}) => {
    const{name,seller,img,price,ratings}=product
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className="product-info">
            <p className='product-name'> {name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings} stars</small></p>
            </div>
           
                <button onClick={()=>handleCart(product)} className='btn-cart'>
                    <p className='btn-text'>Add To Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            
        </div>
    );
};

export default Product;