import {ReactComponent as Star} from '../../assets/rating-stars/star-svgrepo-com (2).svg';
import './rating.style.scss';

const Rating = () => {
    return (
        <div className="rating_block">
            <div className="star_block">
                <span className="rating_star"><Star /></span>
                <span className="rating_star"><Star /></span>
                <span className="rating_star"><Star /></span>
                <span className="rating_star"><Star /></span>
                <span className="rating_star"><Star /></span>
            </div>
            <span className='rating_value'>4.5</span>
        </div>
    );
}

export default Rating;