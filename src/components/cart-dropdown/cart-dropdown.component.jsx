import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import CartItem from '../cart-item/cart-item.component';
import LinkedButton from '../linked-button/linked-button.component';
import './cart-dropdown.style.scss';

const CartDropdown = () => {
    const {cartProducts} = useContext(ProductsContext);

    return (
        <div className='cart-dropdown'>
            <div className='cart-dropdown_container'>
                {
                    cartProducts.length > 0
                    ? cartProducts.map(product => <CartItem key={product.id} product={product}/>)
                    : <h3 className='empty-cart-title'>У вас нет выбранных товаров</h3>
                }
            </div>
            <LinkedButton url='/' text='Оформить покупку'/>
        </div>
    );
};

export default CartDropdown;