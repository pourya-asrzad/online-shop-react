import React from 'react';
import { Helmet } from 'react-helmet';
import CategoryFilter from '../../components/category-filter/CategoryFilter.component';
import MainCard from '../../components/main-card/MainCard.component';
import { data } from '../../database/db.exampel';
import PageContainer from '../../layouts/pageContainer/pageContainer.layout';
import { getAppTitle } from '../../utils/functions.utils';
import Styles from './category.module.scss'
const Category = () => {
    const appTitle = getAppTitle()
    return (
        <div>
            <Helmet>
                <title>
                    {appTitle} | لیست محصولات
                </title>
            </Helmet>
            <PageContainer>
                <div className={Styles.category_top}>
                    <span className={Styles.categoryheader} >فروشگاه اینترنتی پوریاکالا / موبایل</span>
                    <span style={{ direction: 'rtl' }}>10 کالا</span>
                </div>
                <div className={Styles.categorys_main}>

                    <div className={Styles.cards_contaier}>
                        {data.map((product) => {
                            return <MainCard title={product.productName}
                                discount={product.discount} price={product.price} image={product.image} key={product.id} />

                        })}
                    </div>
                    <div className={Styles.filter_side}>
                        <CategoryFilter />
                    </div>
                </div>
            </PageContainer>
        </div>
    );
}

export default Category;
