import React, { useState } from 'react';
import Styles from './discription.module.scss'
import { IoIosArrowBack } from 'react-icons/io'
import Discriptionshowingbtn from './discriptionshowingbtn.component';
const Discription = ({ description }) => {
    const [showCloseBtn, setShowCloseBtn] = useState(false);
    function showMore() {
        setShowCloseBtn(true)
    }
    function showLess() {
        setShowCloseBtn(false)
    }
    return (
        <div className={Styles.discription_patern}>
            <h3> معرفی اجمالی:</h3>
            <div>
                <p className={!showCloseBtn ? Styles.less_mode : Styles.normal}>{description}</p>
            </div>
            {!showCloseBtn ? <Discriptionshowingbtn onClick={showMore}>
                بیشتر
            </Discriptionshowingbtn> : ''}
            {showCloseBtn ? <Discriptionshowingbtn onClick={showLess}>
                بستن
            </Discriptionshowingbtn> : ''}

        </div>
    );
}

export default Discription;
