import './cart-btn.style.scss';
import cartImg from '../../../assets/cart-icon/0205994a7ba1bb2e03648f593d2cdf11-gold-coins-pot.png';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProductsAmount} from '../../../redux/products/products.selectors';
import { toggleCartDropdownAction } from '../../../redux/products/products.actions';

const CartBtn = () => {
    const dispatch = useDispatch();
    const cartProductsAmount = useSelector(getCartProductsAmount);

    const toggleCartDropdownHandler = () => {
        dispatch(toggleCartDropdownAction());
    }

    return (
        <div className='cart-btn' onClick={toggleCartDropdownHandler}>
            <img className='cart-btn_logo' src={cartImg} alt="" />
            <span className='cart-items-count'>{cartProductsAmount}</span>
        </div>
    );
};

export default CartBtn;