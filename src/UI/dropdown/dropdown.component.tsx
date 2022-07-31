import { FC, ReactNode } from 'react';
import './dropdown.style.scss'

interface IDropdownProps {
    children: ReactNode;
    className: string;
}

const Dropdown:FC<IDropdownProps> = ({children, className}) => {
    return (
        <div className={`dropdown ${className}`}>
                {children}
        </div>
    );
}

export default Dropdown;
