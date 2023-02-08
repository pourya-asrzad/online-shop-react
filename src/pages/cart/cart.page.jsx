import Helmet from "react-helmet";
import DeleteAllBtn from "../../components/delete-all-btn/DeleteAllBtn.componet";
import PageContainer from "../../layouts/pageContainer/pageContainer.layout";
import { getAppTitle } from "../../utils/functions.utils";
import { BsCart4, BsCheckLg } from 'react-icons/bs'
import Styles from './cart.module.scss'
import CartCard from "../../components/cart-card/CartCard.component";
import CartBill from "../../components/cart-bill/CartBill.component";
import { useFetchCartProductQuery } from "../../store/products/cartproductApiSlice";
import { useEffect } from "react";
import { useState } from "react";
import EmptyDataAnimation from "../../components/empty-data-animation/EmptyDataAnimation.component";
const Cart = () => {
    const appTitle = getAppTitle()
    const [afterChange, setAfterChange] = useState()
    const [changeinCount, setChangeinCount] = useState()
    const { data, isLoading, isError, isSuccess } = useFetchCartProductQuery({ afterChange, changeinCount })
    // let userData = data && data[0].cart
    const [userData, setUserData] = useState()
    // let prices = 0;
    const [cartSum, setCartSum] = useState()
    const [prices, setPrices] = useState(0);
    useEffect(() => {
        setUserData(state => {
            return state = data && data[0].cart.filter((ele) => {
                return ele.id != afterChange
            })

        })
    }, [data, afterChange, changeinCount])

    useEffect(() => {
        let sum = 0
        let cartsum = 0
        userData && userData.map((element) => {
            cartsum += element.count
            sum += +element.price * element.count
        })
        setCartSum(cartsum)
        setPrices(sum)

    }, [userData, afterChange, changeinCount])

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
                        {userData && userData.length > 0 ? <DeleteAllBtn /> : <div></div>}
                        <div className="flex " style={{ userSelect: 'none' }}>
                            <BsCart4 className={Styles.cart_icon} />
                            <h3>سبد خرید شما</h3>
                        </div>
                    </div>
                    <main className={Styles.main}>
                        <section>
                            <CartBill cartSum={cartSum} userData={userData} prices={prices} />
                        </section>
                        <section>
                            {
                                userData && isSuccess ? userData.map((ele) => {
                                    return <CartCard setChangeinCount={setChangeinCount} setAfterChange={setAfterChange} img={ele.image} count={ele.count} productprice={ele.price} name={ele.name} dataId={ele.id} key={ele.id} />
                                }) : ''
                            }
                            {
                                userData && userData.length > 0 ? '' : <EmptyDataAnimation />
                            }
                        </section>
                    </main>
                </div>
            </PageContainer>
        </>
    );
}

export default Cart;
