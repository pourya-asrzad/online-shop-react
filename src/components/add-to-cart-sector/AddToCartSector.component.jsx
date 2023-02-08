import React, { useEffect } from 'react';
import { HiBuildingStorefront } from 'react-icons/hi2'
import { BsCheckLg, BsShieldCheck } from 'react-icons/bs'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { numberWithCommas } from '../../utils/functions.utils';
import Styles from './AddToCartSector.module.scss'
import Hr from '../hr/Hr.component';
import AddToCartBtn from '../buttons/AddToCartBtn.component';
import Counter from '../counter/Counter.component';
import CardCounter from '../counter/cartCounter.component';
import { API_BASE_URL, username } from '../../configs/variables.config';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const AddToCartSector = ({ price, quantity, id, name, image, discount }) => {
    const lastPrice = discount ? price - price * discount / 100 : price
    const priceWithComma = numberWithCommas(lastPrice)
    const productId = useParams()
    const [isInCart, setIsInCart] = useState()
    const [count, setCount] = useState()
    const [addedToCart, setAddedToCart] = useState(false)
    useEffect(() => {
        axios.get(`${API_BASE_URL}mockusers?username=${username}`).then(res => {
            const hasId = res.data[0].cart.filter((ele) => {
                return ele.id == productId.id
            })
            setCount(hasId[0].count)
            setIsInCart(hasId.length > 0)
        })
    }, [])



    const addToCartHandeling = async () => {
        let cartData = null
        await axios.get(`${API_BASE_URL}mockusers?username=${username}`).then(res => {
            cartData = { cart: res.data[0].cart, id: res.data[0].id }
        })
        await axios.patch(`${API_BASE_URL}mockusers/${cartData.id}`, {
            cart: [...cartData.cart, { name, id, image, price: lastPrice, count: 1 }]
        })

        setAddedToCart(true)
    }

    return (
        <div className={Styles.AddToCartSector}>
            <div>


                <span className={Styles.saler}>فروشنده</span>
                <div className={Styles.store_Name}>
                    <span>پوریا کالا</span>
                    <HiBuildingStorefront className={Styles.storeicon} />
                </div>
                <Hr className={Styles.hr} />
                <div>
                    <div className={Styles.span_icon}>
                        <span className={Styles.span}>موجود در فروشگاه</span>
                        <BsShieldCheck className={Styles.checkedicon} />
                    </div>
                    <Hr className={Styles.hr} />
                    <div className={Styles.span_icon}>
                        <span className={Styles.span}>گارانتی اصالت و سلامت فیزیکی کالا</span>
                        <BsShieldCheck className={Styles.checkedicon2} />
                    </div>
                    <Hr className={Styles.hr} />

                </div>
            </div>
            <div>


                <div className={Styles.cardpricepart}>
                    <div className={Styles.pricegroup} style={{ direction: 'rtl' }}>
                        {quantity == 0 ?
                            <span>ناموجود</span>
                            :
                            <>
                                <span>
                                    {priceWithComma}
                                </span>
                                <span>
                                    تومان
                                </span>
                                <div className={discount ? Styles.discount : ''}> <span>{discount ? discount + "%" : ''}</span></div>

                            </>
                        }
                    </div>
                    <div>
                        <span>
                            قیمت مصرف کننده
                        </span>
                        <AiOutlineExclamationCircle />
                    </div>
                </div>
                {quantity == 0 ? '' : <>
                    {isInCart || addedToCart ? <CardCounter setIsInCart={setIsInCart} quantity={quantity} setAddedToCart={setAddedToCart} number={count} /> : <AddToCartBtn onclick={addToCartHandeling} className={Styles.addToCartBtn} >افزودن به سبد خرید</AddToCartBtn>
                    }
                </>
                }

            </div>
        </div>
    );
}

export default AddToCartSector;
