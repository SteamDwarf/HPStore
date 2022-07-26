import { useSelector } from 'react-redux/es/exports';
import { getCartProps } from '../../../redux/cart/cart.selector';
import PurchasesItem from '../purchases__item/purchases__item.component';
import './purchases__body.style.scss';

const PurchasesBody = () => {
    const {cartProducts} = useSelector(getCartProps)

    return (
        <div className='purchases__body'>
            {cartProducts.map(product => {
                return <PurchasesItem key={product.id} item={product}/>
            })}
        </div>
    );
};

export default PurchasesBody;