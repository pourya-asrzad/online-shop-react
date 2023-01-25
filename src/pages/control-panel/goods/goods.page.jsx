import Form from 'react-bootstrap/Form';
import { AiTwotoneFilter } from 'react-icons/ai'
import React, { useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet';
import { getAppTitle, parseJwt } from '../../../utils/functions.utils'
import Button from 'react-bootstrap/Button';
import Styles from './goods.module.scss'
import GoodsCard from '../../../components/goods-card/GoodsCard.component';
import PanelTopTitle from '../../../components/panel-top-title/PanelTopTitle.component';
import GoodsModal from '../../../components/modals/GoodsModal.component';
import { useCreateProductMutation, useFetchProductsQuery } from '../../../store/getSlice-rtk-query';
import { Loading } from '../../../components/Loading/Loading.component';
import { useState } from 'react';
import Pagination from '../../../components/pagination/Pagination.component';
import FormSelect from '../../../components/Form-select/FormSelect.component';

const Goods = () => {


    const [pageNumberAndpage, setpageNumberAndpage] = useState({
        page: 1,
        filter: 1
    })

    // const [createProduct, { isLoading: postloading }] = useCreateProductMutation()
    const { data: products = [], isLoading, error } = useFetchProductsQuery(pageNumberAndpage)
    const appTittle = getAppTitle()
    const [modalShow, setModalShow] = React.useState(false);
    if (localStorage.login) {
        const storageParse = JSON.parse(localStorage.login)
        const userInfo = parseJwt(storageParse.token)
    }
    function handelPageHange() {
        setpageNumberAndpage(state => {
            if (state.page <= 12)
                return { ...state, page: state.page + 1 }
            else
                return state
        })
    }
    function handelSelectChange(value) {
        console.log(value)
        setpageNumberAndpage(state => {
            return { ...state, filter: value }
        })
    }
    function handelPageHangeback() {
        setpageNumberAndpage(state => {
            if (state.page > 1)
                return { ...state, page: state.page - 1 }
            else
                return state
        }
        )

    }

    return (
        <div>
            <Helmet>
                <title>   پنل مدیریت {appTittle} | کالا ها </title>
            </Helmet>
            {isLoading && <Loading />}
            <main>
                <div className={Styles.goodspageHeader} >
                    <div className={Styles.leftthings}>
                        <Button onClick={() => { setModalShow(true) }} variant="success" className={Styles.addgoodbtn}>افزودن کالا</Button>
                        <div className={Styles.filter}>
                            <FormSelect handelSelectChange={handelSelectChange} />
                            <div className={Styles.filterlabel}>
                                <AiTwotoneFilter />
                                <label htmlFor="filtercategory">
                                    دسته بندی
                                </label>
                            </div>
                        </div>
                    </div>

                    <PanelTopTitle color={"#b90e0e"}>
                        مدیریت کالا ها
                    </PanelTopTitle>
                </div>
                <div className={Styles.goodsghoest}></div>
                <section className={Styles.cardscontainer}>
                    {products.map((element) => {
                        return <GoodsCard onShowModal={setModalShow} categoryId={element.category} subcategoryId={element.subcategory} img={element.image[0]} title={element.name} key={element.id} />
                    })}
                </section >
            </main>
            <GoodsModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Pagination handelPageHange={handelPageHange} >زیاد</Pagination>
            <Pagination handelPageHange={handelPageHangeback} >کم</Pagination>
        </div>
    );
}

export default Goods;
