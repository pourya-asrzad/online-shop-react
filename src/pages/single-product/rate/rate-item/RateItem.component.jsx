import React from 'react';
import Styles from '../rate-item.module.scss'
const RateItem = ({ children, fillStip }) => {
    let color = "blue"
    if (fillStip < 20) {
        color = "red"
    }
    return (
        <div className={Styles.RateItem}>
            <span className={Styles.rate_text}>{children}</span>
            <div className={Styles.Strip}>
                <div style={{ width: fillStip + "%", backgroundColor: color }} className={Styles.strip_filler}></div>
            </div>
        </div>
    );
}

export default RateItem;
