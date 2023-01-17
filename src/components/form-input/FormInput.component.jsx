import React from 'react';
import Styles from './FormInput.module.scss'
const FormInput = ({ isvalid, name, type = 'text', placeholder, value, onBlur, onChange }) => {
    return (
        <input
            className={Styles.FormInput}
            style={isvalid ? { border: '1px solid red' } : null}
            name={name}
            id="email"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
}

export default FormInput;
