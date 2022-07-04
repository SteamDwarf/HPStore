import './cart-btn.style.scss';
import cartImg from '../../../assets/cart-icon/0205994a7ba1bb2e03648f593d2cdf11-gold-coins-pot.png';
import { useDispatch, useSelector } from 'react-redux';
import { getCartDropdownState, getCartProductsAmount } from '../../../redux/cart/cart.selector';
import { toggleCartDropdown } from '../../../redux/cart/cart.slice';

const CartBtn = () => {
    const dispatch = useDispatch();
    const cartProductsAmount = useSelector(getCartProductsAmount);
    const isCartDropdownOpen = useSelector(getCartDropdownState);

    const toggleCartDropdownHandler = () => {
        dispatch(toggleCartDropdown(!isCartDropdownOpen));
    }

    return (
        <div className='cart-btn' onClick={toggleCartDropdownHandler}>
            <img className='cart-btn_logo' src={cartImg} alt="" />
            <span className='cart-items-count'>{cartProductsAmount}</span>
        </div>
    );
};

export default CartBtn;