import Helmet from "react-helmet";
import PageContainer from "../../layouts/pageContainer/pageContainer.layout";
import { getAppTitle } from "../../utils/functions.utils";
import notFoundGif from '../../assets/images/404.gif'
import Styles from './not-found.module.scss'
const NotFound = () => {
    const appTitle = getAppTitle()
    return (
        <>
            <Helmet>
                <title>
                    {appTitle} |  404
                </title>
            </Helmet>
            <PageContainer>
                <div>
                    <div className={Styles.notFoundtextParent}>
                        <h1>
                            صفحه ای که دنبال آن بودید پیدا نشد
                        </h1>

                    </div>
                    <div className={Styles.gifparent}>
                        <img src={notFoundGif} alt="notFoundGif" />
                    </div>
                </div>
            </PageContainer>

        </>
    );
}

export default NotFound;
