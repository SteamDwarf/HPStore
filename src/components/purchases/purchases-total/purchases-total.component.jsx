import { useSelector } from "react-redux/es/exports";
import Button from '../../btns/button/button.component';
import './purchases-total.style.scss';
import { getTotalProductsCost } from "../../../redux/products/products.selectors";

const PurchasesTotal = () => {
    const totalProductsCost = useSelector(getTotalProductsCost)

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