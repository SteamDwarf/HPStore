import { useEffect, useState } from 'react';
import Container from '../../components/container/container.component.jsx';
import PageContainer from '../../components/page-container/page-container.component.jsx';
import { fetchFromServer } from '../../utils/server/fetches/serverFetches.js';
import { NEWS_ITEM } from '../../utils/types.js';
import './home.style.scss';

const Home = () => {
    let [news, setNews] = useState([]);

    const fetchNews = () => {
        fetchFromServer('http://localhost:5000/news', setNews);
    }

    useEffect(fetchNews, []);

    return (
        <PageContainer title='Новости'>
            <Container itemsType={NEWS_ITEM} items={[...news].reverse()}/>
        </PageContainer>
    );
}

export default Home;