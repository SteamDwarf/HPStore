import './burger-btn.style.scss';

const BurgerBtn = ({className, onClick}) => {
    return (
        <div className={`burger-btn ${className}`} onClick={onClick}>
            <div className="burger-btn__content"></div>
        </div>
    );
}

export default BurgerBtn;