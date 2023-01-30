import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import Styles from './imageslider.module.scss'
import { uiActions } from '../../../store/ui-slice'
const ImageSlider = ({ images, isLoading }) => {
    const dispatch = useDispatch()
    const showZoom = useSelector(state => state.ui.showZoom)
    function zoomInImage() {
        dispatch(uiActions.showZoom())
    }
    function notZoomInImage() {
        dispatch(uiActions.hideZoom())
    }
    const imageHasHttp = images[0].includes('https')
    return (
        <>

            <Carousel variant="dark" className={Styles.Carousel}>

                {
                    !isLoading && images.length > 1 && images.map((image, index) => {

                        return <Carousel.Item key={index}>
                            <div onMouseOver={zoomInImage} onMouseLeave={notZoomInImage} className={Styles.imagecontainer}>
                                {!showZoom ? <img
                                    className="d-block w-100 "
                                    src={imageHasHttp ? image : `http://localhost:3001/files/${image}`}
                                    alt="Third slide"
                                /> :
                                    <ReactImageMagnify  {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: imageHasHttp ? image : `http://localhost:3001/files/${image}`
                                            ,
                                        },
                                        largeImage: {
                                            src: imageHasHttp ? image : `http://localhost:3001/files/${image}`,
                                            width: 900,
                                            height: 900
                                        },
                                        enlargedImagePortalId: "myPortal"
                                    }} />}
                            </div>
                        </Carousel.Item>
                    })
                }
            </Carousel>
        </>
    );
}

export default ImageSlider;

                // <Carousel.Item>
                //     <div onMouseOver={zoomInImage} onMouseLeave={notZoomInImage} className={Styles.imagecontainer}>
                //         {!showZoom ? <img
                //             className="d-block w-100 "
                //             src="https://dkstatics-public.digikala.com/digikala-products/6e25f9b57c920efd55f980d129614b18f83bd451_1670074732.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                //             alt="Third slide"
                //         /> :
                //             <ReactImageMagnify  {...{
                //                 smallImage: {
                //                     alt: 'Wristwatch by Ted Baker London',
                //                     isFluidWidth: true,
                //                     src: "https://dkstatics-public.digikala.com/digikala-products/6e25f9b57c920efd55f980d129614b18f83bd451_1670074732.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                //                     ,
                //                 },
                //                 largeImage: {
                //                     src: "https://dkstatics-public.digikala.com/digikala-products/6e25f9b57c920efd55f980d129614b18f83bd451_1670074732.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                //                     width: 900,
                //                     height: 900
                //                 },
                //                 enlargedImagePortalId: "myPortal"
                //             }} />}
                //     </div>

                // </Carousel.Item>
                // <Carousel.Item>
                //     <div className={Styles.imagecontainer}>
                //         <img
                //             className="d-block w-100 "
                //             src="https://dkstatics-public.digikala.com/digikala-products/fa5961b7d2a4efb180d686f6f69dd45381a4d3dd_1649056488.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                //             alt="Third slide"
                //         />
                //     </div>
                // </Carousel.Item>