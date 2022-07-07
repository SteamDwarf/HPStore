import Container from "../../components/container/container.component";
import PageContainer from "../../components/page-container/page-container.component";
import { CONTAINER_TYPES } from "../../utils/types";
import './products.style.scss';
import { useFetchCategoriesQuery } from "../../redux/api/app.api";


const Products = () => {
    const {data = [], isLoading, error} = useFetchCategoriesQuery();

    return (
        <PageContainer title='Категории' isFetching={isLoading} error={error}>
            <Container itemsType={CONTAINER_TYPES.CATEGORY_ITEM} items={data}/>
        </PageContainer>
    );
}

export default Products;