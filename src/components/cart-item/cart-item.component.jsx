import './cart-item.style.scss';

const CartItem = ({product}) => {
    return (
        <div className='cart-item'>
            <img className='cart-item_image' src={product.imageSrc} alt={product.name} />
            <div className='cart-item_info-block'>
                <span className='cart-item_title'>{product.title}</span>
                <span className='cart-item_price'>{product.amount}x {product.price}P</span>
            </div>
        </div>
    );
};

export default CartItem;