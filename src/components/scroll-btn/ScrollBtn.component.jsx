import React from 'react';
import Styles from './ScrollBtn.module.css'
export const ScrollBtn = ({ top = "35rem", image, name, scrollHandlerbar }) => {
    function scrollHandler() {
        scrollHandlerbar()
    }
    return (
        <button style={{ top: top }} onClick={scrollHandler} className={name === "Lbtn" ? Styles.Lbtn : Styles.Rbtn}>
            <img src={image} alt={image} />
        </button>
    );
}


