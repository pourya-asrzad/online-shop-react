import React from 'react';
import { Helmet } from 'react-helmet';
import PageContainer from '../../layouts/pageContainer/pageContainer.layout';
import { getAppTitle } from '../../utils/functions.utils';
import ImageSlider from './image-slider/ImageSlider.component';
import Styles from './single-product.module.scss'
import Discription from './discription/discription.component'
import Rate from './rate/Rate.component';
import AddToCartSector from '../../components/add-to-cart-sector/AddToCartSector.component';
const fillStrip = {
    pricevalue: 50,
    quality: 90,
    packing: 15
}
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
                        <div className={Styles.sectors_container}>
                            <AddToCartSector />
                            <Rate fillStrip={fillStrip} />
                        </div>
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



