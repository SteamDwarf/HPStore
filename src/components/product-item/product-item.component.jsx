import { Link } from 'react-router-dom';
import AddToCartBtn from '../btns/add-to-cart-btn/add-to-cart-btn.component';
import './product-item.style.scss';


const ProductItem = ({productItem}) => {
    const {name, title, price, imageSrc} = productItem;

    return (
        <div className='product-item'>
            <Link to={name} className='product-link'><img className='product-item_img' src={imageSrc} alt={name} /></Link>
            <div className='product-item_data-block'>
                <h5 className='product-item_title'>{title}</h5>
                <h5 className='product-item_price'>{price} Р</h5>
                <AddToCartBtn className='add-to-cart-btn' productItem={productItem}/>
            </div>
        </div>
    );
};

export default ProductItem;