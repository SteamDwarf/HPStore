import './purchases__item.style.scss';
import { useDispatch} from 'react-redux/es/exports';
import useWindowDimension from '../../../utils/hooks/useWindowDemension';
import { decrementProductAmount, deleteProduct, ICartProduct, incrementProductAmount } from '../../../redux/cart/cart.slice';
import Button from '../../../UI/buttons/button/button.component';
import { AppDispatch } from '../../../redux/store';
import { FC } from 'react';

interface IPurchasesItemProps {
    item: ICartProduct;
}

const PurchasesItem:FC<IPurchasesItemProps> = ({item}) => {
    const dispatch = useDispatch<AppDispatch>();
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
            <div className="purchases__item compact">
                <img className="purchases__item-image" src={item.imageSrc} alt={item.name} />
                <div className='purchases__item-information'>
                    <span className="purchases__item-title">{item.title}</span>
                    <h3 className="purchases__item-price">{item.price} &#8381;</h3>
                    <span className="purchases__item-amount">
                        <span className="purchases__item-amount-btn purchases__item-interactive" onClick={decrementProductAmountHandler}>-</span>
                        <span>{item.amount}</span>
                        <span className="purchases__item-amount-btn purchases__item-interactive" onClick={incrementProductAmountHandler}>+</span>
                    </span>
                    <Button className="purchases__item-delete" onClick={deleteProductHandler}>Удалить</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="purchases__item">
            <img className="purchases__item-image" src={item.imageSrc} alt={item.name} />
            <span className="purchases__item-title">{item.title}</span>
            <span className="purchases__item-amount">
                <span className="purchases__item-amount-btn purchases__item-interactive" onClick={decrementProductAmountHandler}>-</span>
                <span>{item.amount}</span>
                <span className="purchases__item-amount-btn purchases__item-interactive" onClick={incrementProductAmountHandler}>+</span>
            </span>
            <span className="purchases__item-price">{item.price} &#8381;</span>
            <span className="purchases__item-delete purchases__item-interactive" onClick={deleteProductHandler}>&#10006;</span>
        </div>
    )

    
};

export default PurchasesItem;