import { useSelector } from 'react-redux/es/exports';
import CartItem from './__item/cart-dorpdown__item.component';
import LinkedButton from '../../../UI/buttons/linked-button/linked-button.component';
import './cart-dropdown.style.scss';
import { getCartProducts } from '../../../redux/cart/cart.selector';
import Dropdown from '../../../UI/dropdown/dropdown.component';
import { Fragment } from 'react';


const CartDropdown = () => {
    const cartProducts = useSelector(getCartProducts);

    return (
        <Dropdown className='cart-dropdown'>
            {
                cartProducts.length > 0
                ? (
                    <Fragment>
                        <div className='cart-dropdown__item-handler'>
                            {cartProducts.map(product => <CartItem key={product.id} product={product}/>)}
                        </div>
                        <LinkedButton url='/purchases'>Оформить покупку</LinkedButton>
                    </Fragment>
                )
                : (
                    <div className='cart-dropdown__item-handler'>
                        <h4 className='empty-cart-title'>Ваша корзина пуста</h4>
                    </div>
                )
            }
        </Dropdown>
    );
};

export default CartDropdown;