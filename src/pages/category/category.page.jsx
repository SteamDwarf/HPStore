import { useParams } from "react-router";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Container from "../../components/container/container.component";
import PageContainer from "../../components/page-container/page-container.component";
import { PRODUCT_ITEM } from "../../utils/types";
import { getProducts } from "../../redux/products/products.selectors";

const Category = () => {
    const categoryName = useParams().name;
    const products = useSelector(getProducts);
    const category = products.find(item => item.name === categoryName);

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

