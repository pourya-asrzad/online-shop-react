import React from 'react';
import companyicon from '../../assets/images/company.png'
import Styles from './HomeProductionsCard.module.scss'
export const HomeProductionsCard = ({ name, price, image, className }) => {

    return (

        <div className={`${Styles.homeproductioncard} ${className}`}>
            <div className={Styles.cardleft}>
                <span className={Styles.name}>{name}</span>
                <div className='flex a-c'>
                    <span style={{ color: 'blue', padding: "5px" }}>میهن</span>
                    <img src={companyicon} alt="companyicon" />
                </div>
                <span className='flex'>
                    <span className={Styles.price}>تومان  </span>
                    <span> {price} </span>   </span>
            </div>
            <div className={Styles.imagecontainer}>
                <img src={image} alt={image} />
            </div>
        </div>
    );
}

