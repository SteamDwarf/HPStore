import './button.style.scss';

const Button = ({children, onClick, type, className=''}) => {
    return (
        <button className={`btn ${className}`} onClick={onClick} type={type}>{children}</button>
    );
};

export default Button;