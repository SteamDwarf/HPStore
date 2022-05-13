import { useSelector } from 'react-redux/es/exports';
import { getCartProps } from '../../../redux/products/products.selectors';
import PurchasesItem from '../purchases-item/purchases-item.component';
import './purchases-body.style.scss';

const PurchasesBody = () => {
    const {cartProducts} = useSelector(getCartProps)

    return (
        <div className='purchases-table_body'>
            {cartProducts.map(product => {
                return <PurchasesItem key={product.id} item={product}/>
            })}
        </div>
    );
};

export default PurchasesBody;