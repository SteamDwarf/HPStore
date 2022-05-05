import { useContext } from "react";
import { ProductsContext } from "../../../contexts/products.context";
import './purchases-total.style.scss';

const PurchasesTotal = () => {
    const {cartProducts} = useContext(ProductsContext);

    return (
        <div className="purchases-total">
            Общая сумма: {cartProducts.reduce((sum, curProduct) => {
                return sum + curProduct.price
            }, 0)} P
        </div>
    );
};

export default PurchasesTotal;