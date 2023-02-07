import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { RiBuilding2Line } from 'react-icons/ri';
import { FaTruckMoving } from 'react-icons/fa'
import Styles from './cartcard.module.scss'
import TextIcon from './text-icon/TextIcon.component';
import Counter from '../counter/Counter.component';
import { numberWithCommas } from '../../utils/functions.utils';
import { MdDelete } from 'react-icons/md';
const CartCard = ({ img, name, count, productprice = 12000 }) => {
    const price = numberWithCommas(productprice)
    const imageHasHttp = img.includes('https')
    return (
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
                        <Counter number={count} />
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
