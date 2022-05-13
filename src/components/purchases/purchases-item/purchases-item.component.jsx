import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getCartProps } from '../../../redux/products/products.selectors';
import './purchases-item.style.scss';
import { decrementProductAmountDispatch, deleteProductDispatch, incrementProductAmountDispatch } from '../../../redux/products/products.utils';
import { updateCartAction } from '../../../redux/products/products.actions';

const PurchasesItem = ({item}) => {
    const cartProps = useSelector(getCartProps);
    const dispatch = useDispatch();

    const decrementProductAmount = () => {
        const newCartProps = decrementProductAmountDispatch({...cartProps, product: item});
        dispatch(updateCartAction(newCartProps));
    }
    const incrementProductAmount = () => {
        const newCartProps = incrementProductAmountDispatch({...cartProps, product: item});
        dispatch(updateCartAction(newCartProps));
    }
    const deleteProductHandler = () => {
        const newCartProps = deleteProductDispatch({...cartProps, product: item});
        dispatch(updateCartAction(newCartProps));
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
            <span className="purchases-item_price">{item.price}</span>
            <span className="purchases-item_delete purchases-item_interactive" onClick={deleteProductHandler}>&#10006;</span>
        </div>
    );
};

export default PurchasesItem;