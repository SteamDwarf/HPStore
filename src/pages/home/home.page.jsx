import Container from '../../components/container/container.component.jsx';
import PageContainer from '../../components/page-container/page-container.component.jsx';
import { useFetchNewsQuery } from '../../redux/app.api.js';
import { CONTAINER_TYPES } from '../../utils/types.js';
import './home.style.scss';

const Home = () => {
    const {data, isLoading, error} = useFetchNewsQuery();

    return (
        <PageContainer title='Новости' isFetching={isLoading} error={error}>
            <Container itemsType={CONTAINER_TYPES.NEWS_ITEM} items={data ? [...data].reverse() : []}/>
        </PageContainer>
    );
}

export default Home;