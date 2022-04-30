import './category_item.style.scss';

const CategoryItem = ({category}) => {
    const {title, imageSrc} = category;
    
    return (
        <div className="category-item" style={{
            backgroundImage: `url(${imageSrc})`
        }}>
            <div className="category-item_info-block">
                <h3 className="category-item_title">{title}</h3>
            </div>
        </div>
    );
}

export default CategoryItem;