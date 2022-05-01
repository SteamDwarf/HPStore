import { Fragment } from "react";
import './labeled_input.style.scss';

const LabeledInput = ({labelText, inputType, inputValue, onChange, isRequired = false}) => {
    return (
        <div className="labeled-input_block">
            <label className="labeled-input_label">{labelText}</label>
            <input className="labeled-input" type={inputType} value={inputValue} required={isRequired} onChange={onChange}/>
        </div>
    );
};

export default LabeledInput;