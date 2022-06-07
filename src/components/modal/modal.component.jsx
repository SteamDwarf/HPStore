import './modal.style.scss';

const Modal = ({children}) => {
    return (
        <div className="modal-wrapper">
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
}

export default Modal;