import React, { useState } from 'react';
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Styles from './login.module.scss'
import FormInput from '../../components/form-input/FormInput.component';
import CompanyName from '../../components/company-name/CompanyName.component';
import { Link } from 'react-router-dom';
import BaseBtn from '../../components/buttons/AddToCartBtn.component'
import { INTERNAL_PATHS } from '../../configs/routs.config';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }, validationSchema: Yup.object({
            email: Yup.string().email('ایمیل خود را به درستی وارد نمایید').required('این فیلد نباید خالی باشد'),
            password: Yup.string().max(16, "ورودی بیش از حد مجاز است").min(5, 'ورودی کمتر از حد مجاز است').required('این فیلد نباید خالی باشد')
        }),
        onSubmit: (value) => {
            console.log(value);
        }
    })

    function showpasswordhandler() {
        setShowPassword(true)
    }
    function hidePasswordHandler() {
        setShowPassword(false)
    }
    return (
        <div>
            <div className={Styles.Login}>
                <CompanyName className={Styles.CompanyName} style={{ color: '#0e62d5' }} />
                <div className={Styles.wellcome}>
                    <span>!سلام</span>
                    <span>🎉به پوریا کالا خوش آمدید</span>
                </div>
                <span className={Styles.loginmassege}>اگر حسابی در پوریا کالا دارید لطفا وارد شوید</span>
                <form onSubmit={formik.handleSubmit} className={Styles.form} >
                    <div className={Styles.input_parent}>

                        <div className={Styles.inputcontainer}>
                            <FormInput
                                className={Styles.input}
                                name={'email'}
                                type='email'
                                placeholder='ایمیل خود را وارد نمایید'
                                id="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                isvalid={formik.touched.email && formik.errors.email ? true : false}
                            />
                            {formik.touched.email && formik.errors.email ? <span className={Styles.validation_message}>{formik.errors.email}</span> : ''}
                        </div>
                        <div className={Styles.inputcontainer}>
                            <FormInput
                                className={Styles.input}
                                name="password"
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder='رمز خود را وارد نمایید'
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isvalid={formik.touched.password && formik.errors.password ? true : false}
                            />
                            {formik.touched.password && formik.errors.password ? <span className={Styles.validation_message}>{formik.errors.password}</span> : ''}
                            {showPassword ? <AiFillEyeInvisible className={Styles.eyeIcon} onClick={hidePasswordHandler} /> : <AiFillEye onClick={showpasswordhandler} className={Styles.eyeIcon} />}
                        </div>
                    </div>
                    <div className={Styles.btns_parent}>

                        <Link style={{ textDecoration: 'none' }} to={INTERNAL_PATHS.SIGNUP}>
                            <div className={Styles.navigatetosignup} style={{ width: "150px" }} >ثبت نام</div>
                        </Link>
                        <BaseBtn style={{ width: "150px" }} type={'submit'}>ورود</BaseBtn>
                    </div>

                </form>
            </div>


        </div>
    );
}

export default Login;