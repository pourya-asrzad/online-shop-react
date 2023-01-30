import Form from 'react-bootstrap/Form';
import { AiTwotoneFilter } from 'react-icons/ai'
import React from 'react';
import { Helmet } from 'react-helmet';
import { getAppTitle, parseJwt } from '../../../utils/functions.utils'
import Button from 'react-bootstrap/Button';
import Styles from './goods.module.scss'
import GoodsCard from '../../../components/goods-card/GoodsCard.component';
import PanelTopTitle from '../../../components/panel-top-title/PanelTopTitle.component';
import GoodsModal from '../../../components/modals/GoodsModal.component';
import { useFetchProductsQuery } from '../../../store/products/productsApiSlice';
import { Loading } from '../../../components/Loading/Loading.component';
import { useState } from 'react';
import Pagination from '../../../components/pagination/Pagination.component';
import FormSelect from '../../../components/Form-select/FormSelect.component';
import { useEffect } from 'react';
import { useLogoutadmin } from '../../../hooks/logoutadmin';
import EmptyDataAnimation from '../../../components/empty-data-animation/EmptyDataAnimation.component';
import DeleteModal from '../../../components/modals/DeleteModal.component';

const Goods = () => {
    const [showDeletemodal, setShowDeleteModal] = useState(false);
    const [paginationStop, setpaginationStop] = useState(false)
    const [pageNumberAndpage, setpageNumberAndpage] = useState({
        page: 1,
        filter: "null"
    })
    const { data: products = [], isLoading, error, isSuccess } = useFetchProductsQuery(pageNumberAndpage)
    const appTittle = getAppTitle()
    const goodsError = useLogoutadmin(error)

    const [modalShow, setModalShow] = React.useState(false);

    // console.log(error.data)
    useEffect(() => {
        if (products.length < 10) {
            setpaginationStop(true)
        } else {
            setpaginationStop(false)
        }
    }, [products.length]);
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

            return { ...state, page: 1 }

        }
        )
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

    //delete modal showing
    const handleShow = () => setShowDeleteModal(true);

    //request answer setting
    let requestAsnwer = null
    if (products.length > 0) {
        requestAsnwer = products.map((element) => {
            return <GoodsCard onShowModal={setModalShow} onShowDeleteModal={handleShow} categoryId={element.category} subcategoryId={element.subcategory} img={element.image[0]} title={element.name} key={element.id} />
        })
    }
    if (isLoading) {
        requestAsnwer = <Loading />
    }
    if (products.length === 0 && isSuccess) {
        requestAsnwer = <EmptyDataAnimation />
    }
    return (
        <div>
            <Helmet>
                <title>   پنل مدیریت {appTittle} | کالا ها </title>
            </Helmet>
            <main>
                <div className={Styles.goodspageHeader} >
                    <div className={Styles.leftthings}>
                        <Button onClick={() => { setModalShow(true) }} variant="success" className={Styles.addgoodbtn}>افزودن کالا</Button>
                        <div className={Styles.filter}>
                            <FormSelect placeholder='همه' handelSelectChange={handelSelectChange} />
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
                    {requestAsnwer}
                </section >
            </main>
            <section>
                <GoodsModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <DeleteModal setShow={setShowDeleteModal} show={showDeletemodal} />
            </section>

            <div>
                {products.length >= 1 && <Pagination paginationStop={paginationStop} handelPagenext={handelPageHange} handelPageprev={handelPageHangeback}>{pageNumberAndpage.page}</Pagination>}

            </div>
        </div>
    );
}

export default Goods;
