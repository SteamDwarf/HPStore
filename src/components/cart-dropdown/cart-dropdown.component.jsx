import { useSelector } from 'react-redux/es/exports';
import CartItem from '../cart-item/cart-item.component';
import LinkedButton from '../btns/linked-button/linked-button.component';
import './cart-dropdown.style.scss';
import { getCartProducts } from '../../redux/cart/cart.selector';


const CartDropdown = () => {
    const cartProducts = useSelector(getCartProducts)   

    if(cartProducts.length > 0) {
        return (
            <div className='cart-dropdown'>
                <div className='cart-dropdown_container'>
                    {cartProducts.map(product => <CartItem key={product.id} product={product}/>)}
                </div>
                <LinkedButton url='/purchases' text='Оформить покупку'/>
            </div>
        );
    } else {
        return (
            <div className='cart-dropdown'>
                <div className='cart-dropdown_container'>
                    <h3 className='empty-cart-title'>У вас нет выбранных товаров</h3>
                </div>
            </div>
        );
    }
};

export default CartDropdown;