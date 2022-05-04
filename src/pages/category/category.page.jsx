import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "../../components/container/container.component";
import PageContainer from "../../components/page-container/page-container.component";
import ProductItem from "../../components/product-item/product-item.component";
import { ProductsContext } from "../../contexts/products.context";
import { PRODUCT_ITEM } from "../../utils/types";

const Category = () => {
    const categoryId = useParams().name;
    const {products} = useContext(ProductsContext);
    const category = products.find(item => item.name === categoryId);

    return (
        <PageContainer title={category?.title}>
            {
                category
                ? <Container itemsType={PRODUCT_ITEM} items={category?.goods}/>
                : null
            }
        </PageContainer>
    );
};

export default Category;

