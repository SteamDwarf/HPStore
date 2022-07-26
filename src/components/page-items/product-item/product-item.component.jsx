import { Link } from 'react-router-dom';
import AddToCartBtn from '../../btns/add-to-cart-btn/add-to-cart-btn.component';
import './product-item.style.scss';


const ProductItem = ({productItem}) => {
    const {name, title, price, imageSrc} = productItem;

    return (
        <div className='product-item'>
            <Link to={name} className='product-item__link'>
                <img className='product-item__img' src={imageSrc} alt={name} />
            </Link>
            <div className='product-item__data'>
                <h3 className='product-item__price'>{price} Р</h3>
                <h5 className='product-item__title'>{title}</h5>
                <AddToCartBtn className='product-item__add-to-cart-btn' productItem={productItem}/>
            </div>
        </div>
    );
};

export default ProductItem;