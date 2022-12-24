import Footer from "../footer/footer.layout";
import Header from "../header/header.layout";


const PageContainer = (props) => {
    const { children } = props
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default PageContainer;
