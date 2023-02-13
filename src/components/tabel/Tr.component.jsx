import React from 'react';
import Button from 'react-bootstrap/Button';
import { compareAsc, format, newDate } from 'date-fns-jalali'
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { getDateToJalaliFormat, numberWithCommas } from '../../utils/functions.utils';

const TrComponent = ({ username, OrderRegistrationTime, prices, lastname, setModalShow, id }) => {
    const dispatch = useDispatch()
    const jalaliDate = getDateToJalaliFormat(OrderRegistrationTime)
    function showModalHandeling(dataId) {
        dispatch(uiActions.showOrderMenu(dataId))
    }
    const pricesWithComma = numberWithCommas(prices)
    return (
        <tr>
            <td>
                <Button id={id} onClick={(e) => showModalHandeling(e.target.id)} variant="primary">بررسی سفارش</Button>
            </td>
            <td>{jalaliDate}</td>
            <td>{pricesWithComma}</td>
            <td>{username + " " + lastname} </td>
        </tr>
    );
}

export default TrComponent;
