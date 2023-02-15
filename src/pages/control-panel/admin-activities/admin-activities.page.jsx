import React from 'react';
import LineChartCM from '../../../components/charts/LineChart.component';
import { useGetAllOrdersQuery } from '../../../store/products/productsApiSlice';
import Styles from './admin-activities.module.scss'
import { countSameElement, getDateToJalaliFormat } from '../../../utils/functions.utils'
import BarChart from '../../../components/charts/BarChart.component';
import PanelTopTitle from '../../../components/panel-top-title/PanelTopTitle.component';

const AdminActivitiesPage = () => {
    const { data: allOrder = [] } = useGetAllOrdersQuery()
    let orderData = []
    allOrder && allOrder.map((ele) => {
        const orderCreatedDate = getDateToJalaliFormat(ele.createdAt)
        orderData.push(orderCreatedDate)
    })
    const chartData = countSameElement(orderData)
    return (
        <div>
            <div className={Styles.orderheader}>
                <div></div>
                <div>😉همیشه عملکرد فروشگاهتان را تحت نظر قرار دهید </div>
                <PanelTopTitle color={'#00f500'}>
                    عملکرد فروشگاه
                </PanelTopTitle>
            </div>
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
