import NewsItem from "../news_item/news_item.component";
import './news_container.style.scss';

const NewsContainer = ({news}) => {
    return (
        <div className="news-container">
            {news.map(bitNews => {
                return <NewsItem key={bitNews.id} bitNews={bitNews}/>
            })}
        </div>
    );
}

export default NewsContainer;