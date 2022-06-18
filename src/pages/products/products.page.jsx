import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/container/container.component";
import PageContainer from "../../components/page-container/page-container.component";
import { fetchCategories } from '../../redux/products/products.actions';
import { CONTAINER_TYPES } from "../../utils/types";
import './products.style.scss';
import { getErrorCategories, getIsFetchingCategories, getCategories } from "../../redux/products/products.selectors";


const Products = () => {
    const dispatch = useDispatch();
    const categories = useSelector(getCategories);
    const isFetching = useSelector(getIsFetchingCategories);
    const errorProducts = useSelector(getErrorCategories);

    useEffect(() =>  dispatch(fetchCategories()), []);

    return (
        <PageContainer title='Категории' isFetching={isFetching} error={errorProducts}>
            <Container itemsType={CONTAINER_TYPES.CATEGORY_ITEM} items={categories}/>
        </PageContainer>
    );
}

export default Products;