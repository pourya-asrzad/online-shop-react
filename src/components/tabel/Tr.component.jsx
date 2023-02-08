import React from 'react';
import Button from 'react-bootstrap/Button';
import { compareAsc, format, newDate } from 'date-fns-jalali'
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const TrComponent = ({ username, OrderRegistrationTime, prices, lastname, setModalShow, id }) => {
    const dispatch = useDispatch()
    const unix_timestamp = OrderRegistrationTime
    const date = new Date(unix_timestamp);

    const day = date.getDay();

    const year = date.getFullYear();
    const month = date.getMonth();
    const jalaliDate = format(new Date(year, month, day), 'yyyy-MM-dd')
    function showModalHandeling(dataId) {
        dispatch(uiActions.showOrderMenu(dataId))
    }
    return (
        <tr>
            <td>
                <Button id={id} onClick={(e) => showModalHandeling(e.target.id)} variant="primary">بررسی سفارش</Button>
            </td>
            <td>{jalaliDate}</td>
            <td>{prices}</td>
            <td>{username + " " + lastname} </td>
        </tr>
    );
}

export default TrComponent;
