import React from 'react';
import { Helmet } from 'react-helmet';
import PanelTopTitle from '../../../components/panel-top-title/PanelTopTitle.component';
import TabelComponent from '../../../components/tabel/Tabel.component';
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
                <div className={Styles.radiosparent}>
                    <div style={{ marginRight: "29px" }} className={Styles.inputscontainer}>
                        <label htmlFor="waiting">سفارش های در حال انتظار </label>
                        <input checked={true} type="radio" name="order" id="waiting" />
                    </div>
                    <div className={Styles.inputscontainer}>
                        <label htmlFor="Delivered">سفارش های تحویل شده </label>
                        <input type="radio" name="order" id="Delivered" />
                    </div>
                </div>
                <PanelTopTitle color={'#00f500'}>
                    مدیریت سفارش ها
                </PanelTopTitle>
            </div>
            <div style={{ height: '64px' }} id="inventgost"></div>
            <main>
                <TabelComponent />
            </main>
        </>
    );
}

export default Orders;
