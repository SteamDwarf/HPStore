import { useDispatch, useSelector } from 'react-redux';
import { getCartProps } from '../../../redux/cart/cart.selector';
import { incrementProductAmount } from '../../../redux/cart/cart.slice';
import './add-to-cart-btn.style.scss';

const AddToCartBtn = ({productItem, className}) => {
    const dispatch = useDispatch();

    const addProductToCartHandler = () => {
        dispatch(incrementProductAmount(productItem));
    }

    return(
        <button className={className} onClick={addProductToCartHandler}>Добавить в корзину</button>
    );
}

export default AddToCartBtn;