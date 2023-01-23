import React from 'react';
import Styles from './Tabel.module.scss'
import Button from 'react-bootstrap/Button';
import TrComponent from './Tr.component';
const TabelComponent = () => {
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
                <TrComponent />
                <TrComponent />
                <TrComponent />
                <TrComponent />
                <TrComponent />
                <TrComponent />
                <TrComponent />
            </tbody>
        </table>
    );
}

export default TabelComponent;
