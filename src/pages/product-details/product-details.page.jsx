import { useParams } from 'react-router';
import AddToCartBtn from '../../components/btns/add-to-cart-btn/add-to-cart-btn.component';
import ErrorMessage from '../../UI/messages/error_message/error_message.component';
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
        <PageContainer isFetching={isLoading} error={error} className='product-details__wrapper'>
            {
                product
                ? (
                    <div className="product-details">
                        <h2 className='product-details__title'>{product.title}</h2>
                        <div className='product-details__data'>
                            <img src={product.imageSrc} alt={product.title} className='product-details__image'/>
                            <div className='product-details__information'>
                                <div className="product-details__buy">
                                    <div className='product-details__price'>{product.price} &#8381;</div>
                                    <AddToCartBtn productItem={product} className='product-details__btn'>Добавить в корзину</AddToCartBtn>
                                </div>
                                <div className='product-details__description'>
                                    <h4>Описание</h4>
                                    <p className='product-details__description-text'>{product.description}</p>
                                </div>
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
