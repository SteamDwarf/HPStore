import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/container/container.component.jsx';
import PageContainer from '../../components/page-container/page-container.component.jsx';
import { fetchNews } from '../../redux/news/news.actions.js';
import { getNews, getNewsError, getNewsFetchingState } from '../../redux/news/news.selectors.js';
import { CONTAINER_TYPES } from '../../utils/types.js';
import './home.style.scss';

const Home = () => {
    const news = useSelector(getNews);
    const newsFetching = useSelector(getNewsFetchingState);
    const errorNews = useSelector(getNewsError);
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchNews()), []);

    return (
        <PageContainer title='Новости' isFetching={newsFetching} error={errorNews}>
            <Container itemsType={CONTAINER_TYPES.NEWS_ITEM} items={[...news].reverse()}/>
        </PageContainer>
    );
}

export default Home;