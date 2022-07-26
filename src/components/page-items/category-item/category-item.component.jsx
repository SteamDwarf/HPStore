import { Link } from 'react-router-dom';
import './category-item.style.scss';

const CategoryItem = ({category}) => {
    const {title, imageSrc} = category;
    
    return (
        <Link className="category-item" to={`/categories/${category.name}`} style={{
            backgroundImage: `url(${imageSrc})`
        }}>
            <div className="category-item__info">
                <h4 className="category-item__title">{title}</h4>
            </div>
        </Link>
    );
}

export default CategoryItem;