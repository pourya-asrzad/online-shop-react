import React from 'react';
import EditProduct from './EditProduct.component';
import TitleTextGroup from './TitleTextGroup.component';
import Styles from './InventoryPriceCard.module.scss'
import { numberWithCommas } from '../../utils/functions.utils';

const InventoryPriceCard = ({ img, title, price, inventory, id }) => {

    const pricewithcomma = numberWithCommas(price)

    return (
        <div className={Styles.inventCard} >
            <EditProduct id={id} price={price} inventory={inventory}></EditProduct>
            <div className={Styles.cardimageside}>
                <div className={Styles.inventorydetailparent}>
                    <TitleTextGroup title={":نام کالا"}>
                        {title}
                    </TitleTextGroup>
                    <div className={Styles.invenbuttom}>
                        <TitleTextGroup title={":قیمت"}>
                            <div className={Styles.priceparent}>
                                <span style={{ marginRight: '3px' }}>{"تومان"}</span>
                                <span>{pricewithcomma}</span>

                            </div>

                        </TitleTextGroup>
                        <div className='height-hr'></div>
                        <TitleTextGroup title={":موجودی"}>
                            {inventory}
                        </TitleTextGroup>
                    </div>
                </div>
                <div className={Styles.imageContainer}>
                    <img src={img} alt={title} />
                </div>
            </div>
        </div>
    );
}

export default InventoryPriceCard;
