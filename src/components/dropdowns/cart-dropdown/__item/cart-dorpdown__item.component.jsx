import './cart-dropdown__item.style.scss';

const CartItem = ({product}) => {
    return (
        <div className='cart-dropdown__item'>
            <img className='cart-dropdown__item-image' src={product.imageSrc} alt={product.name} />
            <div className='cart-dropdown__item-info'>
                <span className='cart-dropdown__item-title'>{product.title}</span>
                <span className='cart-dropdown__item-price'>{product.amount}x {product.price}P</span>
            </div>
        </div>
    );
};

export default CartItem;