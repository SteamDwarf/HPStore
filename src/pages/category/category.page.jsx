import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import PageContainer from "../../components/page-container/page-container.component";
import { ProductsContext } from "../../contexts/products.context";
import { fetchCategory, fetchGoodsByCategoryId, fetchGoodsByCategoryName } from "../../utils/server/fetches/goodsFetches";
import { fetchFromServer } from "../../utils/server/fetches/serverFetches";
import { DEFAULT_CATEGORY_DATA } from "../../utils/types";

const Category = () => {
    const categoryId = useParams().id;
    const {products} = useContext(ProductsContext);
    const category = products.find(item => item.id === categoryId);

    return (
        <PageContainer title={category?.title}>
            {category?.goods.map(item => <h2 key={item.id}>{item.title}</h2>)}
        </PageContainer>
    );
};

export default Category;

