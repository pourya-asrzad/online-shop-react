import Helmet from "react-helmet";
import { FirstDiscountCategory, ImageSliderAuto } from "../../components";
import { dataSlider } from "../../components/image-slider/dataSlider";
import PageContainer from "../../layouts/pageContainer/pageContainer.layout";
import Styles from './home.module.css'
import ProductionContainer from "./production-card-home-container/ProductionContainer.component";
import { getAppTitle } from "../../utils/functions.utils";
import SecondCategory from "./second-category/SecondCategory.component";
import ProductionScroller from "../../components/productions-scroller/ProductionScroller";



const Home = () => {


    const appTitle = getAppTitle()


    return (
        <>
            <Helmet>
                <title>
                    {appTitle} | صفحه اصلی
                </title>
            </Helmet>
            <PageContainer >
                <main>
                    <div className={Styles.Slider}>
                        <ImageSliderAuto ImageData={dataSlider} SlideInterValTime={4000} />
                    </div>
                    <section>
                        <ProductionContainer categoryId={'2'} />
                    </section>
                    <section>
                        <FirstDiscountCategory />
                    </section>
                    <section>
                        <ProductionContainer categoryId={'1'} />
                    </section>
                    <div className={Styles.category_title}><span className={Styles.categoryTitle}>دسته بندی های پوریا کالا</span></div>
                    <section>
                        <SecondCategory />
                    </section>
                    <ProductionScroller />
                </main>


            </PageContainer>
        </>
    );
}

export default Home;
