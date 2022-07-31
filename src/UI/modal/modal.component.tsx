import { FC, ReactNode } from 'react';
import './modal.style.scss';

interface IModalProps {
    children: ReactNode;
    className?: string;
}

const Modal:FC<IModalProps> = ({children, className = ''}) => {
    return (
        <div className={`modal ${className}`}>
            <div className="modal__content">
                {children}
            </div>
        </div>
    );
}

export default Modal;