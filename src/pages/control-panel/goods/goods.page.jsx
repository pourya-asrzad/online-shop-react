import Form from 'react-bootstrap/Form';
import { AiTwotoneFilter } from 'react-icons/ai'
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { getAppTitle, parseJwt } from '../../../utils/functions.utils'
import Button from 'react-bootstrap/Button';
import Styles from './goods.module.scss'
import GoodsCard from '../../../components/goods-card/GoodsCard.component';
import PanelTopTitle from '../../../components/panel-top-title/PanelTopTitle.component';
import GoodsModal from '../../../components/modals/GoodsModal.component';
import { useCreateProductMutation, useFetchProductsQuery } from '../../../store/getSlice-rtk-query';
const Goods = () => {
    const [createProduct, { isLoading: postloading }] = useCreateProductMutation()
    const { data: products = [], isLoading, error } = useFetchProductsQuery()
    const appTittle = getAppTitle()
    const [modalShow, setModalShow] = React.useState(false);
    if (localStorage.login) {
        const storageParse = JSON.parse(localStorage.login)
        const userInfo = parseJwt(storageParse.token)
    }
    return (
        <div>
            <Helmet>
                <title>   پنل مدیریت {appTittle} | کالا ها </title>
            </Helmet>
            <main>
                <div className={Styles.goodspageHeader} >
                    <div className={Styles.leftthings}>
                        <Button onClick={() => {
                            setModalShow(true)
                            createProduct({ name: 'hoshang' })

                        }} variant="success" className={Styles.addgoodbtn}>افزودن کالا</Button>
                        <div className={Styles.filter}>
                            <Form.Select id='filtercategory' size="sm">
                                <option>Small select</option>
                            </Form.Select>
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

        </div>
    );
}

export default Goods;
