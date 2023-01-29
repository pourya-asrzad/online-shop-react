import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormInput from '../form-input/FormInput.component';
import TitleTextGroup from '../inventory-price-card/TitleTextGroup.component';
import Styles from './modals.module.scss'
import OrdersTabel from './OrdersTabel.component';

function OrdersModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    بررسی سفارش
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={Styles.ordersmodalbody}>
                <section className={Styles.ordermaninfo}>
                    <TitleTextGroup title={':نام'}>
                        اکبر زمانی
                    </TitleTextGroup>
                    <TitleTextGroup title={':آدرس'}>
                        تهران,خیابان طوس,کوچه عربی
                    </TitleTextGroup>
                    <TitleTextGroup title={':زمان تحویل'}>
                        1400-5-20
                    </TitleTextGroup>
                    <TitleTextGroup title={': زمان سفارش'}>
                        1400-7-31
                    </TitleTextGroup>

                </section>
                <section className={Styles.tabelSection}>
                    <OrdersTabel />
                </section>
            </Modal.Body>
            <Modal.Footer className={Styles.ordermodalfooter}>
                <Button variant="success" onClick={props.onHide}>تحویل شد</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default OrdersModal