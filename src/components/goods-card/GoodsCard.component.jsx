import React from 'react';
import GoodsCardBtn from './goods-card-btn/GoodsCardBtn.component';
import { RiFileEditFill } from 'react-icons/ri'
import { AiTwotoneDelete } from 'react-icons/ai'
import Styles from './GoodsCard.module.scss'
const GoodsCard = ({ img, title, category, onShowModal }) => {

    return (
        <div className={Styles.GoodsCard}>
            <div className={Styles.btns_container}>
                <GoodsCardBtn onclick={() => onShowModal(true)} variant={"primary"} icon={<RiFileEditFill />}>
                    ویرایش
                </GoodsCardBtn>
                <GoodsCardBtn variant={"danger"} icon={<AiTwotoneDelete />}>
                    حذف
                </GoodsCardBtn>
            </div>
            <div className={Styles.card_rigth_side}>
                <div className={Styles.detailsparent}>
                    <div className={Styles.detailscontainer}>
                        <span>{title}</span>
                        <h5>:نام کالا </h5>
                    </div>
                    <div className={Styles.detailscontainer}>
                        <span>
                            {category}
                        </span>
                        <h5 >
                            :   دسته بندی
                        </h5>
                    </div>
                </div>
                <div className={Styles.imagecontainer}>
                    <img src={img} alt={title} />
                </div>
            </div>
        </div>
    );
}

export default GoodsCard;
