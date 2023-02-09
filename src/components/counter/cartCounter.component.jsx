import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { API_BASE_URL, username } from '../../configs/variables.config';
import Styles from './counter.module.scss'
import { uiActions } from '../../store/ui-slice';
const CardCounter = ({ number = 1, setAddedToCart, quantity, setIsInCart }) => {
    const [num, setNum] = useState(number);
    const productId = useParams()
    const dispatch = useDispatch()
    const increaseNum = async () => {
        let cartData = null
        let userId = null
        await axios.get(`${API_BASE_URL}mockusers?username=${username}`).then(res => {
            cartData = res.data[0].cart;
            userId = res.data[0].id
        })

        const productIndex = cartData.findIndex((e) => {
            return e.id == productId.id
        })

        const productObj = cartData[productIndex]
        if (quantity > productObj.count) {
            productObj.count += 1
            cartData.splice(productIndex, 1)
            await axios.patch(`${API_BASE_URL}mockusers/${userId}`, {
                cart: [...cartData, productObj]
            })
            setNum(state => state + 1)
            dispatch(uiActions.changeNotification(+new Date()))
        }
    }
    const decreaseNum = async () => {
        let cartData = null
        let userId = null
        await axios.get(`${API_BASE_URL}mockusers?username=${username}`).then(res => {
            cartData = res.data[0].cart;
            userId = res.data[0].id
        })

        const productIndex = cartData.findIndex((e) => {
            return e.id == productId.id
        })

        const productObj = cartData[productIndex]
        productObj.count -= 1
        cartData.splice(productIndex, 1)
        await axios.patch(`${API_BASE_URL}mockusers/${userId}`, {
            cart: [...cartData, productObj]
        })
        dispatch(uiActions.changeNotification(+new Date()))

        setNum(state => state - 1)
    }
    const handelDeleteFromCart = async () => {
        let cartData = null
        let userId = null
        await axios.get(`${API_BASE_URL}mockusers?username=${username}`).then(res => {
            cartData = res.data[0].cart;
            userId = res.data[0].id
        })

        const productIndex = cartData.findIndex((e) => {
            return e.id == productId.id
        })

        cartData.splice(productIndex, 1)

        await axios.patch(`${API_BASE_URL}mockusers/${userId}`, {
            cart: [...cartData]
        })
        setAddedToCart(false)
        setIsInCart(false)
        dispatch(uiActions.changeNotification(+new Date()))

    }
    return (
        <div className={Styles.countercard}>
            <button style={{ display: 'contents' }}>
                {num === 1 ? <RiDeleteBinLine onClick={handelDeleteFromCart} className={Styles.icon} /> : <AiOutlineMinus onClick={decreaseNum} className={Styles.icon} />}
            </button>
            <span style={{ color: 'red', userSelect: 'none' }}>{num}</span>
            <button style={{ display: 'contents' }}>
                <AiOutlinePlus onClick={increaseNum} className={Styles.icon} />
            </button>
        </div>
    );
}

export default CardCounter;
