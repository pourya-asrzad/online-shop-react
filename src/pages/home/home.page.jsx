import Helmet from "react-helmet";
import { ChangeGroupProductionPage, HomeProductionsCard, ImageSliderAuto } from "../../components";
import { dataSlider } from "../../components/image-slider/dataSlider";
import PageContainer from "../../layouts/pageContainer/pageContainer.layout";
import Styles from './home.module.css'


import { getAppTitle } from "../../utils/functions.utils";

const Home = () => {
    const appTitle = getAppTitle()
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
                        <div className={Styles.productiongroupsrewie}>
                            <HomeProductionsCard image={"https://dkstatics-public.digikala.com/digikala-products/4db70aee306b776ed6afcfeb58e7be4fc2eaeb85_1650864574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} price={'1258000'} name={"شیر کم چرب کاله - 158 میلی لیتر"} />
                            <HomeProductionsCard image={"https://dkstatics-public.digikala.com/digikala-products/4db70aee306b776ed6afcfeb58e7be4fc2eaeb85_1650864574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} price={'1258000'} name={"شیر کم چرب کاله - 158 میلی لیتر"} />
                            <HomeProductionsCard image={"https://dkstatics-public.digikala.com/digikala-products/4db70aee306b776ed6afcfeb58e7be4fc2eaeb85_1650864574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} price={'1258000'} name={"شیر کم چرب کاله - 158 میلی لیتر"} />
                            <HomeProductionsCard image={"https://dkstatics-public.digikala.com/digikala-products/4db70aee306b776ed6afcfeb58e7be4fc2eaeb85_1650864574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} price={'1258000'} name={"شیر کم چرب کاله - 158 میلی لیتر"} />
                        </div>
                    </section>
                </main>
            </PageContainer>
        </>
    );
}

export default Home;
