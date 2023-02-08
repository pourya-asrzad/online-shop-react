import React from 'react';
import { BsCheck2Circle, BsCheckLg } from 'react-icons/bs';
import { RiBuilding2Line } from 'react-icons/ri';
import { FaTruckMoving } from 'react-icons/fa'
import Styles from './cartcard.module.scss'
import TextIcon from './text-icon/TextIcon.component';
import Counter from '../counter/Counter.component';
import { numberWithCommas } from '../../utils/functions.utils';
import { MdDelete } from 'react-icons/md';
import { API_BASE_URL, username } from '../../configs/variables.config';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
const CartCard = ({ img, name, count, productprice = 12000, dataId, setAfterChange, setChangeinCount }) => {
    const price = numberWithCommas(productprice)
    const imageHasHttp = img.includes('https')
    const handelDeleteFromCart = async (productId) => {
        let cartData = null
        let userId = null
        await axios.get(`${API_BASE_URL}mockusers?username=${username}`).then(res => {
            cartData = res.data[0].cart;
            userId = res.data[0].id
        })

        const productIndex = cartData.findIndex((e) => {
            return e.id == productId
        })
        cartData.splice(productIndex, 1)
        await axios.patch(`${API_BASE_URL}mockusers/${userId}`, {
            cart: [...cartData]
        })
        toast.success('کالا با موفقیت حذف شد', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setAfterChange(productId)
    }
    return (
        <>
            <div className={Styles.cartcard}>
                <div className={Styles.cartcardchild}>

                    <div className={Styles.card_right_side}>
                        <div className={Styles.productinfo}>
                            <h2> {name} </h2>
                            <div className={Styles.productinfoiter}>
                                <TextIcon icon={< RiBuilding2Line />}>
                                    پوریا کالا
                                </TextIcon>
                                <TextIcon icon={<BsCheck2Circle />}>
                                    موجود در انبار فروشگاه
                                </TextIcon>
                                <TextIcon icon={<FaTruckMoving />}>
                                    ارسال پوریا کالا تا 1 روز دیگر
                                </TextIcon>

                            </div>
                        </div>
                        <div className={Styles.imageContainer}>
                            <img className={Styles.image} src={imageHasHttp ? img : `http://localhost:3001/files/${img}`} />
                        </div>
                    </div>
                    <div className={Styles.cardfooter}>
                        <div className={Styles.pricecou}>
                            <span>تومان</span>
                            <span>{price}</span>
                        </div>
                        <div className={Styles.counter_container}>
                            <Counter setChangeinCount={setChangeinCount} setAfterChange={setAfterChange} dataId={dataId} number={count} />
                        </div>
                    </div>
                </div>
                <button className={Styles.deletebtn}>
                    <svg id={dataId} onClick={(e) => handelDeleteFromCart(e.target.id)} className={Styles.deleteicon} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path id={dataId} fill="none" d="M0 0h24v24H0z">
                        </path>
                        <path id={dataId} d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>

                </button>
            </div>
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

export default CartCard;
