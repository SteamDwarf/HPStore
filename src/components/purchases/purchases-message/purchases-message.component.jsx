import ErrorMessage from "../../error_message/error_message.component";
import { getCartProducts, getPurchaseError } from "../../../redux/cart/cart.selector";
import { getConfirmationWait } from "../../../redux/cart/cart.selector";
import {useSelector, useDispatch} from 'react-redux';
import './purchases-message.style.scss';
import Modal from "../../modal/modal.component";
import Button from "../../btns/button/button.component";
import { getUser } from "../../../redux/user/user.selectors";
import Loader from "../../loader/loader.component";
import { clearCart, setConfirmationWait, setPurchaseError } from "../../../redux/cart/cart.slice";
import { useMakePurchaseMutation } from "../../../redux/api/app.api";

const PurchasesMessage = () => {
    const dispatch = useDispatch();
    const isConfirmationWait = useSelector(getConfirmationWait);
    const [makePurchase, {isSuccess, isLoading, error, reset}] = useMakePurchaseMutation();
    const purchaseError = useSelector(getPurchaseError);
    const user = useSelector(getUser);
    const cartProducts = useSelector(getCartProducts);

    
    const cancelConfirmation = () => {
        dispatch(setConfirmationWait(false));
    }

    const confirmMakingPurchase = () => {
        makePurchase({user, cartProducts})
    }

    const closeMessage = () => {
        reset();
        cancelConfirmation();
        dispatch(setPurchaseError(''));
    }

    const acceptPurchase = () => {
        dispatch(clearCart());
        closeMessage();
    }


    if(error || purchaseError) {
        return (
            <Modal className='top'>
                <ErrorMessage text={error || {status: purchaseError}} size='large'/>
                <div className="message_buttons-block">
                    <Button onClick={closeMessage}>ОК</Button>
                </div>
            </Modal>
        );
    }

    if(isLoading) {
        return (
            <Modal className='top'>
                <h3 className="message_title">Ваш запрос обрабатывается...</h3>
                <Loader />
            </Modal>
        );
    }

    if(isSuccess) {
        return (
            <Modal className='top'>
                <h3 className="message_title">Покупка совершена успешно</h3>
                <Button onClick={acceptPurchase}>ОК</Button>
            </Modal>
        );
    }

    if(isConfirmationWait) {
        return (
            <Modal className='top'>
                <h3 className="message_title">Вы действительно хотите оформить покупку?</h3>
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