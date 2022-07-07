import { useParams } from "react-router";
import Container from "../../components/container/container.component";
import PageContainer from "../../components/page-container/page-container.component";
import { CONTAINER_TYPES } from "../../utils/types";
import { useFetchCategoryQuery, useFetchProductsQuery } from "../../redux/api/app.api";

const Category = () => {
    const categoryName = useParams().category_name;
    const {data: categoryData, isLoading, error} = useFetchCategoryQuery(categoryName);
    const {data: products = [], isLoading: isLoadingProduct, error: errorProducst} = useFetchProductsQuery(categoryName);

    return (
        <PageContainer title={categoryData?.title} isFetching={isLoading || isLoadingProduct} error={error || errorProducst}>
            <Container itemsType={CONTAINER_TYPES.PRODUCT_ITEM} items={products}/>
        </PageContainer>
    );
};

export default Category;

