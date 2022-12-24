import React from 'react';
import companyicon from '../../assets/images/company.png'
import Styles from './HomeProductionsCard.module.scss'
export const HomeProductionsCard = ({ name, price, image }) => {

    return (
        <div className={Styles.homeproductioncard}>
            <div className={Styles.cardleft}>
                <span>{name}</span>
                <div className='flex a-c'>
                    <span style={{ color: 'blue', padding: "5px" }}>میهن</span>
                    <img src={companyicon} alt="companyicon" />
                </div>
                <span>{price}<span className={Styles.price}>تومان</span>  </span>
            </div>
            <div className={Styles.imagecontainer}>
                <img src={image} alt={image} />
            </div>
        </div>
    );
}

