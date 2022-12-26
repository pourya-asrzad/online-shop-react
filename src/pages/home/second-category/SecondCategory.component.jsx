import React from 'react';
import { CategoryItem } from '../../../components';
import Styles from './SecondCategory.module.scss'
const SecondCategory = () => {
    return (
        <div className={Styles.secondcategory}>
            <CategoryItem image={'https://dkstatics-public.digikala.com/digikala-categories/8f80e75e4c2dca42ee0538e100c7a7b05455aa88_1662360265.png'}>
                کالا های دیجیتال
            </CategoryItem>
            <CategoryItem image={'https://dkstatics-public.digikala.com/digikala-categories/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1662362431.png'}>
                موبایل
            </CategoryItem>
            <CategoryItem image={'https://dkstatics-public.digikala.com/digikala-categories/29dcb8556749524af521e23f63c13efe62a0db4a_1656160904.png'}>
                ابزار
            </CategoryItem>
            <CategoryItem image={'https://dkstatics-public.digikala.com/digikala-categories/0c3cc1cb589df1c74c4ad95a742bb6df967956a8_1656161119.png'}>
                خانه و آشپز خانه
            </CategoryItem>
            <CategoryItem image={'https://dkstatics-public.digikala.com/digikala-categories/5795b31a635f1e23df96a908c009f31744ede38f_1656160928.png'}>
                مد و پوشاک
            </CategoryItem>
            <CategoryItem image={'https://dkstatics-public.digikala.com/digikala-categories/3582bbed0a53318c2332d2c79b051b226f02a3bb_1656161134.png'}>
                کتاب و لوازم تحریر
            </CategoryItem>
            <CategoryItem image={'https://dkstatics-public.digikala.com/digikala-categories/0cefa48f5c58adbbde8c5a76b22ee49de0e667f5_1656161101.png'}>
                زیبایی و سلامت
            </CategoryItem>
            <CategoryItem image={'https://dkstatics-public.digikala.com/digikala-categories/da24c42172585abb0c328accf85d071049c4253e_1656161034.png'}>
                کالا های سوپر مارکتی
            </CategoryItem>
            <CategoryItem image={'https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png'}>
                ورزش و سفر
            </CategoryItem>
        </div>
    );
}

export default SecondCategory;
