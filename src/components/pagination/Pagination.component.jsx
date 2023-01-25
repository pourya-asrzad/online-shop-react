
import React from 'react';
import { Button } from 'react-bootstrap';
import Styles from './Pagination.module.scss'

const Pagination = ({ handelPagenext, handelPageprev, children, paginationStop }) => {
    return (
        <div className={Styles.Pagination}>
            <Button disabled={paginationStop ? true : false} onClick={handelPagenext} variant="primary" >صفحه بعدی</Button>
            <span className={Styles.Paginationnumber}>{children}</span>
            <Button disabled={children == 1 ? true : false} onClick={handelPageprev} variant="primary">صفحه قبلی</Button>
        </div>
    );
}

export default Pagination;
