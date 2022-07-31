import './add-to-cart-btn.style.scss';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { incrementProductAmount } from '../../../redux/cart/cart.slice';
import Button from '../../../UI/buttons/button/button.component';
import { AppDispatch } from '../../../redux/store';
import { IProduct } from '../../../redux/api/app.api';

interface IAddToCartBtnProps {
    productItem: IProduct;
    className: string;
}

const AddToCartBtn: FC<IAddToCartBtnProps> = ({productItem, className}) => {
    const dispatch = useDispatch<AppDispatch>();

    const addProductToCartHandler = () => {
        dispatch(incrementProductAmount(productItem));
    }

    return(
        <Button type='button' className={className} onClick={addProductToCartHandler}>Добавить в корзину</Button>
    );
}

export default AddToCartBtn;