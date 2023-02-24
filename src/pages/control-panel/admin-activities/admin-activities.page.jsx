import React from 'react';
import LineChartCM from '../../../components/charts/LineChart.component';
import { useFetchOrdersLengthQuery, useFetchProductsLengthQuery, useGetAllOrdersQuery } from '../../../store/products/productsApiSlice';
import Styles from './admin-activities.module.scss'
import { countSameElement, getDateToJalaliFormat } from '../../../utils/functions.utils'
import BarChart from '../../../components/charts/BarChart.component';
import PanelTopTitle from '../../../components/panel-top-title/PanelTopTitle.component';
import Typed from "react-typed";
import { useLogoutadmin } from '../../../hooks/logoutadmin';

const AdminActivitiesPage = () => {
    const { data: allOrder = [] } = useGetAllOrdersQuery()
    let orderData = []
    allOrder && allOrder.map((ele) => {
        const orderCreatedDate = getDateToJalaliFormat(ele.createdAt)
        orderData.push(orderCreatedDate)
    })
    const chartData = countSameElement(orderData)
    const { data: orderLength, error } = useFetchProductsLengthQuery()
    const goodsError = useLogoutadmin(error)
    return (
        <div>
            <div className={Styles.orderheader}>
                <div></div>
                <div> سعی کنید همیشه عملکرد فروشگاهتان را تحت نظر قرار دهید </div>
                <PanelTopTitle color={'#00f500'}>
                    عملکرد فروشگاه
                </PanelTopTitle>
            </div>
            <div className={Styles.textsContainer}>
                <div>
                    {
                        orderLength && <Typed
                            strings={[`تعداد همه کالا ها :${orderLength}`]}
                            typeSpeed={40}
                        />
                    }
                </div>
                <div>
                    {allOrder && orderData.length !== 0 && <Typed
                        strings={[`میزان کل سفارشات :${orderData.length}`]}
                        typeSpeed={40}
                    />}
                </div>
            </div>
            <h4 className={Styles.middleText}>نمودار های سفارشات </h4>
            <div className={Styles.chartsContainer}>
                <div className={Styles.chartContainer}>
                    <LineChartCM chartData={chartData} />
                </div>
                <div className={Styles.chartContainer}>
                    <BarChart chartData={chartData} />
                </div>
            </div>
            <span className={Styles.title}>
                🧡 پوریاکالا در راستای افزایش عمکرد فروشگاهتان این صفحه را در اختیارتان گذاشته تا عملکرد خودتان را همیشه مشاهده کنید برایتان آرزوی موفقیت داریم
            </span>
        </div>
    );
}

export default AdminActivitiesPage;
