import React from 'react';
import PageContainer from '../../layouts/pageContainer/pageContainer.layout';
import { DateValue, DateInput } from "mantine-datepicker-jalali";
import "dayjs/locale/fa"
import { useState } from 'react';
import Styles from './order-registration.module.scss'
import { IoBagCheckOutline } from 'react-icons/io5'
const OrderRegistrationPage = () => {
    const [singleValue, setSingleValue] = useState(null);
    // console.log(singleValue)
    return (
        <PageContainer>
            <main style={{ marginTop: '8rem' }}>
                <div className={Styles.orderregisterheading}>
                    <IoBagCheckOutline />
                    <h3 >نهایی کردن خرید</h3>
                </div>
                <div>
                    <div><input type="text" />
                        <label htmlFor="">نام</label></div>
                    <div><input type="text" />
                        <label htmlFor="">نام خانوادگی</label></div>
                    <div><textarea name="" id="" cols="30" rows="10"></textarea>
                        <label htmlFor="">آدرس</label></div>
                    <div><input type="text" />
                        <label htmlFor="">تلفن همراه</label></div>
                    <div>
                        <DateInput
                            label="تاریخ"
                            placeholder="تاریخ را وارد کنید"
                            style={{ direction: "rtl" }} // RTL lable
                            defaultValue={new Date()} // Initial date that is displayed, used for uncontrolled component
                            value={singleValue}
                            onChange={setSingleValue}
                            locale="fa" // Required to use Jalali Calendar
                            firstDayOfWeek={6} // number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday
                            weekendDays={[5]} // Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday, defaults to value defined in DatesProvider
                            className={Styles.datepicker}
                        />
                    </div>
                </div>

                <button>پرداخت</button>
            </main>
        </PageContainer>
    );
}

export default OrderRegistrationPage;
