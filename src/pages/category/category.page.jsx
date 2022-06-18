import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Container from "../../components/container/container.component";
import PageContainer from "../../components/page-container/page-container.component";
import { CONTAINER_TYPES } from "../../utils/types";
import { getCategories, getErrorCategories, getIsFetchingCategories } from "../../redux/products/products.selectors";
import { fetchCategories } from "../../redux/products/products.actions";
import { useEffect } from "react";

const Category = () => {
    const categoryName = useParams().categoty_name;
    const [category] = useSelector(getCategories);
    const categoriesFetching = useSelector(getIsFetchingCategories);
    const categoriesError = useSelector(getErrorCategories);
    const products = category?.goods || [];
    const dispatch = useDispatch();
    
    useEffect(() => dispatch(fetchCategories(categoryName)), []);

    return (
        <PageContainer title={category?.title} isFetching={categoriesFetching} error={categoriesError}>
            <Container itemsType={CONTAINER_TYPES.PRODUCT_ITEM} items={products}/>
        </PageContainer>
    );
};

export default Category;

