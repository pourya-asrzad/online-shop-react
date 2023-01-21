import React from 'react';
import TitleTextGroup from './TitleTextGroup.component';
import Button from 'react-bootstrap/Button';

const EditProduct = ({ inventory, price }) => {
    return (
        <div>
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
