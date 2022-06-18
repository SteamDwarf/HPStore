import './modal.style.scss';

const Modal = ({children, className}) => {
    return (
        <div className={`modal-wrapper ${className}`}>
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
}

export default Modal;