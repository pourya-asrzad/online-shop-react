import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Pagination from '../../../components/pagination/Pagination.component';
import PanelTopTitle from '../../../components/panel-top-title/PanelTopTitle.component';
import TabelComponent from '../../../components/tabel/Tabel.component';
import { useFetchOrdersQuery } from '../../../store/getSlice-rtk-query';
import { getAppTitle } from '../../../utils/functions.utils';
import Styles from './orders.module.scss'
const Orders = () => {
    const appTittle = getAppTitle()
    const [paginationStop, setpaginationStop] = useState(false)
    const [ordersfillterAndPageNubmer, setOrdersfillterAndPageNubmer] = useState({
        page: 1,
        filter: "null"
    })
    const { data: orders = [] } = useFetchOrdersQuery(ordersfillterAndPageNubmer)
    function handelPageHangeback() {
        setOrdersfillterAndPageNubmer(state => {
            if (state.page > 1)
                return { ...state, page: state.page - 1 }
            else
                return state
        }
        )

    }
    function handelPageHange() {
        setOrdersfillterAndPageNubmer(state => {
            if (state.page <= 12)
                return { ...state, page: state.page + 1 }
            else
                return state
        })
    }
    useEffect(() => {
        if (orders.length < 7) {
            setpaginationStop(true)
        } else {
            setpaginationStop(false)
        }
    }, [orders.length]);
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
                <TabelComponent orders={orders} />
            </main>
            <div style={{
                position: " absolute",
                bottom: "14px",
                left: "40%",
            }}>
                {orders.length >= 1 && <Pagination paginationStop={paginationStop} handelPagenext={handelPageHange} handelPageprev={handelPageHangeback}>{ordersfillterAndPageNubmer.page}</Pagination>}
            </div>
        </>
    );
}

export default Orders;
