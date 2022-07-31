import { FC, MouseEvent } from 'react';
import './button.style.scss';

interface IButtonProps {
    children: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'reset' | 'submit';
    className?: string;
}

const Button:FC<IButtonProps> = ({children, onClick, type = 'button', className = ''}) => {
    return (
        <button className={`btn ${className}`} onClick={onClick} type={type}>{children}</button>
    );
};

export default Button;