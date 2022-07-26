import { Link } from "react-router-dom";
import Button from "../button/button.component";

const LinkedButton = ({url, children, className}) => {
    return (
        <Link className={`linked-button ${className}`} to={url}>
            <Button>{children}</Button>
        </Link>
    );
};

export default LinkedButton;