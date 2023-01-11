import Footer from "../footer/footer.layout";
import Header from "../header/header.layout";


const PageContainer = (props) => {
    const { children } = props
    return (
        <>
            <Header />
            <div style={{ marginTop: "6.4rem" }}>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default PageContainer;
