import { useContext } from "react";
import { ProductsContext } from "../../../contexts/products.context";
import Button from '../../btns/button/button.component';
import './purchases-total.style.scss';

const PurchasesTotal = () => {
    const {totalProductsCost} = useContext(ProductsContext);

    return (
        <div className="purchases-total">
            <div className="purchases-total_text">
                Общая сумма: {totalProductsCost} P
            </div>
            <Button>Подтвердить покупку</Button>
        </div>
    );
};

export default PurchasesTotal;