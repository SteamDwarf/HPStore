import './cover-message.style.scss';

const CoverMessage = ({children}) => {
    return (
        <div className="cover-message">
            {children}
        </div>
    );
}

export default CoverMessage;