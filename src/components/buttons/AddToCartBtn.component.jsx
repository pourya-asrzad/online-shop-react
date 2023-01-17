import React from 'react';
import Styles from './buttons.module.scss'
const BaseBtn = ({ type = null, style = null, children, className = Styles.addToCartBtn }) => {
    return (
        <button type={type} style={style} className={className}>{children}</button>
    );
}

export default BaseBtn;
