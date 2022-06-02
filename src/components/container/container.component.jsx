import { CONTAINER_TYPES } from "../../utils/types";
import CategoryItem from "../category_item/category_item.component";
import NewsItem from "../news_item/news_item.component";
import ProductItem from "../product-item/product-item.component";
import './container.style.scss';

const Container = ({itemsType, items}) => {
    return (
        <div className="item-container">
            {
                itemsType === CONTAINER_TYPES.NEWS_ITEM
                ? items.map(item => <NewsItem key={item.id} bitNews={item}/>)
                : null
            }
            {
                itemsType === CONTAINER_TYPES.CATEGORY_ITEM
                ? items.map(item => <CategoryItem key={item.id} category={item} />)
                : null
            }
            {
                itemsType === CONTAINER_TYPES.PRODUCT_ITEM
                ? items.map(item => <ProductItem key={item.id} productItem={item} />)
                : null
            }
        </div>
    );
    
}

export default Container;