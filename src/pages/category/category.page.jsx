
import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import CategoryFilter from '../../components/category-filter/CategoryFilter.component';
import EmptyDataAnimation from '../../components/empty-data-animation/EmptyDataAnimation.component';
import MainCard from '../../components/main-card/MainCard.component';
import { INTERNAL_PATHS } from '../../configs/routs.config';
import { data } from '../../database/db.exampel';
import PageContainer from '../../layouts/pageContainer/pageContainer.layout';
import { useFetchCategoryscategoryQuery, useFetchCategorysProductsQuery, useFetchSubcategoryQuery } from '../../store/products/categoryProductsApiSlice';
import { getAppTitle } from '../../utils/functions.utils';
import Styles from './category.module.scss'
const Category = () => {
    const appTitle = getAppTitle()
    const param = useParams()
    const paramsData = param.id.split('-')
    const categoryId = paramsData[0]
    const subcategoryId = paramsData[1]
    const [fetchObj, setFetchObj] = useState({
        category: categoryId,
        page: 1,
        subcategory: subcategoryId
    });
    //I set the param in two way , when I just need to show category:'categoryId-o' and when I need subcategory too :"categoryId-subcategoryId" then I split by (-) and get my data from backend
    const { data: products = [], isLoading, isSuccess } = useFetchCategorysProductsQuery(fetchObj)
    const { data: subcategory = [] } = useFetchSubcategoryQuery(fetchObj)
    const { data: category = [] } = useFetchCategoryscategoryQuery(fetchObj.category)


    let categoryfetchAnswer = null
    if (isSuccess && products.length > 0) {
        categoryfetchAnswer = products.map((product) => {
            return <Link className='link-route' to={INTERNAL_PATHS.SINGLEPRODUCT + "/" + product.id}>
                <MainCard title={product.name}
                    discount={product.Discount} price={product.price} image={product.image[0]} key={product.id} />
            </Link>
        })
    }
    if (products.length === 0) {
        categoryfetchAnswer = <EmptyDataAnimation />
    }
    return (
        <div>
            <Helmet>
                <title>
                    {appTitle} | لیست محصولات
                </title>
            </Helmet>
            <PageContainer>
                <div className={Styles.category_top}>
                    <span className={Styles.categoryheader} >فروشگاه اینترنتی پوریاکالا/ {category.length > 0 && category[0].name}  {subcategory.length > 0 ? '/' + subcategory[0].name : ''}</span>
                    <span style={{ direction: 'rtl' }}>{products.length} کالا</span>
                </div>
                <div className={Styles.categorys_main}>

                    <div className={Styles.cards_contaier}>
                        {categoryfetchAnswer}
                    </div>
                    <div className={Styles.filter_side}>
                        {products.length > 0 ? <CategoryFilter /> : ''}
                    </div>
                </div>
            </PageContainer>
        </div>
    );
}

export default Category;
