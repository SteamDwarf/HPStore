import { useParams } from "react-router";
import PageContainer from "../../components/page-container/page-container.component";
import { useFetchCategoryQuery, useFetchProductsQuery } from "../../redux/api/app.api";
import ItemHolder from "../../components/page-container/__item-holder/page-container__item-holder.component";
import { PageContaierItems } from "../../typescript/enums";

const Category = () => {
    const categoryName = useParams().category_name;
    const {data: categoryData, isLoading, error} = useFetchCategoryQuery(categoryName || '');
    const {data: products = [], isLoading: isLoadingProduct, error: errorProducst} = useFetchProductsQuery(categoryName || '');

    return (
        <PageContainer title={categoryData?.title} isFetching={isLoading || isLoadingProduct} error={error || errorProducst}>
            <ItemHolder itemsType={PageContaierItems.PRODUCT_ITEM} items={products}/>
        </PageContainer>
    );
};

export default Category;

