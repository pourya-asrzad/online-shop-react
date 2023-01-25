import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { getAppTitle } from '../../../utils/functions.utils'
import PanelTopTitle from '../../../components/panel-top-title/PanelTopTitle.component';
import Styles from './inventory-price.module.scss'
import { data } from '../../../database/db.exampel';
import InventoryPriceCard from '../../../components/inventory-price-card/InventoryPriceCard.component';
import { useFetchProductsQuery } from '../../../store/getSlice-rtk-query';
import Pagination from '../../../components/pagination/Pagination.component';
import { useEffect } from 'react';
const InventoryPrice = () => {
    const [paginationStop, setpaginationStop] = useState(false)
    const [pageNumberAndpage, setpageNumberAndpage] = useState({
        page: 1,
        filter: "null"
    })
    const { data: products = [], isLoading, error } = useFetchProductsQuery(pageNumberAndpage)
    function handelPageHangeback() {
        setpageNumberAndpage(state => {
            if (state.page > 1)
                return { ...state, page: state.page - 1 }
            else
                return state
        }
        )

    }
    function handelPageHange() {
        setpageNumberAndpage(state => {
            if (state.page <= 12)
                return { ...state, page: state.page + 1 }
            else
                return state
        })
    }
    useEffect(() => {
        if (products.length < 10) {
            setpaginationStop(true)
        } else {
            setpaginationStop(false)
        }
    }, [products.length]);
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
                {products.map((element) => {
                    return (
                        <InventoryPriceCard

                            price={element.price}
                            title={element.name}
                            inventory={element.quantity}
                            img={element.image[0]} key={element.id} />
                    )
                })}
                {products.length >= 1 && <Pagination paginationStop={paginationStop} handelPagenext={handelPageHange} handelPageprev={handelPageHangeback}>{pageNumberAndpage.page}</Pagination>}
            </main>
        </>
    );
}

export default InventoryPrice;
