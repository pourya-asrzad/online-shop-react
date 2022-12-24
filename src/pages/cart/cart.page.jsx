import Helmet from "react-helmet";
import PageContainer from "../../layouts/pageContainer/pageContainer.layout";
import { getAppTitle } from "../../utils/functions.utils";

const Cart = () => {
    const appTitle = getAppTitle()
    return (
        <>
            <Helmet>
                <title>
                    {appTitle} | سبد خرید
                </title>
            </Helmet>
            <PageContainer>
                <div> cart page</div>
            </PageContainer>
        </>
    );
}

export default Cart;
