import React from 'react';
import { data } from '../../database/db.exampel'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { HomeProductionsCard } from '../home-productions-card/HomeProductionsCard.component';
import Styles from './ProductionScroll.module.css'
function ProductionScroller() {
    const slideLeft = () => {
        const slider = document.getElementById('slider1');
        slider.scrollLeft = slider.scrollLeft - 400;
    };

    const slideRight = () => {
        const slider = document.getElementById('slider1');
        slider.scrollLeft = slider.scrollLeft + 400;
    };
    const slideLeft2 = () => {
        const slider = document.getElementById('slider2');
        slider.scrollLeft = slider.scrollLeft - 400;
    };

    const slideRight2 = () => {
        const slider = document.getElementById('slider2');
        slider.scrollLeft = slider.scrollLeft + 400;
    };

    return (
        <>
            <div className={Styles.scrollerheader}>
                <span>کالاهای تخفیف دار </span>
                <img className='home_fire' src="https://static.timcheh.com/uploads/manual/images/homepage/fire.svg?v=de7672c1d76a976965936c5fff979af4b00ec993" alt="fire" />
            </div>

            <div className={Styles.scrollercontainer}>
                <div>

                    <MdChevronLeft className={`${Styles.slideclick}`} onClick={slideLeft} size={40} />
                </div>
                <div
                    id='slider1'
                    className={Styles.scrollitemscontainet}
                >
                    {data.map((item) => (
                        <HomeProductionsCard
                            price='20.000'
                            name={item.productName}
                            image={item.image}
                        />
                    ))}
                </div>
                <div>

                    <MdChevronRight className={Styles.slideclick} onClick={slideRight} size={40} />
                </div>
            </div>
            <div className={Styles.scrollercontainer}>
                <div>

                    <MdChevronLeft className={`${Styles.slideclick}`} onClick={slideLeft2} size={40} />
                </div>
                <div
                    id='slider2'
                    className={Styles.scrollitemscontainet}
                >
                    {data.map((item) => (
                        <HomeProductionsCard
                            price='20.000'
                            name={item.productName}
                            image={item.image}
                        />
                    ))}
                </div>
                <div>

                    <MdChevronRight className={Styles.slideclick} onClick={slideRight2} size={40} />
                </div>
            </div>
        </>
    );
}

export default ProductionScroller;