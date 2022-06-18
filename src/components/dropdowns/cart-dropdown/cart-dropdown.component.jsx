import { useSelector } from 'react-redux/es/exports';
import CartItem from '../../cart-item/cart-item.component';
import LinkedButton from '../../btns/linked-button/linked-button.component';
import './cart-dropdown.style.scss';
import { getCartProducts } from '../../../redux/cart/cart.selector';
import Dropdown from '../dropdown/dropdown.component';


const CartDropdown = () => {
    const cartProducts = useSelector(getCartProducts)   

    if(cartProducts.length > 0) {
        return (
            <Dropdown>
                <div className='cart-dropdown_container'>
                    {cartProducts.map(product => <CartItem key={product.id} product={product}/>)}
                </div>
                <LinkedButton url='/purchases' text='Оформить покупку'/>
            </Dropdown>
        );
    } else {
        return (
            <Dropdown>
                <div className='cart-dropdown_container'>
                    <h4 className='empty-cart-title'>Ваша корзина пуста</h4>
                </div>
            </Dropdown>
        );
    }
};

export default CartDropdown;