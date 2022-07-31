import './home.style.scss';
import PageContainer from '../../components/page-container/page-container.component';
import ItemHolder from '../../components/page-container/__item-holder/page-container__item-holder.component';
import { useFetchNewsQuery } from '../../redux/api/app.api';
import { PageContaierItems } from '../../typescript/enums';

const Home = () => {
    const {data, isLoading, error} = useFetchNewsQuery();
    
    return (
        <PageContainer title='Новости' isFetching={isLoading} error={error}>
            <ItemHolder itemsType={PageContaierItems.NEWS_ITEM} items={data ? [...data].reverse() : []}/>
        </PageContainer>
    );
}

export default Home;