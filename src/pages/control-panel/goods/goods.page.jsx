import Form from 'react-bootstrap/Form';
import { AiTwotoneFilter } from 'react-icons/ai'
import React from 'react';
import { Helmet } from 'react-helmet';
import { getAppTitle } from '../../../utils/functions.utils'
import Button from 'react-bootstrap/Button';
import Styles from './goods.module.scss'
import { data } from '../../../database/db.exampel';
import GoodsCard from '../../../components/goods-card/GoodsCard.component';
import PanelTopTitle from '../../../components/panel-top-title/PanelTopTitle.component';
const Goods = () => {
    const appTittle = getAppTitle()
    return (
        <div>
            <Helmet>
                <title>   پنل مدیریت {appTittle} | کالا ها </title>
            </Helmet>
            <main>
                <div className={Styles.goodspageHeader} >
                    <div className={Styles.leftthings}>
                        <Button variant="success" className={Styles.addgoodbtn}>افزودن کالا</Button>
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
                    {data.map((element) => {
                        return <GoodsCard img={element.image} title={element.productName} key={element.id} />
                    })}
                </section >
            </main>
        </div>
    );
}

export default Goods;
