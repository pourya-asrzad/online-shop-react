import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import Helmet from "react-helmet";
import { useRef } from "react";
import { ChangeGroupProductionPage, HomeProductionsCard, ImageSliderAuto, ProductionsScroller, ScrollBtn } from "../../components";
import { dataSlider } from "../../components/image-slider/dataSlider";
import PageContainer from "../../layouts/pageContainer/pageContainer.layout";
import Styles from './home.module.css'
import Lbtn from '../../assets/images/Lbtn.png'
import Rbtn from '../../assets/images/Rbtn.png'

import { getAppTitle } from "../../utils/functions.utils";

const Home = () => {

    const scrollref = useRef()
    const appTitle = getAppTitle()

    function scrollHandlerbartoleft() {
        scrollref.current.scrollLeft -= 180

    }
    function scrollHandlerbartorigth() {
        scrollref.current.scrollLeft += 180

    }



    const [style, set] = useSpring(() => ({
        transform: "perspective(400px) rotateY(0deg)"
    }));
    const bind = useScroll(event => {
        set({
            transform: `perspective(400px) rotateY(${event.scrolling ? event.delta[0] : 0
                }deg)`
        });
    });
    return (
        <>
            <Helmet>
                <title>
                    {appTitle} | صفحه اصلی
                </title>
            </Helmet>
            <PageContainer>
                <main>
                    <div className={Styles.Slider}>
                        <ImageSliderAuto ImageData={dataSlider} SlideInterValTime={4000} />
                    </div>
                    <section>
                        <div className={Styles.kalak}>
                            <div></div>
                            <ChangeGroupProductionPage>کالا های گروه لبنیات</ChangeGroupProductionPage>
                        </div>
                        <ProductionsScroller />
                    </section>
                </main>
            </PageContainer>
        </>
    );
}

export default Home;
