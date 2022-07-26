import './news-item.style.scss';

const NewsItem = ({bitNews}) => {
    const {date, title, imageSrc} = bitNews; 

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