import React from 'react';
import Button from 'react-bootstrap/Button';
import { compareAsc, format, newDate } from 'date-fns-jalali'


const TrComponent = ({ username, OrderRegistrationTime, prices, lastname, setModalShow }) => {
    const unix_timestamp = OrderRegistrationTime
    const date = new Date(unix_timestamp);

    const day = date.getDay();

    const year = date.getFullYear();
    const month = date.getMonth();
    const jalaliDate = format(new Date(year, month, day), 'yyyy-MM-dd')


    return (
        <tr>
            <td>
                <Button onClick={() => setModalShow(true)} variant="primary">بررسی سفارش</Button>
            </td>
            <td>{jalaliDate}</td>
            <td>{prices}</td>
            <td>{username + " " + lastname} </td>
        </tr>
    );
}

export default TrComponent;
