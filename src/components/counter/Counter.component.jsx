import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { API_BASE_URL, username } from '../../configs/variables.config';
import Styles from './counter.module.scss'
const Counter = ({ number = 1, dataId, setAfterChange, setChangeinCount }) => {
    // const [num, setNum] = useState(number);
    const increaseNum = async () => {
        let cartData = null
        let userId = null
        await axios.get(`${API_BASE_URL}mockusers?username=${username}`).then(res => {
            cartData = res.data[0].cart;
            userId = res.data[0].id
        })

        const productIndex = cartData.findIndex((e) => {
            return e.id == dataId
        })


        const productObj = cartData[productIndex]

        let quantity = 0
        await axios.get(`${API_BASE_URL}products/${dataId}`).then((res) => {
            quantity = res.data.quantity
        })
        setChangeinCount(Math.random())
        if (quantity > productObj.count) {
            productObj.count += 1
            cartData.splice(productIndex, 1)
            await axios.patch(`${API_BASE_URL}mockusers/${userId}`, {
                cart: [...cartData, productObj]
            })
            // setNum(state => state + 2)
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
            return e.id == dataId
        })

        const productObj = cartData[productIndex]
        productObj.count -= 1
        cartData.splice(productIndex, 1)
        await axios.patch(`${API_BASE_URL}mockusers/${userId}`, {
            cart: [...cartData, productObj]
        })
        // setNum(state => state - 2)
        setChangeinCount(Math.random())

    }
    const handelDeleteFromCart = async () => {

        let cartData = null
        let userId = null
        await axios.get(`${API_BASE_URL}mockusers?username=${username}`).then(res => {
            cartData = res.data[0].cart;
            userId = res.data[0].id
        })

        const productIndex = cartData.findIndex((e) => {
            return e.id == dataId
        })

        cartData.splice(productIndex, 1)
        await axios.patch(`${API_BASE_URL}mockusers/${userId}`, {
            cart: [...cartData]
        })
        // setAddedToCart(false)
        setAfterChange(dataId)
    }

    return (
        <div className={Styles.counter}>
            <button style={{ display: 'contents' }}>
                {number == 1 ? <RiDeleteBinLine onClick={handelDeleteFromCart} className={Styles.icon} /> : <AiOutlineMinus onClick={decreaseNum} className={Styles.icon} />}
            </button>
            <span style={{ color: 'red', userSelect: 'none' }}>{number}</span>
            <button style={{ display: 'contents' }}>

                <AiOutlinePlus onClick={increaseNum} className={Styles.icon} />
            </button>
        </div>
    );
}

export default Counter;
