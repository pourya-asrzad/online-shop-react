import Helmet from "react-helmet";
import PageContainer from "../../layouts/pageContainer/pageContainer.layout";


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
                <div> main page</div>
            </PageContainer>
        </>
    );
}

export default Home;
