import './purchases__message.style.scss';
import ErrorMessage from "../../../UI/messages/error_message/error_message.component";
import { getCartProducts, getPurchaseError } from "../../../redux/cart/cart.selector";
import { getConfirmationWait } from "../../../redux/cart/cart.selector";
import {useSelector, useDispatch} from 'react-redux';
import Modal from "../../../UI/modal/modal.component";
import Button from "../../../UI/buttons/button/button.component";
import { getUser } from "../../../redux/user/user.selectors";
import Loader from "../../../UI/loader/loader.component";
import { clearCart, setConfirmationWait, setPurchaseError } from "../../../redux/cart/cart.slice";
import { useMakePurchaseMutation } from "../../../redux/api/purchase.api";
import { AppDispatch } from '../../../redux/store';

const PurchasesMessage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const isConfirmationWait = useSelector(getConfirmationWait);
    const [makePurchase, {isSuccess, isLoading, error, reset}] = useMakePurchaseMutation();
    const purchaseError = useSelector(getPurchaseError);
    const user = useSelector(getUser);
    const cartProducts = useSelector(getCartProducts);

    
    const cancelConfirmation = () => {
        dispatch(setConfirmationWait(false));
    }

    const confirmMakingPurchase = () => {
        user?.id ? makePurchase({userId: user.id, purchases: cartProducts}) : null;
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
            <Modal className='center'>
                <ErrorMessage text={error || purchaseError} size='large'/>
                <div className="purchases__message-buttons-block">
                    <Button onClick={closeMessage}>ОК</Button>
                </div>
            </Modal>
        );
    }

    if(isLoading) {
        return (
            <Modal className='center'>
                <h3 className="purchases__message-title">Ваш запрос обрабатывается...</h3>
                <Loader />
            </Modal>
        );
    }

    if(isSuccess) {
        return (
            <Modal className='center'>
                <h3 className="purchases__message-title">Покупка совершена успешно</h3>
                <div className="purchases__message-buttons-block">
                    <Button onClick={acceptPurchase}>ОК</Button>
                </div>
            </Modal>
        );
    }

    if(isConfirmationWait) {
        return (
            <Modal className='center'>
                <h3 className="purchases__message-title">Вы действительно хотите оформить покупку?</h3>
                <div className="purchases__message-buttons-block">
                    <Button className="purchases__message-button" onClick={confirmMakingPurchase}>Подтвердить</Button>
                    <Button className="purchases__message-button" onClick={cancelConfirmation}>Отменить</Button>
                </div>
            </Modal>
        );
    }    

    return null;
}

export default PurchasesMessage;