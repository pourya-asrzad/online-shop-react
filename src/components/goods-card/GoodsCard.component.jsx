import React from 'react';
import GoodsCardBtn from './goods-card-btn/GoodsCardBtn.component';
import { RiFileEditFill } from 'react-icons/ri'
import { AiTwotoneDelete } from 'react-icons/ai'
import Styles from './GoodsCard.module.scss'
const GoodsCard = ({ img, title, category }) => {
    return (
        <div className={Styles.GoodsCard}>
            <div>
                <GoodsCardBtn icon={<RiFileEditFill />}>
                    ویرایش
                </GoodsCardBtn>
                <GoodsCardBtn icon={<AiTwotoneDelete />}>
                    حذف
                </GoodsCardBtn>
            </div>
            <div className={Styles.card_rigth_side}>
                <div>
                    <span>
                        نام کالا:{title}
                    </span>
                    <span>
                        دسته بندی:{category}
                    </span>
                </div>
                <div className={Styles.imagecontainer}>
                    <img src={img} alt={title} />
                </div>
            </div>
        </div>
    );
}

export default GoodsCard;
