import React, { useState } from 'react';
import TitleTextGroup from './TitleTextGroup.component';
import Button from 'react-bootstrap/Button';
import Styles from './InventoryPriceCard.module.scss'
import { numberWithCommas } from '../../utils/functions.utils'
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
const EditProduct = ({ inventory, price, id }) => {
    const pricewithcomma = numberWithCommas(price)
    const dispatch = useDispatch()
    const saveBtn = useSelector(state => state.ui.editBtnToggle_id)
    //handel input value changing 

    function handelEditBtn(e) {
        const { id } = e.target
        dispatch(uiActions.editOnClick(id))
        dispatch(uiActions.iputOnChange({type:'price',value:price}))
        dispatch(uiActions.iputOnChange({type:'inventory',value:inventory}))
    }
    function priceChangeHndeling(e) {
        const {value} =e.target
        dispatch(uiActions.iputOnChange({type:'price',value:value}))
    }
function inventoryChangeHandeling(e) {
    const {value} =e.target

    dispatch(uiActions.iputOnChange({type:'inventory',value:value}))
}
    return (
        <div className={Styles.EditProduct}>
            <div className={Styles.golam}>
                {saveBtn.dataId != id ? <div>
                    <TitleTextGroup title={":قیمت"}>
                        {pricewithcomma}
                    </TitleTextGroup>
                    <TitleTextGroup title={":موجودی"}>
                        {inventory}
                    </TitleTextGroup>

                </div> :
                    <div>
                        <div className={Styles.inputparent}>
                            <label htmlFor="">
                                : قیمت
                            </label>
                            <input onChange={priceChangeHndeling} type="number" value={ saveBtn.price} />
                        </div>
                        <div className={Styles.inputparent}>
                            <label htmlFor="">
                                : موجودی
                            </label>
                            <input onChange={inventoryChangeHandeling} type="number" value={saveBtn.inventory} />
                        </div>
                    </div>
                }

            </div>
        {saveBtn.dataId != id ?    <Button onClick={handelEditBtn} variant="danger" id={id}> ویرایش</Button>:''}
        </div>
    );
}

export default EditProduct;
// 
// (e) => setInputValue(state => {
//     return {
//         ...state, price: e.target.value
//     }
// })