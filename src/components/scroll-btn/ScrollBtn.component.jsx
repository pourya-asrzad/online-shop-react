import React from 'react';
import Styles from './ScrollBtn.module.css'
export const ScrollBtn = ({ image, name, scrollHandlerbar }) => {
    function scrollHandler() {
        scrollHandlerbar()
    }
    return (
        <button onClick={scrollHandler} className={name === "Lbtn" ? Styles.Lbtn : Styles.Rbtn}>
            <img src={image} alt={image} />
        </button>
    );
}


