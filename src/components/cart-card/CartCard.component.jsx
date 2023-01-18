import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { RiBuilding2Line } from 'react-icons/ri';
import { FaTruckMoving } from 'react-icons/fa'
import Styles from './cartcard.module.scss'
import TextIcon from './text-icon/TextIcon.component';
import Counter from '../counter/Counter.component';
import { numberWithCommas } from '../../utils/functions.utils';
import { MdDelete } from 'react-icons/md';
const CartCard = () => {
    const price = numberWithCommas(12000000)
    return (
        <div className={Styles.cartcard}>
            <div className={Styles.cartcardchild}>

                <div className={Styles.card_right_side}>
                    <div className={Styles.productinfo}>
                        <h2>آیفون 12 پرومکس</h2>
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
                        <img className={Styles.image} src="https://dkstatics-public.digikala.com/digikala-products/fa5961b7d2a4efb180d686f6f69dd45381a4d3dd_1649056488.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt="آیفون 11 پرومکس" />
                    </div>
                </div>
                <div className={Styles.cardfooter}>
                    <div className={Styles.pricecou}>
                        <span>تومان</span>
                        <span>{price}</span>
                    </div>
                    <div className={Styles.counter_container}>
                        <Counter number={1} />
                    </div>
                </div>
            </div>
            <button className={Styles.deletebtn}>
                <MdDelete className={Styles.deleteicon} />
            </button>
        </div>
    );
}

export default CartCard;
