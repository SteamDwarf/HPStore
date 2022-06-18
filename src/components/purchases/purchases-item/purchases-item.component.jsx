import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getCartProps } from '../../../redux/cart/cart.selector';
import './purchases-item.style.scss';
import { incrementCartProductAction, decrementCartProductAction, deleteCartProductAction } from '../../../redux/cart/cart.actions';

const PurchasesItem = ({item}) => {
    const cartProps = useSelector(getCartProps);
    const dispatch = useDispatch();

    const decrementProductAmount = () => {
        dispatch(decrementCartProductAction(cartProps, item));
    }
    const incrementProductAmount = () => {
        dispatch(incrementCartProductAction(cartProps, item));
    }
    const deleteProductHandler = () => {
        dispatch(deleteCartProductAction(cartProps, item));
    }

    return (
        <div className="purchases-item">
            <img className="purchases-item_image" src={item.imageSrc} alt={item.name} />
            <span className="purchases-item_title">{item.title}</span>
            <span className="purchases-item_amount">
                <span className="purchases-item_amount-btn purchases-item_interactive" onClick={decrementProductAmount}>-</span>
                <span>{item.amount}</span>
                <span className="purchases-item_amount-btn purchases-item_interactive" onClick={incrementProductAmount}>+</span>
            </span>
            <span className="purchases-item_price">{item.price} &#8381;</span>
            <span className="purchases-item_delete purchases-item_interactive" onClick={deleteProductHandler}>&#10006;</span>
        </div>
    );
};

export default PurchasesItem;