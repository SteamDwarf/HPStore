import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/products.context';
import PurchasesItem from '../purchases-item/purchases-item.component';
import './purchases-body.style.scss';

const PurchasesBody = () => {
    const {cartProducts} = useContext(ProductsContext);

    return (
        <div className='purchases-table_body'>
            {cartProducts.map(product => {
                return <PurchasesItem key={product.id} item={product}/>
            })}
        </div>
    );
};

export default PurchasesBody;