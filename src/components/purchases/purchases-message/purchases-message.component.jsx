import ErrorMessage from "../../error_message/error_message.component";
import { getCartProducts, getConfirmationWait, getMakePurchaseError, getSuccessMessage } from "../../../redux/cart/cart.selector";
import { getIsMakingPurchase } from "../../../redux/cart/cart.selector";
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate} from "react-router";
import './purchases-message.style.scss';
import Modal from "../../modal/modal.component";
import Button from "../../btns/button/button.component";
import { makePurchaseErrorAction, setConfirmationWait } from "../../../redux/cart/cart.actions";
import { getUser } from "../../../redux/user/user.selectors";
import { makePurchase } from "../../../redux/cart/cart.actions";
import Loader from "../../loader/loader.component";

const PurchasesMessage = () => {
    const dispatch = useDispatch();

    const makePurchaseError = useSelector(getMakePurchaseError);
    const isMakingPurchase = useSelector(getIsMakingPurchase);
    const isConfirmationWait = useSelector(getConfirmationWait);
    const successMessage = useSelector(getSuccessMessage);
    const user = useSelector(getUser);
    const cartProducts = useSelector(getCartProducts);
    const navigate = useNavigate()

    
    const cancelConfirmation = () => {
        dispatch(setConfirmationWait(false));
    }

    const confirmMakingPurchase = () => {
        dispatch(makePurchase(user, cartProducts, successPurchase));
    }

    const closeErrorMessage = () => {
        dispatch(makePurchaseErrorAction(''));
    }

    const successPurchase = () => {
        navigate(-1);
    }

    if(makePurchaseError) {
        return (
            <Modal>
                <ErrorMessage text={makePurchaseError} size='large'/>
                <div className="message_buttons-block">
                    <Button onClick={closeErrorMessage}>Ок</Button>
                </div>
            </Modal>
        );
    }

    if(isMakingPurchase) {
        return (
            <Modal>
                <h2 className="message_title">Ваш запрос обрабатывается...</h2>
                <Loader />
            </Modal>
        );
    }

    if(successMessage) {
        return (
            <Modal>
                <h2>{successMessage}</h2>
            </Modal>
        );
    }

    if(isConfirmationWait) {
        return (
            <Modal>
                <h2 className="message_title">Вы действительно хотите оформить покупку?</h2>
                <div className="message_buttons-block">
                    <Button className="message_button" onClick={confirmMakingPurchase}>Подтвердить</Button>
                    <Button className="message_button" onClick={cancelConfirmation}>Отменить</Button>
                </div>
            </Modal>
        );
    }

    

    return null;
}

export default PurchasesMessage;