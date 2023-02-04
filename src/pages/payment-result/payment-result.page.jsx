import React from 'react';
import PageContainer from '../../layouts/pageContainer/pageContainer.layout';
import Styles from './payment-result.module.scss'
import { FaClipboardCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { INTERNAL_PATHS } from '../../configs/routs.config';
import { IoReturnDownBack } from 'react-icons/io5'
import { FaTimesCircle } from 'react-icons/fa'
const PaymentResultPage = () => {
    return (
        <PageContainer>
            <main className={Styles.PaymentResultPage}>
                <h4>نتیجه پرداخت</h4>
                <div className={Styles.resultpayment}>
                    <p>پرداخت موفقیت آمیز نبود . سفارش شما در انتظار پرداخت است </p>
                    <FaTimesCircle />
                </div>
                <Link className={Styles.backtohomr} to={INTERNAL_PATHS.HOME}>

                    <IoReturnDownBack />
                    <span>

                        بازگشت به سایت
                    </span>


                </Link>
            </main>
        </PageContainer>
    );
}

export default PaymentResultPage;

{/* <main className={Styles.PaymentResultPage}>
<h4>نتیجه پرداخت</h4>
<div className={Styles.resultpayment}>
    <p>با تشکر از پرداخت شما. سفارش شما ثبت شد و جهت هماهنگی ارسال با شما تماس گرفته خواهد شد</p>
    <FaClipboardCheck />
</div>
<Link className={Styles.backtohomr} to={INTERNAL_PATHS.HOME}>

    <IoReturnDownBack />
    <span>

        بازگشت به سایت
    </span>


</Link>
</main> */}