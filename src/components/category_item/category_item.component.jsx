import { Link } from 'react-router-dom';
import './category_item.style.scss';

const CategoryItem = ({category}) => {
    const {title, imageSrc} = category;
    
    return (
        <Link className="category-item" to={`/categories/${category.id}`} style={{
            backgroundImage: `url(${imageSrc})`
        }}>
            <div className="category-item_info-block">
                <h3 className="category-item_title">{title}</h3>
            </div>
        </Link>
    );
}

export default CategoryItem;