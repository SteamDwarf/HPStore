import PageContainer from '../../components/page-container/page-container.component.jsx';
import ItemHolder from '../../components/page-container/__item-holder/page-container__item-holder.component.jsx';
import { useFetchNewsQuery } from '../../redux/api/app.api';
import { CONTAINER_TYPES } from '../../utils/types.js';
import './home.style.scss';

const Home = () => {
    const {data, isLoading, error} = useFetchNewsQuery();
    
    return (
        <PageContainer title='Новости' isFetching={isLoading} error={error}>
            <ItemHolder itemsType={CONTAINER_TYPES.NEWS_ITEM} items={data ? [...data].reverse() : []}/>
        </PageContainer>
    );
}

export default Home;