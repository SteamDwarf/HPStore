import { useParams } from 'react-router';
import AddToCartBtn from '../../components/btns/add-to-cart-btn/add-to-cart-btn.component';
import ErrorMessage from '../../components/error_message/error_message.component';
import PageContainer from '../../components/page-container/page-container.component';
import { useFetchProductsQuery } from '../../redux/api/app.api';
import './product-details.style.scss';

const ProductDetails = () => {
    const productName = useParams().product_name;
    const categoryName = useParams().category_name;
    const {product, isLoading, error} = useFetchProductsQuery(categoryName, {
        selectFromResult: ({data}) => ({
            product: data?.find((curProduct) => curProduct.name === productName)
        })
    });

    return (
        <PageContainer isFetching={isLoading} error={error}>
            {
                product
                ? (
                    <div className="product-details_container">
                        <h2 className='product-details_title'>{product.title}</h2>
                        <div className='product-details_base-information'>
                            <img src={product.imageSrc} alt={product.title} className='product-details_image'/>
                            <div className='product-details_information'>
                                <div className="product-details_buy-block">
                                    <div className='product-details_price'>{product.price} &#8381;</div>
                                    <AddToCartBtn productItem={product} className='btn'>Добавить в корзину</AddToCartBtn>
                                </div>
                                <h4>Описание</h4>
                                <p className='product-details_description'>{product.description}</p>
                            </div>
                        </div>
                    </div>
                )
                : (
                <div className="product-details_container">
                    <ErrorMessage text="Данный товар отсутствует." size="large"/>
                </div>
                )
            }
        </PageContainer>
    );
}

export default ProductDetails;
