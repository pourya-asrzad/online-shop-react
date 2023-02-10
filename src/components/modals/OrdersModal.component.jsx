import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { API_BASE_URL } from '../../configs/variables.config';
import FormInput from '../form-input/FormInput.component';
import TitleTextGroup from '../inventory-price-card/TitleTextGroup.component';
import Styles from './modals.module.scss'
import OrdersTabel from './OrdersTabel.component';
import { ToastContainer, toast } from 'react-toastify';
import { getDateToJalaliFormat } from '../../utils/functions.utils';
import { useChangeDeliveryMutation } from '../../store/products/productsApiSlice';
function OrdersModal(props) {
    const [orderData, setOrderData] = useState()
    const { id } = useSelector(state => state.ui.showOrderMenu_id)
    const [changedelivered] = useChangeDeliveryMutation()
    useEffect(() => {
        if (id !== null) {
            axios.get(`${API_BASE_URL}orders/${+id}`).then((res) => {
                setOrderData(res.data)
            })
        }
    })



    const createdAt = orderData && getDateToJalaliFormat(orderData.createdAt)
    const expectAt = orderData && getDateToJalaliFormat(orderData.expectAt)
    const deliverytime = orderData && orderData.deliverytime && getDateToJalaliFormat(orderData.deliverytime)
    const addToDelivered = async () => {
        if (id !== null) {
            await changedelivered(id)
        }
        props.onHide()
        toast.success('وضعیت سفارش تغییر کرد', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <>
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
                            {orderData && orderData.username}
                        </TitleTextGroup>
                        <TitleTextGroup title={':آدرس'}>
                            {orderData && orderData.address}
                        </TitleTextGroup>
                        <TitleTextGroup title={':تلفن'}>
                            {orderData && orderData.phone}
                        </TitleTextGroup>
                        <TitleTextGroup title={':زمان تحویل'}>
                            {expectAt}
                        </TitleTextGroup>
                        <TitleTextGroup title={': زمان سفارش'}>
                            {createdAt}
                        </TitleTextGroup>

                    </section>
                    <section className={Styles.tabelSection}>
                        <OrdersTabel orderData={orderData && orderData.products} />
                    </section>
                </Modal.Body>
                <Modal.Footer className={Styles.ordermodalfooter}>
                    {orderData && orderData.delivered == "false" ? < Button variant="success" onClick={addToDelivered}>تحویل شد</Button> : <span>{deliverytime}:زمان تحویل</span>}
                </Modal.Footer>
            </Modal >
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


export default OrdersModal