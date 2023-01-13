import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Styles from './imageslider.module.scss'
const ImageSlider = () => {
    return (
        <>
            <Carousel variant="dark" className={Styles.Carousel}>

                <Carousel.Item>
                    <div className={Styles.imagecontainer}>

                        <img
                            className="d-block w-100"
                            src="https://dkstatics-public.digikala.com/digikala-products/a9ab05d6c45423bbcebaa6e4e3efe0126de08cc4_1670074734.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                            alt="Second slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={Styles.imagecontainer}>
                        <img
                            className="d-block w-100 "
                            src="https://dkstatics-public.digikala.com/digikala-products/6e25f9b57c920efd55f980d129614b18f83bd451_1670074732.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                            alt="Third slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default ImageSlider;
