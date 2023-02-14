import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import * as Yup from 'yup'
import { useFormik } from 'formik'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormInput from '../form-input/FormInput.component';
import Styles from './modals.module.scss'
import { EditorState } from 'draft-js';
import FileInput from './FileInput.component';
import FormSelect from '../Form-select/FormSelect.component';
import { BiCategory } from 'react-icons/bi'
import { useMemo, useState } from 'react';
import { API_BASE_URL } from '../../configs/variables.config';
import axios from 'axios';
import { useCreateProductMutation } from '../../store/products/productsApiSlice';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useRef } from "react";
function GoodsModal(props) {

    const [file, setFile] = useState(false)
    const [imageIds, setImageId] = useState([])
    const [category, setCategory] = useState(undefined);
    const [subcategory, setSubcategory] = useState(undefined);
    const [error, setError] = useState('');
    const REQUIRED_MASSEGE = 'این فیلد نباید خالی باشد'
    const [addproduct, { isLoading }] = useCreateProductMutation()
    const [changeSubcategory, setchangeSubcategory] = useState(null);
    const [description, setDescription] = useState(EditorState.createEmpty())
    const [descriptionVaue, setDescriptionValue] = useState(null)
    const [descriptionError, setDescriptionError] = useState(false)
    const [editorIstouched, setEditorIsTouched] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: '',
            categoryId: "",
            price: "",
            quantity: "",
            Discount: '',
        }, validationSchema: Yup.object({
            name: Yup.string().required(REQUIRED_MASSEGE).min(3, 'ورودی کمتر از حد مجاز است'),
            price: Yup.string().required(REQUIRED_MASSEGE),
            quantity: Yup.string().required(REQUIRED_MASSEGE)

        }),
        onSubmit: async (value) => {

            try {
                if (imageIds.length > 0 && category !== 'null' && subcategory !== 'null' && category !== undefined && subcategory !== undefined && descriptionError) {
                    const res = await addproduct({
                        category: category,
                        subcategory: subcategory,
                        Discount: value.Discount,
                        name: value.name,
                        image: imageIds,
                        description: descriptionVaue,
                        createdAt: Date.now(),
                        price: value.price,
                        quantity: value.quantity,
                        store: "admin",
                        "fillStrip": {
                            "pricevalue": 70,
                            "quality": 50,
                            "packing": 60
                        }
                    }).unwrap()
                    props.handelClose(state => {
                        return state = {
                            ...state,
                            show: false,
                        }
                    })
                    toast.success('کالا با موفقیت افزوده شد', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                } else if (imageIds.length === 0) {
                    setError('عکس  آپلود نشده');
                } else if (category == undefined || category == 'null') {
                    setError('دسته بندی انتخاب نشده');

                } else if (subcategory == undefined || subcategory == 'null') {
                    setError('زیر مجموعه دسته بندی انتخاب نشده');
                }

            } catch (e) {
                alert(e.message)
            }
            // setError('')
        }
    })

    function handelSelectChangeCategory(value) {
        setchangeSubcategory(value)
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
    function descriptionChange(value) {
        setDescription(value)
        setDescriptionError(false)
        setDescriptionValue(value.getCurrentContent().getPlainText())

        if (value.getCurrentContent().getPlainText().trim().length !== 0) {
            setDescriptionError(true)
        }
    }

    return (
        <>
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
                                            <FormSelect changeSubcategoryid={changeSubcategory} placeholder="انتخاب نشده" handelSelectChange={handelSelectChangeSubcategory} subcategory={true} />
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
                                    <FormInput placeholder={' درصد'} min={1} max={100} onChange={formik.handleChange}
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
                            {!descriptionError && editorIstouched ? <span style={{
                                right: ' 62px',
                                bottom: '-9px',
                            }} className={Styles.validation_message}>قسمت توضیحات نباید خالی باشد</span> : ''}
                            <label htmlFor="descrption" style={{ marginRight: '9px ' }}>:توضیحات</label>
                            <Editor
                                onBlur={() => setEditorIsTouched(true)}
                                editorState={description}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                onEditorStateChange={descriptionChange}
                            />;
                        </section>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='success' type='submit' >افزودن</Button>
                    </Modal.Footer>
                </form>
            </Modal>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />

        </>
    );
}


export default GoodsModal