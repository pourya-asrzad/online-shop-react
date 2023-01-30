import React from 'react';
import companyicon from '../../assets/images/company.png'
import Styles from './HomeProductionsCard.module.scss'
export const HomeProductionsCard = ({ name, price, image, className, discount, priceWithDiscount }) => {
    const imageHasHttp = image.includes('https')
    return (

        <div className={`${Styles.homeproductioncard} ${className}`}>
            <div className={Styles.discount}>
                {discount}%
            </div>
            <div className={Styles.cardleft}>
                <span className={Styles.name}>{name}</span>

                <span className={`flex ${Styles.priceWithDiscount}`}>
                    <span className={Styles.price}>تومان  </span>
                    <span> {priceWithDiscount} </span>   </span>
            </div>
            <span className={Styles.priceWithoutDiscount}>
                {price}
            </span>
            <div className={Styles.imagecontainer}>
                <img src={imageHasHttp ? image : `http://localhost:3001/files/${image}`} alt={image} />
            </div>
        </div>
    );
}

