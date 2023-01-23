import React from 'react';
import TitleTextGroup from './TitleTextGroup.component';
import Button from 'react-bootstrap/Button';
import Styles from './InventoryPriceCard.module.scss'

const EditProduct = ({ inventory, price }) => {
    return (
        <div className={Styles.EditProduct}>
            <div>
                <TitleTextGroup title={":قیمت"}>
                    {price}
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
