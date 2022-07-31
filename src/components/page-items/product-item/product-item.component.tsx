import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../../../redux/api/app.api';
import AddToCartBtn from '../../btns/add-to-cart-btn/add-to-cart-btn.component';
import './product-item.style.scss';

interface IProductItemProps {
    productItem: IProduct;
}

const ProductItem:FC<IProductItemProps> = ({productItem}) => {
    const {name, title, price, imageSrc} = productItem;

    return (
        <div className='product-item'>
            <Link to={name} className='product-item__link'>
                <img className='product-item__img' src={imageSrc} alt={name} />
            </Link>
            <div className='product-item__data'>
                <div className="product-item__data-text">
                    <h5 className='product-item__title'>{title}</h5>
                    <h4 className='product-item__price'>{price} &#8381;</h4>
                </div>
                <AddToCartBtn className='product-item__add-to-cart-btn' productItem={productItem}/>
            </div>
        </div>
    );
};

export default ProductItem;