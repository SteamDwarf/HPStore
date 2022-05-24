import { useSelector, useDispatch } from 'react-redux';
import { incrementCartProductAction} from '../../redux/products/products.actions';
import { getCartProps } from '../../redux/products/products.selectors';
import AddToCartBtn from '../btns/add-to-cart-btn/add-to-cart-btn.component';
import './product-item.style.scss';

const ProductItem = ({productItem}) => {
    const {name, title, price, imageSrc} = productItem;
    const cartProps = useSelector(getCartProps);
    const dispatch = useDispatch();

    const addProductToCartHandler = () => {
        dispatch(incrementCartProductAction(cartProps, productItem));
    }

    return (
        <div className='product-item'>
            <img className='product-item_img' src={imageSrc} alt={name} />
            <div className='product-item_data-block'>
                <h3 className='product-item_title'>{title}</h3>
                <h2 className='product-item_price'>{price} Р</h2>
                <AddToCartBtn onClick={addProductToCartHandler}/>
            </div>
        </div>
    );
};

export default ProductItem;