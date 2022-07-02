import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import AddToCartBtn from '../../components/btns/add-to-cart-btn/add-to-cart-btn.component';
import PageContainer from '../../components/page-container/page-container.component';
import { fetchProduct } from '../../redux/products/products.actions';
import { getErrorProduct, getIsFetchingProduct, getProduct } from '../../redux/products/products.selectors';
import './product-details.style.scss';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const productName = useParams().product_name;
    const categoryName = useParams().category_name;
    const product = useSelector(getProduct);
    const productFetching = useSelector(getIsFetchingProduct);
    const productError = useSelector(getErrorProduct);

    useEffect(() => dispatch(fetchProduct(categoryName, productName)), []);

    return (
        <PageContainer isFetching={productFetching} error={productError}>
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
        </PageContainer>
    );
}

export default ProductDetails;