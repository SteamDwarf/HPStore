import { useEffect, useState } from 'react';
import Container from '../../components/container/container.component.jsx';
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
        <div className='news-block'>
            <h1 className='news-block_title'>Новости</h1>
            <Container itemsType={NEWS_ITEM} items={[...news].reverse()}/>
        </div>
    );
}

export default Home;