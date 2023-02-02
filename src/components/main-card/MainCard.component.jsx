import React from 'react';
import { numberWithCommas } from '../../utils/functions.utils';
import ColorsGroup from '../colors-group/ColorsGroup.component';
import Styles from './maincard.module.scss'
import { AiFillStar } from 'react-icons/ai'
import PriceWithDiscountText from '../price-With-Discount-text/priceWithDiscountText.component';
import { useState } from 'react';
const MainCard = (props) => {
    const { colors, image, title, price, discount, quantity, fillStrip } = props
    // {colorsArray} is just a test for ui
    const colorsArray = [
        "blue", "white", "black", "green"
    ]
    const imageHasHttp = image.includes('https')
    let priceWithDiscount = price
    const numberplit = numberWithCommas(price)
    const productStart = parseFloat((((fillStrip.pricevalue + fillStrip.quality + fillStrip.packing) / 3 * 100) * 5 / 100 / 100).toFixed(1))
    if (discount) {
        const numberplitwithdiscount = numberWithCommas(price - price * discount / 100)
        priceWithDiscount = numberplitwithdiscount
    }
    return (
        <div style={quantity == 0 ? { filter: 'grayscale(100%)' } : { filter: 'none' }} className={Styles.maincard}>

            <div className={Styles.card_header}>
                <ColorsGroup colors={colorsArray} />
                <div className={Styles.image_container} style={{ width: "240px", height: "240px" }}>
                    <img src={imageHasHttp ? image : `http://localhost:3001/files/${image}`} alt={title.toString()} />
                </div>
            </div>
            <div
                className={Styles.card_middle_space}>
                <br />
                <br />
            </div>
            <div className={Styles.card_footer}>
                <h3 className={Styles.card_title}>{title}</h3>
                <div className={Styles.score}>
                    <span>{productStart ? productStart : ''}</span>
                    <AiFillStar style={{ color: '#f9bc00' }} />
                </div>
                {quantity == 0 ? <span>ناموجود</span> : <div style={{ position: 'relative' }}> <div className={Styles.price_discount_coontainer}>
                    <h3 className={Styles.card_price}><span style={{ marginRight: "2px" }}> تومان </span> {discount ? priceWithDiscount : numberplit} </h3>
                    <div className={discount ? Styles.discount : ''}> <span>{discount ? discount + "%" : ''}</span></div>
                </div>
                    {discount ? <PriceWithDiscountText category={true} price={numberplit} /> : ''}

                </div>
                }
            </div>
        </div >
    );
}
export default MainCard;
