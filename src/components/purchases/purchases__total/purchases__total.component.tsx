import './purchases__total.style.scss';
import { useSelector, useDispatch } from "react-redux/es/exports";
import Button from '../../../UI/buttons/button/button.component';
import { getTotalProductsCost } from "../../../redux/cart/cart.selector";
import { Fragment } from "react";
import { getUser } from "../../../redux/user/user.selectors";
import { setConfirmationWait, setPurchaseError } from "../../../redux/cart/cart.slice";
import { AppDispatch } from '../../../redux/store';

const PurchasesTotal = () => {
    const dispatch = useDispatch<AppDispatch>()
    const totalProductsCost = useSelector(getTotalProductsCost)
    const user = useSelector(getUser);

    const makePurchaseHandler = () => {
        if(!user)
            dispatch(setPurchaseError('Вы не зарегистрированы'));

        dispatch(setConfirmationWait(true));
    }

    return (
        <div className="purchases__total">
            {
                totalProductsCost > 0
                ? <Fragment>
                    <div className="purchases__total-text">
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