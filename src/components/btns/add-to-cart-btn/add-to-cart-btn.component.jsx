import { useDispatch, useSelector } from 'react-redux';
import { incrementCartProductAction } from '../../../redux/cart/cart.actions';
import { getCartProps } from '../../../redux/cart/cart.selector';
import './add-to-cart-btn.style.scss';

const AddToCartBtn = ({productItem, className}) => {
    const dispatch = useDispatch();
    const cartProps = useSelector(getCartProps);

    const addProductToCartHandler = () => {
        dispatch(incrementCartProductAction(cartProps, productItem));
    }

    return(
        <button className={className} onClick={addProductToCartHandler}>Добавить в корзину</button>
    );
}

export default AddToCartBtn;