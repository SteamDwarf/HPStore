import './cart-btn.style.scss';
import cartImg from '../../../assets/cart-icon/0205994a7ba1bb2e03648f593d2cdf11-gold-coins-pot.png';
import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/products.context';

const CartBtn = () => {
    const {isCartDropdownOpen, setCartDropdownOpen, cartProductsAmount} = useContext(ProductsContext);

    const toggleCartDropdown = () => {
        setCartDropdownOpen(!isCartDropdownOpen);
    }

    return (
        <div className='cart-btn' onClick={toggleCartDropdown}>
            <img className='cart-btn_logo' src={cartImg} alt="" />
            <span className='cart-items-count'>{cartProductsAmount}</span>
        </div>
    );
};

export default CartBtn;