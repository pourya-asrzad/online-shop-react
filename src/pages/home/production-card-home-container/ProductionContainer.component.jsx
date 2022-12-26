import React from 'react';
import { ProductionCardHome } from '../../../components/production-card-home/ProductionCardHome.component';
const ProductionContainer = () => {
    return (
        <>
            <div className='categorycontainr'>
                <div style={{ fontSize: '20px', color: " #1c315e", marginBottom: "1rem", textAlign: 'center' }}>
                    <span> کالاهای  پر فروش</span>
                </div>
                <div className='categorycontainrproductions'>

                    <ProductionCardHome image={"https://dkstatics-public.digikala.com/digikala-products/4db70aee306b776ed6afcfeb58e7be4fc2eaeb85_1650864574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} price={'1258000'} name={"شیر کم چرب کاله - 158 میلی لیتر"} />

                    <ProductionCardHome image={"https://dkstatics-public.digikala.com/digikala-products/4db70aee306b776ed6afcfeb58e7be4fc2eaeb85_1650864574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} price={'1258000'} name={"شیر کم چرب کاله - 158 میلی لیتر"} />

                    <ProductionCardHome image={"https://dkstatics-public.digikala.com/digikala-products/4db70aee306b776ed6afcfeb58e7be4fc2eaeb85_1650864574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} price={'1258000'} name={"شیر کم چرب کاله - 158 میلی لیتر"} />

                    <ProductionCardHome image={"https://dkstatics-public.digikala.com/digikala-products/4db70aee306b776ed6afcfeb58e7be4fc2eaeb85_1650864574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} price={'1258000'} name={"شیر کم چرب کاله - 158 میلی لیتر"} />

                    <ProductionCardHome image={"https://dkstatics-public.digikala.com/digikala-products/4db70aee306b776ed6afcfeb58e7be4fc2eaeb85_1650864574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} price={'1258000'} name={"شیر کم چرب کاله - 158 میلی لیتر"} />

                    <ProductionCardHome image={"https://dkstatics-public.digikala.com/digikala-products/4db70aee306b776ed6afcfeb58e7be4fc2eaeb85_1650864574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} price={'1258000'} name={"شیر کم چرب کاله - 158 میلی لیتر"} />

                    <ProductionCardHome image={"https://dkstatics-public.digikala.com/digikala-products/4db70aee306b776ed6afcfeb58e7be4fc2eaeb85_1650864574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} price={'1258000'} name={"شیر کم چرب کاله - 158 میلی لیتر"} />

                    <ProductionCardHome image={"https://dkstatics-public.digikala.com/digikala-products/4db70aee306b776ed6afcfeb58e7be4fc2eaeb85_1650864574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} price={'1258000'} name={"شیر کم چرب کاله - 158 میلی لیتر"} />
                </div>

                <div style={{ cursor: 'pointer', color: " #19bfd3", marginTop: "1rem", textAlign: 'center' }}>
                    <button className="prevcategory" style={{ color: " #19bfd3" }} >❮</button>
                    <span>مشاهده </span>
                </div>
            </div>
        </>
    );
}

export default ProductionContainer;
