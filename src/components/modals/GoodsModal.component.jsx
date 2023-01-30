import * as Yup from 'yup'
import { useFormik } from 'formik'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormInput from '../form-input/FormInput.component';
import Styles from './modals.module.scss'
import FileInput from './FileInput.component';
import FormSelect from '../Form-select/FormSelect.component';
import { BiCategory } from 'react-icons/bi'
import { useState } from 'react';
import { API_BASE_URL } from '../../configs/variables.config';
import axios from 'axios';
import SaveBtnComponent from '../buttons/SaveBtn.component';
import { useAddProductMutation } from '../../store/products/addProductApiSlice';
function GoodsModal(props) {
    const [file, setFile] = useState(false)
    const [imageIds, setImageId] = useState([])
    const [category, setCategory] = useState(undefined);
    const [subcategory, setSubcategory] = useState(undefined);
    const [error, setError] = useState('');
    const REQUIRED_MASSEGE = 'این فیلد نباید خالی باشد'
    const [addproduct, { isLoading }] = useAddProductMutation()

    const formik = useFormik({
        initialValues: {
            name: "",
            categoryId: "",
            price: "",
            quantity: "",
            Discount: '',
            description: ""
        }, validationSchema: Yup.object({
            name: Yup.string().required(REQUIRED_MASSEGE).min(3, 'ورودی کمتر از حد مجاز است'),
            description: Yup.string().required('این فیلد نباید خالی باشد').min(20, 'ورودی کمتر از حد مجاز است'),
            price: Yup.string().required(REQUIRED_MASSEGE),
            quantity: Yup.string().required(REQUIRED_MASSEGE)

        }),
        onSubmit: async (value) => {
            try {
                if (imageIds.length > 0 && category && subcategory) {
                    console.log(value, imageIds);
                    const res = await addproduct({
                        category: category,
                        subcategory: subcategory,
                        Discount: value.Discount,
                        name: value.name,
                        image: imageIds,
                        description: value.description,
                        createdAt: Date.now(),
                        price: value.price,
                        quantity: value.quantity,
                        store: "admin"
                    }).unwrap()
                } else if (imageIds.length === 0) {
                    setError('عکس انتخاب آپلود نشده');
                } else if (category === undefined) {
                    setError('دسته بندی انتخاب نشده');
                } else if (subcategory === undefined) {
                    setError('زیر مجموعه دسته بندی انتخاب نشده');
                }
            } catch (e) {
                alert(e.message)
            }
            setError('')
        }
    })

    function handelSelectChangeCategory(value) {

        setCategory(value)
    }
    const addProduct = async () => {
        try {
            if (file) {
                if (imageIds.length === 3) {
                    return setError('فقط  سه عدد  عکس  میتوانید اضافه کنید')
                }
                const formData = new FormData();
                formData.append("image", file);
                await axios.post(`${API_BASE_URL}upload`, formData).then((res) => {
                    if (res.status == 200) {
                        alert('عکس با موفقیت آپلود شد')
                    }
                    setImageId(state => {
                        if (state.length < 3) {
                            return state = [...state, res.data.filename]
                        }
                    })
                })
            }
        } catch (error) {
            setError(error.message)
        }
        setError('')
    }

    function handelSelectChangeSubcategory(value) {
        setSubcategory(value)

    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{ position: 'relative' }} closeButton >
                <span className={Styles.generalerror}>{error}</span>
                <Modal.Title id="contained-modal-title-vcenter">
                    افزودن کالا
                </Modal.Title>
            </Modal.Header>
            <div className={Styles.uploadBtnParent} >
                {file ? < Button onClick={addProduct} type='button' style={{ width: '5rem' }} value={'primary'}>آپلود</Button> : ''}
            </div>
            <form onSubmit={formik.handleSubmit}>
                <Modal.Body>


                    <FileInput setFile={setFile} />

                    <div className={Styles.ghost}></div>
                    <section className={Styles.inputssection}>
                        <div className={Styles.firstRowParent}>
                            <div className='flex a-c'>
                                <div className={Styles.selectparent}>
                                    <div className={Styles.selectionGroup}>
                                        <span>دسته بندی</span>
                                        <FormSelect placeholder="انتخاب نشده" handelSelectChange={handelSelectChangeCategory} />
                                    </div>
                                    <div className={Styles.selectionGroup}>
                                        <span>زیرمجموعه</span>
                                        <FormSelect placeholder="انتخاب نشده" handelSelectChange={handelSelectChangeSubcategory} subcategory={true} />
                                    </div>
                                </div>

                            </div>
                            <div className={Styles.inputparent}>
                                {formik.touched.name && formik.errors.name ? <span className={Styles.validation_message}>{formik.errors.name}</span> : ''}
                                <FormInput
                                    placeholder={'نام کالا را وارد کنید'}
                                    className={Styles.input} id={'name'} name={'name'} type='text' onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                    isvalid={formik.touched.name && formik.errors.name ? true : false}
                                />
                                <label htmlFor="productname">:نام کالا</label>
                            </div>
                        </div>
                        <div className={Styles.numbersiderow}>

                            <div className={Styles.inputparentnubmer}>
                                <FormInput placeholder={' درصد'} min={0} max={100} onChange={formik.handleChange}
                                    value={formik.values.Discount}
                                    className={Styles.inputnumber} id={'Discount'} name={'Discount'} type='number' />
                                <label htmlFor="Discount">: تخفیف(اختیاری)</label>
                            </div>
                            <div className={Styles.inputparentnubmer}>
                                {formik.touched.quantity && formik.errors.quantity ? <span className={Styles.validation_message}>{formik.errors.quantity}</span> : ''}
                                <FormInput min={1} onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.quantity}
                                    isvalid={formik.touched.quantity && formik.errors.quantity ? true : false} className={Styles.inputnumber} id={'quantity'} name={'quantity'} type='number' />
                                <label htmlFor="quantity">: موجودی</label>
                            </div>
                            <div className={Styles.inputparentnubmer}>
                                {formik.touched.price && formik.errors.price ? <span className={Styles.validation_message}>{formik.errors.price}</span> : ''}
                                <FormInput min={1} onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.price}
                                    isvalid={formik.touched.price && formik.errors.price ? true : false} className={Styles.inputnumberprice} id={'price'} name={'price'} type='number' />
                                <label htmlFor="price">: قیمت</label>
                            </div>
                        </div>
                        {formik.touched.description && formik.errors.description ? <span style={{
                            right: ' 62px',
                            bottom: '-9px',
                        }} className={Styles.validation_message}>{formik.errors.description}</span> : ''}
                        <label htmlFor="descrption" style={{ marginRight: '9px ' }}>:توضیحات</label>
                        <textarea placeholder={' توضیحات لازم درباره محصول تان را وارد کنید'} onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.description}
                            className={formik.touched.description && formik.errors.description ? Styles.textareahasError : Styles.textarea} name="description" id="description" cols="40" rows="5"></textarea>
                    </section>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='success' type='submit' >افزودن</Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
}


export default GoodsModal