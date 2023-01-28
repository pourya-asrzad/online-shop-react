import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormInput from '../form-input/FormInput.component';
import Styles from './modals.module.scss'
import FileInput from './FileInput.component';
import FormSelect from '../Form-select/FormSelect.component';
import { BiCategory } from 'react-icons/bi'
function GoodsModal(props) {
    function handelSelectChange() {

    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    افزودن کالا
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FileInput />
                <div className={Styles.ghost}></div>
                <section className={Styles.inputssection}>
                    <div className={Styles.firstRowParent}>
                        <div className='flex a-c'>
                            <FormSelect handelSelectChange={handelSelectChange} />
                            < BiCategory style={{
                                width: '23px',
                                height: ' 24px'
                            }} />
                        </div>
                        <div className={Styles.inputparent}>
                            <FormInput className={Styles.input} id={'productname'} name={'productname'} type='text' />
                            <label htmlFor="productname">:نام کالا</label>
                        </div>
                    </div>
                    <div className={Styles.numbersiderow}>

                        <div className={Styles.inputparentnubmer}>
                            <FormInput className={Styles.inputnumber} id={'productname'} name={'productname'} type='number' />
                            <label htmlFor="productname">: تخفیف(اختیاری)</label>
                        </div>
                        <div className={Styles.inputparentnubmer}>
                            <FormInput className={Styles.inputnumber} id={'productname'} name={'productname'} type='number' />
                            <label htmlFor="productname">: موجودی</label>
                        </div>
                        <div className={Styles.inputparentnubmer}>
                            <FormInput className={Styles.inputnumberprice} id={'productname'} name={'productname'} type='number' />
                            <label htmlFor="productname">: قیمت</label>
                        </div>
                    </div>
                    <label htmlFor="descrption" style={{ marginRight: '9px ' }}>:توضیحات</label>
                    <textarea className={Styles.textarea} name="descrption" id="descrption" cols="40" rows="5"></textarea>
                </section>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>افزودن</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default GoodsModal