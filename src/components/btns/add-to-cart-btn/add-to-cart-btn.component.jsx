import { useDispatch, useSelector } from 'react-redux';
import { getCartProps } from '../../../redux/cart/cart.selector';
import { incrementProductAmount } from '../../../redux/cart/cart.slice';
import Button from '../../../UI/buttons/button/button.component';
import './add-to-cart-btn.style.scss';

const AddToCartBtn = ({productItem, className}) => {
    const dispatch = useDispatch();

    const addProductToCartHandler = () => {
        dispatch(incrementProductAmount(productItem));
    }

    return(
        <Button className={className} onClick={addProductToCartHandler}>Добавить в корзину</Button>
    );
}

export default AddToCartBtn;