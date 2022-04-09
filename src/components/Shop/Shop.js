
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Product from '../../Product/Product';
import { addToDb} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import './Shop.css'
const Shop = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)


    

    const handleCart = (product) => {

        let newCart = []
        const exist = cart.find(pd => pd.id === product.id)
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            const rest=cart.filter(pd=> pd.id!== product.id)
            exist.quantity=exist.quantity+1;
            newCart=[...rest, exist]
        }


        setCart(newCart)
        addToDb(product.id)

    }
    return (
        <div className='container'>
            <div className="products-container">

                {
                    products.map(product => <Product key={product.id} product={product} handleCart={handleCart}></Product>)
                }

            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;