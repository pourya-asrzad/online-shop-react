import React from 'react';
import Styles from './Companyname.module.scss'
const CompanyName = ({ style, className }) => {
    return (
        <h1 className={`${Styles.companyname} ${className}`} style={style}>پوریا کالا </h1>
    );
}

export default CompanyName;
