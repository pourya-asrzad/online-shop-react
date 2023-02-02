import React from 'react';
import { Helmet } from 'react-helmet';
import PageContainer from '../../layouts/pageContainer/pageContainer.layout';
import { getAppTitle } from '../../utils/functions.utils';
import ImageSlider from './image-slider/ImageSlider.component';
import Styles from './single-product.module.scss'
import Discription from './discription/discription.component'
import Rate from './rate/Rate.component';
import AddToCartSector from '../../components/add-to-cart-sector/AddToCartSector.component';
import ShowZoom from './show-zoom/ShowZoom.component';
import { useFetchSingleProductQuery } from '../../store/products/singleProductApiSlice';
import { useParams } from 'react-router-dom';
import { Loading } from '../../components';
let fillStrip = {
    pricevalue: 50,
    quality: 90,
    packing: 15
}
const SingleProduct = () => {
    const productId = useParams()
    const { data: productData, isLoading, isSuccess } = useFetchSingleProductQuery(productId.id)
    const appTitle = getAppTitle()
    if (isSuccess) {
        fillStrip = productData[0].fillStrip
    }
    // we just need object in here
    const productObj = !isLoading && productData.length > 0 ? productData[0] : ''
    return (
        <>
            <Helmet>
                <title>
                    {appTitle} | تک محصول
                </title>
            </Helmet>
            <PageContainer>
                {!isLoading ? <div className={Styles.sides_parent}>
                    <div style={{ width: ' 100%' }}>
                        <h1 >{productObj.name}</h1>
                        <Discription description={productObj.description} />
                        <div className={Styles.sectors_container}>
                            <AddToCartSector quantity={productObj.quantity} price={productObj.price} />
                            <Rate fillStrip={fillStrip} />
                        </div>
                    </div>
                    <div className={Styles.image_slider}>
                        <ImageSlider isLoading={isLoading} images={productObj.image} />
                    </div>
                </div> : <Loading></Loading>}
                <ShowZoom />
            </PageContainer>
        </>
    );
}

export default SingleProduct;



