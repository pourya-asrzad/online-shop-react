import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import Styles from './showzoom.module.scss'
const ShowZoom = () => {
    const showZoom = useSelector(state => state.ui.showZoom)

    return showZoom ? ReactDOM.createPortal(
        <div className={Styles.showzoom} >
            <div id="myPortal" />

        </div>
        ,
        document.getElementById('show-image-zoom')
    ) : ''
}

export default ShowZoom;
