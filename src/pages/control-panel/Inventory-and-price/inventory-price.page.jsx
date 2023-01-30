import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { getAppTitle } from '../../../utils/functions.utils'
import PanelTopTitle from '../../../components/panel-top-title/PanelTopTitle.component';
import Styles from './inventory-price.module.scss'
import InventoryPriceCard from '../../../components/inventory-price-card/InventoryPriceCard.component';
import { useFetchProductsQuery } from '../../../store/products/productsApiSlice';
import Pagination from '../../../components/pagination/Pagination.component';
import { useEffect } from 'react';
import { useLogoutadmin } from '../../../hooks/logoutadmin';
import { Loading } from '../../../components/Loading/Loading.component';
import EmptyDataAnimation from '../../../components/empty-data-animation/EmptyDataAnimation.component';
import SaveBtnComponent from '../../../components/buttons/SaveBtn.component';
import { useSelector } from 'react-redux';
const InventoryPrice = () => {
    const saveBtn = useSelector(state => state.ui.editBtnToggle_id)

    const [paginationStop, setpaginationStop] = useState(false)
    const [pageNumberAndpage, setpageNumberAndpage] = useState({
        page: 1,
        filter: "null"
    })
    const { data: products = [], isLoading, error, isSuccess } = useFetchProductsQuery(pageNumberAndpage)
    const inventoryError = useLogoutadmin(error)
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
    let requestAnswer = null
    if (products.length > 0) {
        requestAnswer = products.map((element) => {

            return (
                <InventoryPriceCard
                    id={element.id}
                    price={element.price}
                    title={element.name}
                    inventory={element.quantity}
                    img={element.image[0]} key={element.id} />

            )
        })
    }
    if (isLoading) {
        requestAnswer = <Loading />
    }
    if (products.length === 0 && isSuccess) {
        requestAnswer = <EmptyDataAnimation />
    }


    return (
        <>
            <Helmet>
                <title>   پنل مدیریت {appTittle} | موجودی و قیمت</title>
            </Helmet>
            <div style={!saveBtn.btnshow ? { justifyContent: 'flex-end' } : null} className={Styles.inventory_header}>
                {saveBtn.btnshow ? <SaveBtnComponent >ذخیره</SaveBtnComponent> : ''}
                <PanelTopTitle color={'blue'}>
                    مدیریت موجودی و قیمت ها
                </PanelTopTitle>
            </div>
            <div style={{ height: '64px' }} id="inventgost"></div>
            <main>
                {requestAnswer}
                {products.length >= 1 && <Pagination paginationStop={paginationStop} handelPagenext={handelPageHange} handelPageprev={handelPageHangeback}>{pageNumberAndpage.page}</Pagination>}
            </main>
        </>
    );
}

export default InventoryPrice;
