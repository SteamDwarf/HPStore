import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Container from "../../components/container/container.component";
import PageContainer from "../../components/page-container/page-container.component";
import { CONTAINER_TYPES } from "../../utils/types";
import { getCategories, getError, getIsFetching } from "../../redux/products/products.selectors";
import { fetchCategories } from "../../redux/products/products.actions";
import { useEffect } from "react";

const Category = () => {
    const categoryName = useParams().name;
    const [category] = useSelector(getCategories);
    const newsFetching = useSelector(getIsFetching);
    const newsError = useSelector(getError);
    const products = category?.goods || [];
    const dispatch = useDispatch();
    
    useEffect(() => dispatch(fetchCategories(categoryName)), []);

    return (
        <PageContainer title={category?.title} isFetching={newsFetching} error={newsError}>
            <Container itemsType={CONTAINER_TYPES.PRODUCT_ITEM} items={products}/>
        </PageContainer>
    );
};

export default Category;

