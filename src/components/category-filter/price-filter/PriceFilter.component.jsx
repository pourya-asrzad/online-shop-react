import React, { useState } from 'react';
import { numberWithCommas } from '../../../utils/functions.utils';
import Styles from './PriceFilter.module.scss'
const PriceFilter = () => {
    const [price, setPrice] = useState(40);
    // Triggered when the value gets updated while scrolling the slider:
    const handleInput = (e) => {
        const priceWithComma = numberWithCommas(e.target.value)
        setPrice(priceWithComma);
    }
    const hotels = [
        { name: "A", price: 40 },
        { name: "B", price: 50 },
        { name: "C", price: 60 }
    ];
    return (
        <div className={Styles.PriceFilter}>
            <div className={Styles.price_filter_header}>
                <h3> :محدوده قیمت </h3>
            </div>
            <div className={Styles.price_text}>
                <div className={Styles.price}><span>تومان</span> <span>{price}</span></div>
                <span>:از 0 تومان تا </span>
            </div>
            <input className={Styles.range_input} min={1} max={100000} type="range" onInput={handleInput} />

        </div>
    );
}

export default PriceFilter;
/*     <div>
                {hotels.filter(hotel => { return hotel.price < parseInt(price, 10) }).map(hotel => {
                    return <p key={hotel.name}>{hotel.name} | {hotel.price} &euro; </p>
                })}
            </div>
            */