import React from 'react';
import Styles from './FormInput.module.scss'
const FormInput = ({ autoFocus = false, id, className = Styles.FormInput, isvalid, name, type = 'text', placeholder, value, onBlur, onChange }) => {

    return (
        <input
            autoFocus={autoFocus}
            className={className}
            style={isvalid ? { border: '1px solid red' } : { border: '1px solid rgb(0, 85, 255)' }}
            name={name}
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
}

export default FormInput;
