import React from 'react';
import { HiBuildingStorefront } from 'react-icons/hi2'
import { BsShieldCheck } from 'react-icons/bs'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { numberWithCommas } from '../../utils/functions.utils';
import Styles from './AddToCartSector.module.scss'
import Hr from '../hr/Hr.component';
import AddToCartBtn from '../buttons/AddToCartBtn.component';
const AddToCartSector = () => {
    const price = numberWithCommas(10000000)
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
                    <span>
                        {price}
                    </span>
                    <div>
                        <span>
                            قیمت مصرف کننده
                        </span>
                        <AiOutlineExclamationCircle />
                    </div>
                </div>
                <AddToCartBtn className={Styles.addToCartBtn} >افزودن به سبد خرید</AddToCartBtn>
            </div>
        </div>
    );
}

export default AddToCartSector;
