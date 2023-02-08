import React from 'react';
import Styles from './Tabel.module.scss'
import Button from 'react-bootstrap/Button';
import TrComponent from './Tr.component';
const TabelComponent = ({ orders, setModalShow }) => {

    return (
        <table className={Styles.styled_table}>
            <thead>
                <tr>
                    <th></th>
                    <th> زمان ثبت سفارش </th>
                    <th>مجموع مبلغ</th>
                    <th> نام کاربر</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((element) => {
                    return <TrComponent id={element.id} setModalShow={setModalShow} prices={element.prices}
                        key={element.id} username={element.username}
                        OrderRegistrationTime={element.createdAt}
                        lastname={element.lastname}
                    />
                })}
            </tbody>
        </table>
    );
}

export default TabelComponent;
