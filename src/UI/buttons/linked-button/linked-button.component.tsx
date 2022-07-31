import { FC } from "react";
import { Link } from "react-router-dom";
import Button from "../button/button.component";

interface ILinkedButtonProps {
    url: string;
    children: string;
    className?: string;
}

const LinkedButton:FC<ILinkedButtonProps> = ({url, children, className = ''}) => {
    return (
        <Link className={`linked-button ${className}`} to={url}>
            <Button>{children}</Button>
        </Link>
    );
};

export default LinkedButton;