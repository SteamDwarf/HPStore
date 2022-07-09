import './news_item.style.scss';

const NewsItem = ({bitNews}) => {
    const {date, title, imageSrc} = bitNews; 

    return (
        <div className="news-item" style={{
            backgroundImage: `url(${imageSrc})`
        }}>
            <div className="news-item_date-info">{date}</div>
            <div className="news-item_info-block">
                <h4 className="news-item_title">{title}</h4>
            </div>
        </div>
    );
}

export default NewsItem;