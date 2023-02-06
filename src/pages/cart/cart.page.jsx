import Helmet from "react-helmet";
import DeleteAllBtn from "../../components/delete-all-btn/DeleteAllBtn.componet";
import PageContainer from "../../layouts/pageContainer/pageContainer.layout";
import { getAppTitle } from "../../utils/functions.utils";
import { BsCart4, BsCheckLg } from 'react-icons/bs'
import Styles from './cart.module.scss'
import CartCard from "../../components/cart-card/CartCard.component";
import CartBill from "../../components/cart-bill/CartBill.component";
import { useFetchCartProductQuery } from "../../store/products/cartproductApiSlice";
const Cart = () => {
    const appTitle = getAppTitle()
    const { data, isLoading, isError, isSuccess } = useFetchCartProductQuery()
    const userData = data && data[0].cart
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
                            {
                                userData && isSuccess ? userData.map((ele) => {
                                    return <CartCard img={ele.image} count={ele.count} productprice={ele.price} name={ele.name} key={ele.id} />
                                }) : ''
                            }
                        </section>
                    </main>
                </div>
            </PageContainer>
        </>
    );
}

export default Cart;
