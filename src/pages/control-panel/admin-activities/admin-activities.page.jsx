import React from 'react';
import LineChartCM from '../../../components/charts/LineChart.component';
import { useGetAllOrdersQuery } from '../../../store/products/productsApiSlice';
import Styles from './admin-activities.module.scss'
import { countSameElement, getDateToJalaliFormat } from '../../../utils/functions.utils'
const data = [
    {
        name: '1شهریور',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


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
            <h4 className={Styles.title}>عملکرد فروشگاه</h4>
            <div className={Styles.chartContainer}>
                <LineChartCM chartData={chartData} />
            </div>
        </div>
    );
}

export default AdminActivitiesPage;
