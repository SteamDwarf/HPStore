import './cart-btn.style.scss';
import cartImg from '../../assets/cart-icon/0205994a7ba1bb2e03648f593d2cdf11-gold-coins-pot.png';

const CartBtn = () => {
    return (
        <div className='cart-btn'>
            <img className='cart-btn_logo' src={cartImg} alt="" />
            <span className='cart-items-count'>0</span>
        </div>
    );
};

export default CartBtn;