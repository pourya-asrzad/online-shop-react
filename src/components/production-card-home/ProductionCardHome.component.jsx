import React from 'react';
import { numberWithCommas } from '../../utils/functions.utils';
import Styles from './ProductionCardHome.module.css'
export const ProductionCardHome = ({ name, price, image }) => {
    const priceWithcommas = numberWithCommas(price)
    return (
        <>
            <div className={Styles.ProductionCardHome}>
                <div className={Styles.imagecontainer}>
                    <img src={image} alt={image} />
                </div>
                <div className={Styles.textflex}>
                    <span className={Styles.name} >{name}</span>
                    <span style={{ direction: 'rtl' }}>{priceWithcommas} <span className='digifont'>تومان</span>  </span>
                </div>
            </div>
        </>
    );
}

