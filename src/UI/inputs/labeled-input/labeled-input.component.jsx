import './labeled-input.style.scss';

const LabeledInput = ({labelText, type, value, name, onChange, isRequired = false, autoComplete = 'off'}) => {
    return (
        <div className="labeled-input__block">
            <input 
                className='labeled-input'
                type={type} 
                value={value} 
                name={name}
                required={isRequired} 
                onChange={onChange}
                autoComplete={autoComplete}
            />
            <label className={`labeled-input__label ${value ? 'shrink': ''}`}>{labelText}</label>
        </div>
    );
};

export default LabeledInput;