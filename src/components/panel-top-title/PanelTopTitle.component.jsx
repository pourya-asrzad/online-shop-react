import React from 'react';
import { GrStatusGoodSmall } from 'react-icons/gr'

import Styles from './PanelTopTitle.module.scss'
const PanelTopTitle = ({ children, color }) => {
    return (
        <div className={Styles.righttoptext}>
            <h2>{children}</h2>
            <GrStatusGoodSmall style={{ color: color }} />
        </div>
    );
}

export default PanelTopTitle;
