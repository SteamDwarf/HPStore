import './page-container.style.scss';

const PageContainer = ({title, children}) => {
    return (
        <div className="page-container">
            <h1 className="page-container_title">{title}</h1>
            {children}
        </div>
    );
};

export default PageContainer;