import React from 'react';
import PageContainer from '../../layouts/pageContainer/pageContainer.layout';
import { DateValue, DateInput } from "mantine-datepicker-jalali";
import "dayjs/locale/fa"
import { useState } from 'react';
import Styles from './order-registration.module.scss'
import { IoBagCheckOutline } from 'react-icons/io5'
import FormInput from '../../components/form-input/FormInput.component';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { INTERNAL_PATHS } from '../../configs/routs.config';
import { BsCheckLg } from 'react-icons/bs';
import { useFetchCartProductQuery } from '../../store/products/cartproductApiSlice';
import axios from 'axios';
import { API_BASE_URL } from '../../configs/variables.config';
import { useEffect } from 'react';
const OrderRegistrationPage = () => {
    const [singleValue, setSingleValue] = useState(null);
    const navigate = useNavigate()
    const { data, isLoading, isError, isSuccess } = useFetchCartProductQuery()
    const userData = data && data[0].cart
    const [prices, setPrices] = useState(0);
    const [userId, setUserId] = useState(null)
    useEffect(() => {
        userData && userData.map((element) => {
            setPrices(state => state + +element.price * element.count)
        })
        data && setUserId(data[0].id)

    }, [userData])

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',

        }, validationSchema: Yup.object({
            firstName: Yup.string().required('این فیلد نباید خالی باشد').min(2, 'ورودی کمتر از حد مجاز است '),
            lastName: Yup.string().required('این فیلد نباید خالی باشد'),
            phoneNumber: Yup.string().required('شماره تلفن همراه اجباری است').max(11, 'ورودی بیش از حد مجاز است').min(10, 'ورودی کمتر از حد مجاز است'),
            address: Yup.string().required('ادرس حتما باید وارد شود').min(5, 'ورودی کمتر از حد مجاز است')
        }),
        onSubmit: async (value) => {
            const expectAt = singleValue && singleValue.getTime()
            const createdAt = new Date()
            const orderData = {
                username: value.firstName,
                lastname: value.lastName,
                address: value.address,
                phone: value.phoneNumber,
                expectAt,
                products: userData,
                createdAt,
                delivered: "false",
                prices
            }
            localStorage.setItem('orderData', JSON.stringify(orderData))
            localStorage.setItem('userId', JSON.stringify(userId))
            navigate(INTERNAL_PATHS.PAYMENT)
        }
    })

    return (
        <PageContainer>
            <main style={{ marginTop: '8rem' }}>
                <div className={Styles.orderregisterheading}>
                    <IoBagCheckOutline />
                    <h3 >نهایی کردن خرید</h3>
                </div>
                <form onSubmit={formik.handleSubmit} >

                    <div className={Styles.inputsparent}>
                        <div className={Styles.inputparent}>
                            {formik.touched.lastName && formik.errors.lastName ? <span className={Styles.validation_message}>{formik.errors.lastName}</span> : ''}
                            <label htmlFor="">نام خانوادگی</label>
                            <FormInput
                                className={Styles.input}
                                name="lastName"
                                id="lastName"
                                placeholder='نام خانوادگی خود را وارد نمایید'
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isvalid={formik.touched.lastName && formik.errors.lastName ? true : false}
                            />
                        </div>
                        <div className={Styles.inputparent}>
                            {formik.touched.firstName && formik.errors.firstName ? <span className={Styles.validation_message}>{formik.errors.firstName}</span> : ''}
                            <label htmlFor="">نام</label>
                            <FormInput
                                className={Styles.input}
                                name="firstName"
                                id="firstName"
                                placeholder='نام خود را وارد نمایید'
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isvalid={formik.touched.firstName && formik.errors.firstName ? true : false}
                            />
                        </div>
                        <div className={Styles.inputparent}>
                            {formik.touched.phoneNumber && formik.errors.phoneNumber ? <span className={Styles.validation_message}>{formik.errors.phoneNumber}</span> : ''}
                            <label htmlFor="">تلفن همراه</label>
                            <FormInput
                                className={Styles.input}
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder=' تلفن همراه خود را وارد نمایید'
                                value={formik.values.phoneNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isvalid={formik.touched.phoneNumber && formik.errors.phoneNumber ? true : false}
                            />
                        </div>
                        <div className={Styles.inputparent}>
                            {formik.touched.address && formik.errors.address ? <span className={Styles.validation_message}>{formik.errors.address}</span> : ''}
                            <label htmlFor="">آدرس</label>
                            <textarea
                                placeholder='آدرس خود را وارد نمایید'
                                className={Styles.inputَAddress}
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} name="address" id="address" cols="30" rows="10"></textarea>
                        </div>
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

                    <Button variant="primary" type='submit' className={Styles.paymentbtn} >پرداخت</Button>
                </form>
            </main>
        </PageContainer>
    );
}

export default OrderRegistrationPage;
