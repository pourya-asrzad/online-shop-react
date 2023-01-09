import React from 'react';
import Styles from './color.module.scss'
const ColorsGroup = ({ colors }) => {
    return (
        <div>
            {
                colors.map((color, index) => {
                    return <div key={index} className={`${Styles.color_shower}  ${Styles[color]}`}></div>
                })
            }
        </div>
    );
}

export default ColorsGroup;
