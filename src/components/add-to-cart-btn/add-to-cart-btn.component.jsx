import './add-to-cart-btn.style.scss';

const AddToCartBtn = ({onClick}) => {
    return(
        <button className='add-to-cart-btn' onClick={onClick}>Добавить в "котелок"</button>
    );
}

export default AddToCartBtn;