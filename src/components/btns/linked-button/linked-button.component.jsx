import { Link } from "react-router-dom";
import Button from "../button/button.component";

const LinkedButton = ({url, text}) => {
    return (
        <Link className="linked-button" to={url}>
            <Button>{text}</Button>
        </Link>
    );
};

export default LinkedButton;