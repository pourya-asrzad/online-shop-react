import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { numberWithCommas } from '../../../utils/functions.utils';
import Styles from './PriceFilter.module.scss'
const PriceFilter = ({ setFetchObj }) => {
    const [price, setPrice] = useState(100000);
    // Triggered when the value gets updated while scrolling the slider:
    const handleInput = (e) => {
        setPrice(e.target.value);
    }
    const priceWithComma = numberWithCommas(price)

    function handelRangeSubmit(e) {
        e.preventDefault()
        setFetchObj(state => {
            return state = {
                ...state,
                filterRange: {
                    isFilter: true,
                    range: +price
                }
            }
        })
    }
    return (
        <form onSubmit={handelRangeSubmit}>
            <div className={Styles.PriceFilter}>
                <div className={Styles.price_filter_header}>
                    <h3> :محدوده قیمت </h3>
                </div>
                <div className={Styles.price_text}>
                    <div className={Styles.price}><span>تومان</span> <span>{priceWithComma}</span></div>
                    <span>:از 0 تومان تا </span>
                </div>
                <input className={Styles.range_input} min={1} max={100000000} type="range" onInput={handleInput} />

                <Button type='submit' > اعمال فیلتر </Button>
            </div>
        </form>
    );
}

export default PriceFilter;
/*     <div>
                {hotels.filter(hotel => { return hotel.price < parseInt(price, 10) }).map(hotel => {
                    return <p key={hotel.name}>{hotel.name} | {hotel.price} &euro; </p>
                })}
            </div>
            */