import { CATEGORY_ITEM, NEWS_ITEM, PRODUCT_ITEM } from "../../utils/types";
import CategoryItem from "../category_item/category_item.component";
import NewsItem from "../news_item/news_item.component";
import ProductItem from "../product-item/product-item.component";
import './container.style.scss';

const Container = ({itemsType, items}) => {
    return (
        <div className="item-container">
            {
                itemsType === NEWS_ITEM
                ? items.map(item => <NewsItem key={item.id} bitNews={item}/>)
                : null
            }
            {
                itemsType === CATEGORY_ITEM
                ? items.map(item => <CategoryItem key={item.id} category={item} />)
                : null
            }
            {
                itemsType === PRODUCT_ITEM
                ? items.map(item => <ProductItem key={item.id} productItem={item} />)
                : null
            }
        </div>
    );
    
}

export default Container;