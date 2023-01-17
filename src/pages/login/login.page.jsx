import React from 'react';
import PageContainer from '../../layouts/pageContainer/pageContainer.layout';
import * as Yup from 'yup'
import { useFormik } from 'formik'
import Styles from './login.module.scss'
import FormInput from '../../components/form-input/FormInput.component';
const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }, validationSchema: Yup.object({
            email: Yup.string().email('should be email'),
            password: Yup.string().max(16, "should be number")
        }),
        onSubmit: (value) => {
            console.log(value);
        }
    })

    return (
        <div>
            <PageContainer>
                <div className={Styles.Login}>
                    <form onSubmit={formik.handleSubmit} >
                        <FormInput
                            name={'email'}
                            type='email'
                            id="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            isvalid={formik.touched.email && formik.errors.email ? true : false}
                        />
                        {formik.touched.email && formik.errors.email ? <p>hi</p> : ''}
                        <input
                            name="password"
                            id="password"
                            placeholder='Enter your password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ? <p>hi pass</p> : ''}
                        <button type='submit'>submit</button>
                    </form>
                </div>

            </PageContainer>
        </div>
    );
}

export default Login;
