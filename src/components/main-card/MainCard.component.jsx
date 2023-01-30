import React from 'react';
import { numberWithCommas } from '../../utils/functions.utils';
import ColorsGroup from '../colors-group/ColorsGroup.component';
import Styles from './maincard.module.scss'
import { AiFillStar } from 'react-icons/ai'
const MainCard = (props) => {
    const { colors, image, title, price, discount } = props
    // {colorsArray} is just a test for ui
    const colorsArray = [
        "blue", "white", "black", "green"
    ]
    const imageHasHttp = image.includes('https')
    const numberplit = numberWithCommas(price)
    return (
        <div className={Styles.maincard}>

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
                    <span>2.5</span>
                    <AiFillStar style={{ color: '#f9bc00' }} />
                </div>
                <div className={Styles.price_discount_coontainer}>
                    <h3 className={Styles.card_price}><span style={{ marginRight: "2px" }}> تومان </span> {numberplit} </h3>
                    <div className={discount ? Styles.discount : ''}> <span>{discount ? discount + "%" : ''}</span></div>
                </div>
            </div>
        </div >
    );
}
export default MainCard;
