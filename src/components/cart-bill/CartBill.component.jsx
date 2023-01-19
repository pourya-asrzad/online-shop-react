import React, { useState } from 'react';
import { numberWithCommas } from '../../utils/functions.utils';
import BaseBtn from '../buttons/AddToCartBtn.component';
import Styles from './CartBill.module.scss'
const CartBill = () => {

    const price = numberWithCommas(12000000)
    const [isEnd, setIsEnd] = useState(false)
    window.onscroll = function () {
        if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
            setIsEnd(true)
        } else {
            setIsEnd(false)

        }
    }
    return (
        <div className={isEnd ? Styles.cartbillEnded : Styles.cartbill}>
            <div className={`flex a-c ${Styles.pricetot}`}>
                <span>{price}</span>
                <span>قیمت کالاها(2)</span>
            </div>
            <div className={`flex a-c ${Styles.pricetot}`}>
                <span>{price}</span>
                <span>جمع سبد خرید</span>
            </div>
            <BaseBtn>
                نهایی کردن سبد خرید
            </BaseBtn>

        </div>
    );
}

export default CartBill;
