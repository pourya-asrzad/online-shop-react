import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Styles from './imageslider.module.scss'
const ImageSlider = () => {
    return (
        <div>
            <Carousel variant="dark" className={Styles.Carousel}>
                <Carousel.Item>
                    <div className={Styles.imagecontainer}>

                        <img
                            className="d-block w-100"
                            src="https://dkstatics-public.digikala.com/digikala-products/3b085990688cff94161ba2f66559d140af1e37d0_1631100591.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                            alt="First slide"
                        />
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className={Styles.imagecontainer}>

                        <img
                            className="d-block w-100"
                            src="https://dkstatics-public.digikala.com/digikala-products/120669435.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                            alt="Second slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={Styles.imagecontainer}>
                        <img
                            className="d-block "
                            src="https://dkstatics-public.digikala.com/digikala-products/3665339.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                            alt="Third slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ImageSlider;
