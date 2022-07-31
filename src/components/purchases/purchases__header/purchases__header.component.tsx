import './purchases__header.style.scss';

const PurchasesHeader = () => {
    return (
        <div className="purchases__header">
            <h4 className="purchases__header-title">Товар</h4>
            <h4 className="purchases__header-title">Описание</h4>
            <h4 className="purchases__header-title">Количество</h4>
            <h4 className="purchases__header-title">Цена</h4>
            <h4 className="purchases__header-title">Удалить</h4>
        </div>
    );
};

export default PurchasesHeader;