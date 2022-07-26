import './dropdown.style.scss'

const Dropdown = ({children, className}) => {
    return (
        <div className={`dropdown ${className}`}>
                {children}
        </div>
    );
}

export default Dropdown;
