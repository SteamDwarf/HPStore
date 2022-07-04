import { useDispatch} from 'react-redux/es/exports';
import './purchases-item.style.scss';
import useWindowDimension from '../../../utils/hooks/useWindowDemension';
import { decrementProductAmount, deleteProduct, incrementProductAmount } from '../../../redux/cart/cart.slice';

const PurchasesItem = ({item}) => {
    const dispatch = useDispatch();
    const {width} = useWindowDimension();

    const decrementProductAmountHandler = () => {
        dispatch(decrementProductAmount(item));
       
    }
    const incrementProductAmountHandler = () => {
        dispatch(incrementProductAmount(item));
    }
    const deleteProductHandler = () => {
        dispatch(deleteProduct(item));
    }

    if(width < 1100) {
        return (
            <div className="purchases-item compact">
                <img className="purchases-item_image" src={item.imageSrc} alt={item.name} />
                <div className='purchases-item_information'>
                    <span className="purchases-item_title">{item.title}</span>
                    <h3 className="purchases-item_price">{item.price} &#8381;</h3>
                    <span className="purchases-item_amount">
                        <span className="purchases-item_amount-btn purchases-item_interactive" onClick={decrementProductAmountHandler}>-</span>
                        <span>{item.amount}</span>
                        <span className="purchases-item_amount-btn purchases-item_interactive" onClick={incrementProductAmountHandler}>+</span>
                    </span>
                    <span className="purchases-item_delete purchases-item_interactive" onClick={deleteProductHandler}>&#10006;</span>
                </div>
            </div>
        );
    }

    return (
        <div className="purchases-item">
            <img className="purchases-item_image" src={item.imageSrc} alt={item.name} />
            <span className="purchases-item_title">{item.title}</span>
            <span className="purchases-item_amount">
                <span className="purchases-item_amount-btn purchases-item_interactive" onClick={decrementProductAmountHandler}>-</span>
                <span>{item.amount}</span>
                <span className="purchases-item_amount-btn purchases-item_interactive" onClick={incrementProductAmountHandler}>+</span>
            </span>
            <span className="purchases-item_price">{item.price} &#8381;</span>
            <span className="purchases-item_delete purchases-item_interactive" onClick={deleteProductHandler}>&#10006;</span>
        </div>
    )

    
};

export default PurchasesItem;