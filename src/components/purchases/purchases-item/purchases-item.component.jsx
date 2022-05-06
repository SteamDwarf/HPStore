import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/products.context';
import { DECREMENTING_ITEM, INCREMENTING_ITEM } from '../../../utils/types';
import './purchases-item.style.scss';

const PurchasesItem = ({item}) => {
    const {changeCartProductAmount, deleteProduct} = useContext(ProductsContext);

    const decrementProductAmount = () => {
        changeCartProductAmount(item.id, DECREMENTING_ITEM);
    }
    const incrementProductAmount = () => {
        changeCartProductAmount(item.id, INCREMENTING_ITEM);
    }
    const deleteProductHandler = () => {
        deleteProduct(item);
    }

    return (
        <div className="purchases-item">
            <img className="purchases-item_image" src={item.imageSrc} alt={item.name} />
            <span className="purchases-item_title">{item.title}</span>
            <span className="purchases-item_amount">
                <span className="purchases-item_amount-btn purchases-item_interactive" onClick={decrementProductAmount}>-</span>
                <span>{item.amount}</span>
                <span className="purchases-item_amount-btn purchases-item_interactive" onClick={incrementProductAmount}>+</span>
            </span>
            <span className="purchases-item_price">{item.price}</span>
            <span className="purchases-item_delete purchases-item_interactive" onClick={deleteProductHandler}>&#10006;</span>
        </div>
    );
};

export default PurchasesItem;