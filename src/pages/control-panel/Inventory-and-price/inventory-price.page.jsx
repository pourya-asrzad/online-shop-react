import React from 'react';
import { Helmet } from 'react-helmet';
import { getAppTitle } from '../../../utils/functions.utils'
import PanelTopTitle from '../../../components/panel-top-title/PanelTopTitle.component';
import Styles from './inventory-price.module.scss'
const InventoryPrice = () => {

    const appTittle = getAppTitle()
    return (
        <>
            <Helmet>
                <title>   پنل مدیریت {appTittle} | موجودی و قیمت</title>
            </Helmet>
            <div className={Styles.inventory_header}>
                <PanelTopTitle color={'blue'}>
                    مدیریت موجودی و قیمت ها
                </PanelTopTitle>
            </div>
        </>
    );
}

export default InventoryPrice;
