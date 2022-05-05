import './purchases-item.style.scss';

const PurchasesItem = ({item}) => {
    return (
        <div className="purchases-item">
            <img className="purchases-item_image" src={item.imageSrc} alt={item.name} />
            <span className="purchases-item_title">{item.title}</span>
            <span className="purchases-item_amount">{item.amount}</span>
            <span className="purchases-item_price">{item.price}</span>
            <span className="purchases-item_delete">X</span>
        </div>
    );
};

export default PurchasesItem;