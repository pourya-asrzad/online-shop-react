import React from 'react';
import RateItem from './rate-item/RateItem.component';
import Styles from './rate-item.module.scss'

const Rate = ({ fillStrip }) => {

    return (
        <div className={Styles.Rate}>
            <h4>ارزش گذاری </h4>
            <div className={Styles.rate_items}>

                <RateItem fillStip={fillStrip.pricevalue}>
                    ارزش خرید نسبت به قیمت
                </RateItem>
                <RateItem fillStip={fillStrip.quality} >
                    کیفیت
                </RateItem>
                <RateItem fillStip={fillStrip.packing}>
                    بسته بندی
                </RateItem>
            </div>

        </div>
    );
}

export default Rate;
