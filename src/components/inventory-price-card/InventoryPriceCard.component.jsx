import React from 'react';
import EditProduct from './EditProduct.component';
import TitleTextGroup from './TitleTextGroup.component';

const InventoryPriceCard = ({ img, title, price, inventory }) => {
    return (
        <div>
            <div>
                <div>
                    <img src={img} alt={title} />
                </div>
                <div>
                    <div>
                        <h5>
                            :نام کالا
                        </h5>
                        <span>{title}</span>
                    </div>
                    <div>
                        <TitleTextGroup title={":قیمت"}>
                            {price}
                        </TitleTextGroup>
                        <div></div>
                        <TitleTextGroup title={":موجودی"}>
                            {inventory}
                        </TitleTextGroup>
                    </div>
                </div>
            </div>
            <EditProduct price={price} inventory={inventory}></EditProduct>
        </div>
    );
}

export default InventoryPriceCard;
