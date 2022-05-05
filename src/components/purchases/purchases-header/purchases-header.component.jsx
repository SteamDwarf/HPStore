import './purchases-header.style.scss';

const PurchasesHeader = () => {
    return (
        <div className="purchases-header">
            <h3 className="purchases-header_title">Товар</h3>
            <h3 className="purchases-header_title">Описание</h3>
            <h3 className="purchases-header_title">Количество</h3>
            <h3 className="purchases-header_title">Цена</h3>
            <h3 className="purchases-header_title">Удалить</h3>
        </div>
    );
};

export default PurchasesHeader;