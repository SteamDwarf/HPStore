import './modal.style.scss';

const Modal = ({children, className}) => {
    return (
        <div className={`modal ${className}`}>
            <div className="modal__content">
                {children}
            </div>
        </div>
    );
}

export default Modal;