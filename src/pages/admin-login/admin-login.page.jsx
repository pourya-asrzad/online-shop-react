import React, { useState } from 'react';
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Styles from './admin-login.module.scss'
import FormInput from '../../components/form-input/FormInput.component';
import CompanyName from '../../components/company-name/CompanyName.component';
import { Link, useNavigate } from 'react-router-dom';
import BaseBtn from '../../components/buttons/AddToCartBtn.component'
import { INTERNAL_PATHS } from '../../configs/routs.config';
import axios from 'axios';
const AdminLogin = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const [error, setError] = useState('')
    const formik = useFormik({
        initialValues: {
            userName: '',
            password: ''
        }, validationSchema: Yup.object({
            userName: Yup.string().required('این فیلد نباید خالی باشد'),
            password: Yup.string().max(16, "ورودی بیش از حد مجاز است").min(5, 'ورودی کمتر از حد مجاز است').required('این فیلد نباید خالی باشد')
        }),
        onSubmit: (value) => {
            const username = value.userName
            const password = value.password
            axios.post("http://localhost:5000/api/auth/login", {
                username,
                password,
            })
                .then((response) => {

                    localStorage.setItem(
                        "login",
                        JSON.stringify({
                            userLogin: true,
                            token: response.data.access_token,
                        })
                    );

                    navigate(INTERNAL_PATHS.CONTROLPANEL)
                })
                .catch((error) => setError(error.response.data.message));
            // console.log(value);
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
                {error ? <span style={{ color: 'red' }} className={Styles.loginmassege}>{error}</span> : <span className={Styles.loginmassege}>اگر حسابی در پوریا کالا دارید لطفا وارد شوید</span>}
                <form onSubmit={formik.handleSubmit} className={Styles.form} >
                    <div className={Styles.input_parent}>

                        <div className={Styles.inputcontainer}>
                            <FormInput
                                className={Styles.input}
                                name={'userName'}
                                type='text'
                                placeholder='نام کاربری خود را وارد نمایید'
                                id="userName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.userName}
                                isvalid={formik.touched.userName && formik.errors.userName ? true : false}
                            />
                            {formik.touched.userName && formik.errors.userName ? <span className={Styles.validation_message}>{formik.errors.userName}</span> : ''}
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
                        <BaseBtn style={{ width: "100%" }} type={'submit'}>ورود</BaseBtn>
                    </div>

                </form>
            </div>


        </div>
    );
}

export default AdminLogin;