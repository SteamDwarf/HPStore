import PageContainer from '../../components/page-container/page-container.component';
import PurchasesHeader from '../../components/purchases/purchases-header/purchases-header.component';
import './purchases.style.scss';
import PurchasesBody from '../../components/purchases/purchases-body/purchases-body.component';
import PurchasesTotal from '../../components/purchases/purchases-total/purchases-total.component';
import { useDispatch } from 'react-redux';
import PurchasesMessage from '../../components/purchases/purchases-message/purchases-message.component';
import { useEffect } from 'react';
import useWindowDimension from '../../utils/hooks/useWindowDemension';
import { setConfirmationWait } from '../../redux/cart/cart.slice';

const Purchases = () => {
    const dispatch = useDispatch()
    const {width} = useWindowDimension();

    useEffect(() => {dispatch(setConfirmationWait(false))}, []);
    
    return (
        <PageContainer title='Покупки' className='purchases-container'>
            {width > 1100 ? <PurchasesHeader /> : null}
            <PurchasesBody />
            <PurchasesTotal />
            <PurchasesMessage />
        </PageContainer>
    );
};

export default Purchases;