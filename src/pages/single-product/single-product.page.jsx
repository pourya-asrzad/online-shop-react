import React from 'react';
import { Helmet } from 'react-helmet';
import PageContainer from '../../layouts/pageContainer/pageContainer.layout';
import { getAppTitle } from '../../utils/functions.utils';
import ImageSlider from './image-slider/ImageSlider.component';

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
                <ImageSlider />
            </PageContainer>
        </>
    );
}

export default SingleProduct;



