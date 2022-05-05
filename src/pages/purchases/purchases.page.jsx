import PageContainer from '../../components/page-container/page-container.component';
import PurchasesHeader from '../../components/purchases/purchases-header/purchases-header.component';
import './purchases.style.scss';
import PurchasesBody from '../../components/purchases/purchases-body/purchases-body.component';
import PurchasesTotal from '../../components/purchases/purchases-total/purchases-total.component';

const Purchases = () => {

    return (
        <PageContainer title='Покупки'>
            <PurchasesHeader />
            <PurchasesBody />
            <PurchasesTotal />
        </PageContainer>
    );
};

export default Purchases;