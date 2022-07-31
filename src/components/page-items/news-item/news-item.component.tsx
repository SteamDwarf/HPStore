import { FC } from 'react';
import { INews } from '../../../redux/api/app.api';
import './news-item.style.scss';

interface INewsItemProps {
    newsItem: INews; 
}

const NewsItem:FC<INewsItemProps> = ({newsItem}) => {
    const {date, title, imageSrc} = newsItem; 

    return (
        <div className="news-item" style={{
            backgroundImage: `url(${imageSrc})`
        }}>
            <div className="news-item__date">{date}</div>
            <div className="news-item__info">
                <h4 className="news-item__title">{title}</h4>
            </div>
        </div>
    );
}

export default NewsItem;