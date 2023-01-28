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
    const [inputValue, setInputValue] = useState({
        price,
        inventory
    });
    function handelEditBtn(e) {
        const { id } = e.target
        dispatch(uiActions.editOnClick(id))
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
                            <input onChange={(e) => setInputValue(state => {
                                return {
                                    ...state, price: e.target.value
                                }
                            })} type="number" value={inputValue.price} />
                        </div>
                        <div className={Styles.inputparent}>
                            <label htmlFor="">
                                : موجودی
                            </label>
                            <input onChange={(e) => setInputValue(state => {
                                return {
                                    ...state, inventory: e.target.value
                                }
                            })} type="number" value={inputValue.inventory} />
                        </div>
                    </div>
                }

            </div>
            <Button onClick={handelEditBtn} variant="danger" id={id}> ویرایش</Button>
        </div>
    );
}

export default EditProduct;
