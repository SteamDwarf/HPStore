import CategoryItem from "../category_item/category_item.component";
import './category_container.style.scss';

const CategoryContainer = ({categories}) => {
    return (
        <div className="category-container">
            {categories.map(category => {
                return <CategoryItem key={category.id} category={category}/>
            })}
        </div>
    );
}

export default CategoryContainer;