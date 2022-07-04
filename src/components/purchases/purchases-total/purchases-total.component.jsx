import { useSelector, useDispatch } from "react-redux/es/exports";
import Button from '../../btns/button/button.component';
import './purchases-total.style.scss';
import { getTotalProductsCost } from "../../../redux/cart/cart.selector";
import { Fragment } from "react";
import { getUser } from "../../../redux/user/user.selectors";
import { setConfirmationWait, setPurchaseError } from "../../../redux/cart/cart.slice";

const PurchasesTotal = () => {
    const totalProductsCost = useSelector(getTotalProductsCost)
    const user = useSelector(getUser);
    const dispatch = useDispatch()

    const makePurchaseHandler = () => {
        if(!user)
            dispatch(setPurchaseError('Вы не зарегистрированы'));

        dispatch(setConfirmationWait(true));
    }

    return (
        <div className="purchases-total">
            {
                totalProductsCost > 0
                ? <Fragment>
                    <div className="purchases-total_text">
                        Общая сумма: {totalProductsCost} P
                    </div>
                    <Button onClick={makePurchaseHandler}>Подтвердить покупку</Button>
                </Fragment>
                : <div>Ваша корзина пуста</div>
            }
        </div>
    );
};

export default PurchasesTotal;