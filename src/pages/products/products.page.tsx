import PageContainer from "../../components/page-container/page-container.component";
import './products.style.scss';
import { useFetchCategoriesQuery } from "../../redux/api/app.api";
import ItemHolder from "../../components/page-container/__item-holder/page-container__item-holder.component";
import { PageContaierItems } from "../../typescript/enums";


const Products = () => {
    const {data = [], isLoading, error} = useFetchCategoriesQuery();

    return (
        <PageContainer title='Категории' isFetching={isLoading} error={error}>
            <ItemHolder itemsType={PageContaierItems.CATEGORY_ITEM} items={data}/>
        </PageContainer>
    );
}

export default Products;