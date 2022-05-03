import { useContext, useEffect, useState } from "react";
import Container from "../../components/container/container.component";
import PageContainer from "../../components/page-container/page-container.component";
import { ProductsContext } from "../../contexts/products.context";
import { CATEGORY_ITEM } from "../../utils/types";
import './products.style.scss';


const Products = () => {
    const {products} = useContext(ProductsContext);
    
    return (
        <PageContainer title='Категории'>
            <Container itemsType={CATEGORY_ITEM} items={products}/>
        </PageContainer>
    );
}

export default Products;