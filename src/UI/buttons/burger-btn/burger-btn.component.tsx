import { FC } from 'react';
import './burger-btn.style.scss';

interface IBurgerBtnProps {
    className?: string;
    onClick: () => void
}

const BurgerBtn:FC<IBurgerBtnProps> = ({className = '', onClick}) => {
    return (
        <div className={`burger-btn ${className}`} onClick={onClick}>
            <div className="burger-btn__content"></div>
        </div>
    );
}

export default BurgerBtn;