import './burger-btn.style.scss';

const BurgerBtn = ({onClick}) => {
    return (
        <div className="burger-btn_container" onClick={onClick}>
            <div className="burger-btn"></div>
        </div>
    );
}

export default BurgerBtn;