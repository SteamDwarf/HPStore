import './button.style.scss';

const Button = ({children, onClick, type}) => {
    return (
        <button className="btn" onClick={onClick} type={type}>{children}</button>
    );
};

export default Button;