import Helmet from "react-helmet";
import PageContainer from "../../layouts/pageContainer/pageContainer.layout";
import { getAppTitle } from "../../utils/functions.utils";

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
                    <p>
                        صفحه ای که دنبال آن بودید پیدا نشد
                    </p>
                </div>
            </PageContainer>

        </>
    );
}

export default NotFound;
