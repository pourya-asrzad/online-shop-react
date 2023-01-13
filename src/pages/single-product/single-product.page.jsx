import React from 'react';
import { Helmet } from 'react-helmet';
import PageContainer from '../../layouts/pageContainer/pageContainer.layout';
import { getAppTitle } from '../../utils/functions.utils';
import ImageSlider from './image-slider/ImageSlider.component';
import Styles from './single-product.module.scss'
import Discription from './discription/discription.component'
const SingleProduct = () => {
    const appTitle = getAppTitle()

    return (
        <>
            <Helmet>
                <title>
                    {appTitle} | تک محصول
                </title>
            </Helmet>
            <PageContainer>
                <div className={Styles.sides_parent}>
                    <div>
                        <h1 >گوشی موبایل اپل مدل iPhone 11 تک سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت</h1>
                        <Discription />
                    </div>
                    <div className={Styles.image_slider}>
                        <ImageSlider />
                    </div>
                </div>
            </PageContainer>
        </>
    );
}

export default SingleProduct;



