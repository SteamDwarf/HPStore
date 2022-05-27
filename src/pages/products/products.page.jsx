import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/container/container.component";
import PageContainer from "../../components/page-container/page-container.component";
import { fetchCategories } from '../../redux/products/products.actions';
import { CATEGORY_ITEM, MESSAGE_TYPES } from "../../utils/types";
import './products.style.scss';
import { getError, getIsFetching, getCategories } from "../../redux/products/products.selectors";
import ErrorMessage from "../../components/error_message/error_message.component";
import Loader from "../../components/loader/loader.component";
import ContainerMessage from "../../components/container-message/container-message.component";


const Products = () => {
    const dispatch = useDispatch();
    const categories = useSelector(getCategories);
    const isFetching = useSelector(getIsFetching);
    const error = useSelector(getError);

    useEffect(() =>  dispatch(fetchCategories()), []);

    return (
        <PageContainer title='Категории'>
            {isFetching ? <Loader /> : null}
            {
                error 
                ? <ContainerMessage text={'Ошибка сервера. Попробуйте позже'} type={MESSAGE_TYPES.ERROR_MESSAGE}/> 
                : null
            }
            {categories.length > 0 ? <Container itemsType={CATEGORY_ITEM} items={categories}/> : null} 
        </PageContainer>
    );
}

export default Products;