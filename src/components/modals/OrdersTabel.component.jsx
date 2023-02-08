import React from 'react';
import Styles from './modals.module.scss'

const OrdersTabel = ({ orderData }) => {
    return (
        <table className={Styles.tabel}>
            <tbody>

                <tr>
                    <th>تعداد</th>
                    <th>قیمت </th>
                    <th style={{ display: 'flex' }}>کالا</th>
                </tr>
                {
                    orderData && orderData.map((ele) => {
                        return <tr key={ele.id}>
                            <td>{ele.count}</td>
                            <td> {ele.price}</td>
                            <td style={{ display: 'flex' }}>{ele.name}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    );
}

export default OrdersTabel;
