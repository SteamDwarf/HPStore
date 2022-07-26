import { CONTAINER_TYPES } from "../../../utils/types";
import CategoryItem from "../../page-items/category-item/category-item.component";
import NewsItem from "../../page-items/news-item/news-item.component";
import ProductItem from "../../page-items/product-item/product-item.component";
import './page-container__item-holder.style.scss';

const ItemHolder = ({itemsType, items}) => {
    return (
        <div className="page-container__item-holder">
            {
                itemsType === CONTAINER_TYPES.NEWS_ITEM
                ? items.map(item => (
                    <div className="page-container__item" key={item.id}>
                        <NewsItem bitNews={item}/>
                    </div>
                ))
                : null
            }
            {
                itemsType === CONTAINER_TYPES.CATEGORY_ITEM
                ? items.map(item => (
                    <div className="page-container__item" key={item.id}>
                        <CategoryItem category={item} />
                    </div>
                ))
                : null
            }
            {
                itemsType === CONTAINER_TYPES.PRODUCT_ITEM
                ? items.map(item => (
                    <div className="page-container__item" key={item.id}>
                        <ProductItem productItem={item} />
                    </div>
                ))
                : null
            }
        </div>
    );
    
}

export default ItemHolder;