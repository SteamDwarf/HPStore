import './page-container__item-holder.style.scss';
import CategoryItem from "../../page-items/category-item/category-item.component";
import NewsItem from "../../page-items/news-item/news-item.component";
import ProductItem from "../../page-items/product-item/product-item.component";
import { PageContaierItems } from '../../../typescript/enums';
import { ICategory, INews, IProduct } from '../../../redux/api/app.api';
import { FC } from 'react';

interface ItemHolderProps {
    itemsType: PageContaierItems;
    items: INews[] | ICategory[] | IProduct[];
}

const ItemHolder:FC<ItemHolderProps> = ({itemsType, items}) => {
    return (
        <div className="page-container__item-holder">
            {
                itemsType === PageContaierItems.NEWS_ITEM
                ? items.map(item => (
                    <div className="page-container__item" key={item.id}>
                        <NewsItem newsItem={item as INews}/>
                    </div>
                ))
                : null
            }
            {
                itemsType === PageContaierItems.CATEGORY_ITEM
                ? items.map(item => (
                    <div className="page-container__item" key={item.id}>
                        <CategoryItem category={item as ICategory} />
                    </div>
                ))
                : null
            }
            {
                itemsType === PageContaierItems.PRODUCT_ITEM
                ? items.map(item => (
                    <div className="page-container__item" key={item.id}>
                        <ProductItem productItem={item as IProduct} />
                    </div>
                ))
                : null
            }
        </div>
    );
    
}

export default ItemHolder;