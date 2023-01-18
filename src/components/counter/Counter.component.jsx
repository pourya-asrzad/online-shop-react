import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { RiDeleteBinLine } from 'react-icons/ri';
import Styles from './counter.module.scss'
const Counter = ({ number = 1 }) => {
    const [num, setNum] = useState(number);
    function increaseNum() {
        setNum(state => state + 1)
    }
    function decreaseNum() {
        setNum(state => state - 1)
    }
    return (
        <div className={Styles.counter}>
            <button>
                {num === 1 ? <RiDeleteBinLine className={Styles.icon} /> : <AiOutlineMinus onClick={decreaseNum} className={Styles.icon} />}
            </button>
            <span style={{ color: 'red', userSelect: 'none' }}>{num}</span>
            <button>

                <AiOutlinePlus onClick={increaseNum} className={Styles.icon} />
            </button>
        </div>
    );
}

export default Counter;
