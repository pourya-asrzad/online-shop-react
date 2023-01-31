import React from 'react';
import GoodsCardBtn from './goods-card-btn/GoodsCardBtn.component';
import { RiFileEditFill } from 'react-icons/ri'
import { AiTwotoneDelete } from 'react-icons/ai'
import Styles from './GoodsCard.module.scss'
import { useFetchcategoryQuery, useFetchsubcategoryQuery } from '../../store/products/productsApiSlice'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { Button } from 'react-bootstrap';

const GoodsCard = ({ img, title, categoryId, onShowModal, subcategoryId, onShowDeleteModal, dataId }) => {
    const [category, setCategory] = useState('')
    const [subcategory, setsubCategory] = useState('')
    const { data: subcategorydata = [] } = useFetchsubcategoryQuery()
    const { data: categorydata = [] } = useFetchcategoryQuery()
    const dispatch = useDispatch()

    const imageHasHttp = img.includes('https')

    useEffect(() => {
        if (subcategorydata.length !== 0) {
            const sub = subcategorydata.filter((element) => {
                return element.id == subcategoryId
            })
            const cat = categorydata.filter((element) => {
                return element.id == categoryId
            })
            sub.map((ele) => {
                setsubCategory(ele.name)
            })
            cat.map((ele) => {
                setCategory(ele.name)
            })
        }

    }, [categorydata, subcategorydata, categoryId, subcategoryId])
    function deleteModalShowd(id) {
        dispatch(uiActions.setSelectedProductId(id))
        onShowDeleteModal()
    }
    return (
        <div className={Styles.GoodsCard}>
            <div className={Styles.btns_container}>
                <Button id={dataId} onClick={(e) => onShowModal(state => {
                    return state = {
                        show: true,
                        editId: e.target.id
                    }
                })} variant={"primary"} >
                    ویرایش
                </Button>
                <GoodsCardBtn id={dataId} variant={"danger"} onclick={deleteModalShowd} >
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
                            {`${category}  /  ${subcategory}`}
                        </span>
                        <h5 >
                            :   دسته بندی
                        </h5>
                    </div>
                </div>
                <div className={Styles.imagecontainer}>
                    <img src={imageHasHttp ? img : `http://localhost:3001/files/${img}`} alt={title} />
                </div>
            </div>
        </div>
    );
}

export default GoodsCard;
