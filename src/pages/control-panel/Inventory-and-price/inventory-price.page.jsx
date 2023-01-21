import React from 'react';
import { Helmet } from 'react-helmet';
import { getAppTitle } from '../../../utils/functions.utils'
import PanelTopTitle from '../../../components/panel-top-title/PanelTopTitle.component';
import Styles from './inventory-price.module.scss'
import { data } from '../../../database/db.exampel';
import InventoryPriceCard from '../../../components/inventory-price-card/InventoryPriceCard.component';
const InventoryPrice = () => {

    const appTittle = getAppTitle()
    return (
        <>
            <Helmet>
                <title>   پنل مدیریت {appTittle} | موجودی و قیمت</title>
            </Helmet>
            <div className={Styles.inventory_header}>
                <PanelTopTitle color={'blue'}>
                    مدیریت موجودی و قیمت ها
                </PanelTopTitle>
            </div>
            <div style={{ height: '64px' }} id="inventgost"></div>
            <main>
                {data.map((element) => {
                    return (
                        <InventoryPriceCard
                            price={element.price}
                            title={element.productName}
                            inventory='100'
                            img={element.image} key={element.id} />
                    )
                })}
            </main>
        </>
    );
}

export default InventoryPrice;
