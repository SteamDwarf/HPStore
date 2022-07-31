import { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react';
import './labeled-input.style.scss';

interface ILabeledInput {
    labelText: string;
    value: string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isRequired?: boolean;
    autoComplete?: 'on' | 'off';
    type?: HTMLInputTypeAttribute;
    name?: string;
}

const LabeledInput:FC<ILabeledInput> = ({labelText, value, onChange, name = '', type = 'text', isRequired = false, autoComplete = 'off'}) => {
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