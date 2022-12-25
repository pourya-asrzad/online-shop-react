import Helmet from "react-helmet";
import { ImageSliderAuto } from "../../components";
import { dataSlider } from "../../components/image-slider/dataSlider";
import PageContainer from "../../layouts/pageContainer/pageContainer.layout";
import Styles from './home.module.css'
import ProductionContainer from "./production-card-home-container/ProductionContainer.component";
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
                    <ProductionContainer></ProductionContainer>
                    <div className={Styles.category_title}><h2>دسته بندی های پوریا کالا</h2></div>

                </main>


            </PageContainer>

        </>
    );
}

export default Home;
