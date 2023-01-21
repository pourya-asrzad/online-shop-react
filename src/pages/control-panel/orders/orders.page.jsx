import React from 'react';
import { Helmet } from 'react-helmet';
import PanelTopTitle from '../../../components/panel-top-title/PanelTopTitle.component';
import { getAppTitle } from '../../../utils/functions.utils';
import Styles from './orders.module.scss'
const Orders = () => {
    const appTittle = getAppTitle()

    return (
        <>
            <Helmet>
                <title>   پنل مدیریت {appTittle} |  سفاارش ها </title>
            </Helmet>
            <div className={Styles.ordersheader}>
                <PanelTopTitle color={'#00f500'}>
                    مدیریت سفارش ها
                </PanelTopTitle>
            </div>
            <div style={{ height: '64px' }} id="inventgost"></div>

        </>
    );
}

export default Orders;
