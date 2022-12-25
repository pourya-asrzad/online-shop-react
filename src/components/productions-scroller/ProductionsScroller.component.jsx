import { useRef } from "react"
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import { HomeProductionsCard } from "../home-productions-card/HomeProductionsCard.component";
import { ScrollBtn } from "../scroll-btn/ScrollBtn.component";
import Lbtn from '../../assets/images/Lbtn.png'
import Rbtn from '../../assets/images/Rbtn.png'
import Styles from './ProductionsScroller.module.css'
import shomoreicon from '../../assets/images/showmore.png'



export const ProductionsScroller = ({ top }) => {
    const scrollref = useRef()

    function scrollHandlerbartoleft() {
        scrollref.current.scrollLeft -= 180

    }
    function scrollHandlerbartorigth() {
        scrollref.current.scrollLeft += 180

    }



    const [style, set] = useSpring(() => ({
        transform: `translate3d(0px ,0,0)
        `
    }));
    const bind = useScroll(event => {
        console.log(event.scrolling, event.delta[0]);
        set({
            transform: `translate3d(${event.delta[0] + 70}px ,0,0)

                `,
            // transitionDuration: `${event.scrolling ? event.delta[0] : 0}ms`
        });
    });

    return (
        <div className={Styles.production_scroller}>
            <ScrollBtn top={top} scrollHandlerbar={scrollHandlerbartoleft} image={Lbtn} name={"Lbtn"} />
            <div ref={scrollref} className={Styles.productiongroupsrewiedd} {...bind()}>
                <div className={Styles.show_more}>
                    <img src={shomoreicon} alt="shomoreicon" />
                    <span>بیشتر موارد</span>
                </div>
                <animated.div className={Styles.producljfkg} style={{ ...style }}>
                    <HomeProductionsCard image={"https://dkstatics-public.digikala.com/digikala-products/4db70aee306b776ed6afcfeb58e7be4fc2eaeb85_1650864574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} price={'1258000'} name={"شیر کم چرب کاله - 158 میلی لیتر"} />

                    <HomeProductionsCard image={"https://dkstatics-public.digikala.com/digikala-products/4db70aee306b776ed6afcfeb58e7be4fc2eaeb85_1650864574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} price={'1258000'} name={"شیر کم چرب کاله - 158 میلی لیتر"} />

                    <HomeProductionsCard image={"https://dkstatics-public.digikala.com/digikala-products/4db70aee306b776ed6afcfeb58e7be4fc2eaeb85_1650864574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} price={'1258000'} name={"شیر کم چرب کاله - 158 میلی لیتر"} />

                    <HomeProductionsCard image={"https://dkstatics-public.digikala.com/digikala-products/4db70aee306b776ed6afcfeb58e7be4fc2eaeb85_1650864574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} price={'1258000'} name={"شیر کم چرب کاله - 158 میلی لیتر"} />

                    <HomeProductionsCard image={"https://dkstatics-public.digikala.com/digikala-products/4db70aee306b776ed6afcfeb58e7be4fc2eaeb85_1650864574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} price={'1258000'} name={"شیر کم چرب کاله - 158 میلی لیتر"} />

                    <HomeProductionsCard image={"https://dkstatics-public.digikala.com/digikala-products/4db70aee306b776ed6afcfeb58e7be4fc2eaeb85_1650864574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} price={'1258000'} name={"شیر کم چرب کاله - 158 میلی لیتر"} />
                </animated.div>
            </div>
            <ScrollBtn top={top} image={Rbtn} name={"Rbtn"} scrollHandlerbar={scrollHandlerbartorigth} />
        </div>
    );
}


