import Helmet from "react-helmet";
import DeleteAllBtn from "../../components/delete-all-btn/DeleteAllBtn.componet";
import PageContainer from "../../layouts/pageContainer/pageContainer.layout";
import { getAppTitle } from "../../utils/functions.utils";
import { BsCart4 } from 'react-icons/bs'
import Styles from './cart.module.scss'
import CartCard from "../../components/cart-card/CartCard.component";
import CartBill from "../../components/cart-bill/CartBill.component";
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
                <div style={{ minHeight: ' 69vh' }}>
                    <div className={Styles.carthead}>
                        <DeleteAllBtn />
                        <div className="flex " style={{ userSelect: 'none' }}>
                            <BsCart4 className={Styles.cart_icon} />
                            <h3>سبد خرید شما</h3>
                        </div>
                    </div>
                    <main className={Styles.main}>
                        <section>
                            <CartBill />
                        </section>
                        <section>
                            <CartCard />
                            <CartCard />
                            <CartCard />
                            <CartCard />
                        </section>
                    </main>
                </div>
            </PageContainer>
        </>
    );
}

export default Cart;
