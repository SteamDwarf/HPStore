import './purchases-header.style.scss';

const PurchasesHeader = () => {
    return (
        <div className="purchases-header">
            <h4 className="purchases-header_title">Товар</h4>
            <h4 className="purchases-header_title">Описание</h4>
            <h4 className="purchases-header_title">Количество</h4>
            <h4 className="purchases-header_title">Цена</h4>
            <h4 className="purchases-header_title">Удалить</h4>
        </div>
    );
};

export default PurchasesHeader;