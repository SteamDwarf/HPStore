import PageContainer from '../../components/page-container/page-container.component';
import PurchasesHeader from '../../components/purchases/purchases__header/purchases__header.component';
import './purchases.style.scss';
import PurchasesBody from '../../components/purchases/purchases__body/purchases__body.component';
import PurchasesTotal from '../../components/purchases/purchases__total/purchases__total.component';
import { useDispatch } from 'react-redux';
import PurchasesMessage from '../../components/purchases/purchases__message/purchases__message.component';
import { useEffect } from 'react';
import useWindowDimension from '../../utils/hooks/useWindowDemension';
import { setConfirmationWait } from '../../redux/cart/cart.slice';

const Purchases = () => {
    const dispatch = useDispatch()
    const {width} = useWindowDimension();

    useEffect(() => {dispatch(setConfirmationWait(false))}, []);
    
    return (
        <PageContainer title='Покупки' className='purchases'>
            {width > 1100 ? <PurchasesHeader /> : null}
            <PurchasesBody />
            <PurchasesTotal />
            <PurchasesMessage />
        </PageContainer>
    );
};

export default Purchases;