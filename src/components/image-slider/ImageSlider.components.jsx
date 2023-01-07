import React, { useEffect, useState } from 'react';
import './ImageSlider.css'

export const ImageSliderAuto = (props) => {
    const SliderProperty = {
        ImageNo: '',
        ImageName: '',
        ImageSrc: ''
    }

    const [sliderProperty, setSliderProperty] = useState(SliderProperty);

    const { ImageNo, ImageName, ImageSrc } = sliderProperty;

    const [count, setCount] = useState(0);


    const [animationCls, setAnimationCls] = useState('displayBlock fader');



    const NextClick = () => {

        setAnimationCls(() => ('displayNone fader'));
        const myTimeout = setTimeout(() => {
            setAnimationCls('displayBlock fader')
        }, 100);

        if (count <= props.ImageData.length - 1) {
            setCount(count + 1);
        }

        if (count === props.ImageData.length - 1) {
            setCount(0);
        }

    };

    useEffect(() => {

        setSliderProperty((previous) => ({ ...previous, ImageNo: props.ImageData[count].ImageNo, ImageName: props.ImageData[count].ImageName, ImageSrc: props.ImageData[count].ImageSrc }));

    }, [count]);



    useEffect(() => {

        const interval = setInterval(() => {

            NextClick();

        }, props.SlideInterValTime);

        return () => clearInterval(interval);

    }, [count]);

    const PreClick = () => {

        setAnimationCls(() => ('displayNone fader'));
        setTimeout(() => {
            setAnimationCls('displayBlock fader')
        }, 100);

        if (count > 0) {
            setCount((preCount) => preCount - 1);
        }

        if (count === 0) {
            setCount(props.ImageData.length - 1);
        }

    };

    return (
        <>
            <div className='slideshow-container '>


                <div className={animationCls}>
                    <div className="numbertext">{ImageNo}</div>
                    <img src={ImageSrc} className='imageStyle' alt="Img" />
                </div>
                <button className="prev" onClick={PreClick}>❮</button>
                <button className="next" onClick={NextClick}>❯</button>
                <div className="text">{ImageName}</div>
            </div>


        </>

    );
};

