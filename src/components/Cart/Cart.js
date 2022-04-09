import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        total = total + product.price*product.quantity;
        shipping = shipping + product.shipping;
        quantity= quantity+product.quantity;
    }

    const tax = parseFloat((total * 0.1).toFixed(2))
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Total Orders: {quantity} </p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping:  ${shipping}</p>
            <p>Tax: ${tax} </p>
            <h3>Grand Total: ${grandTotal.toFixed(2)} </h3>
        </div>
    );
};

export default Cart;