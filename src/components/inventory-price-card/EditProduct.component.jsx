import React from 'react';
import TitleTextGroup from './TitleTextGroup.component';
import Button from 'react-bootstrap/Button';
import Styles from './InventoryPriceCard.module.scss'
import { numberWithCommas } from '../../utils/functions.utils'
const EditProduct = ({ inventory, price }) => {
    const pricewithcomma = numberWithCommas(price)
    return (
        <div className={Styles.EditProduct}>
            <div className={Styles.golam}>
                <TitleTextGroup title={":قیمت"}>
                    {pricewithcomma}
                </TitleTextGroup>
                <TitleTextGroup title={":موجودی"}>
                    {inventory}
                </TitleTextGroup>
            </div>
            <Button variant="danger"> ویرایش</Button>
        </div>
    );
}

export default EditProduct;
