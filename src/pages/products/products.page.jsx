import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/container/container.component";
import PageContainer from "../../components/page-container/page-container.component";
import { setProductsAction } from "../../redux/products/products.actions";
import { CATEGORY_ITEM } from "../../utils/types";
import { fetchFromServer } from "../../utils/server/fetches/serverFetches";
import './products.style.scss';
import { getProducts } from "../../redux/products/products.selectors";


const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);

    const setProductsHandler = (products) => {
        dispatch(setProductsAction(products));
    }
    
    const fetchProducts = () => {
        fetchFromServer('http://localhost:5000/categories', setProductsHandler);
    }

    useEffect(fetchProducts, []);

    return (
        <PageContainer title='Категории'>
            <Container itemsType={CATEGORY_ITEM} items={products}/>
        </PageContainer>
    );
}

export default Products;