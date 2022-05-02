import { Fragment } from "react";
import './labeled_input.style.scss';

const LabeledInput = ({labelText, type, value, name, onChange, isRequired = false}) => {
    return (
        <div className="labeled-input_block">
            <label className="labeled-input_label">{labelText}</label>
            <input 
                className="labeled-input" 
                type={type} 
                value={value} 
                name={name}
                required={isRequired} 
                onChange={onChange}
            />
        </div>
    );
};

export default LabeledInput;