import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from "../../utilities/fakedb"

const Orders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products)

    const handleRemoveProduct = product => {
        const rest = cart.filter(item => item.id !== product.id)
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div className='container'>
            <div className="review-item-container">
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    ></Cart>
            </div>
        </div>
    );
};

export default Orders;