import React from 'react';
import Styles from './ProductionCardHome.module.css'
export const ProductionCardHome = ({ name, price, image }) => {
    return (
        <div className={Styles.ProductionCardHome}>
            <div className={Styles.imagecontainer}>
                <img src={image} alt={image} />
            </div>
            <div className={Styles.textflex}>
                <span className={Styles.name} >{name}</span>
                <span style={{ direction: 'rtl' }}>{price}  تومان </span>
            </div>
        </div>
    );
}

