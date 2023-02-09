import logo from '../../assets/images/logo.jpeg'
import { Link } from "react-router-dom";
import carticon from '../../assets/images/noto_shopping-cart.png'
import { CategoryMenuComponent, HeaderSearchComponent, LodinOrRegister } from "../../components";
import { INTERNAL_PATHS } from "../../configs/routs.config";
import Styles from './header.module.css'
import CompanyName from '../../components/company-name/CompanyName.component';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { API_BASE_URL, username } from '../../configs/variables.config';
const Header = () => {
    const notificationChange = useSelector(state => state.ui.notificationChange)
    const [notification, setNotification] = useState(0)
    useEffect(() => {
        let cartSum = 0
        console.log("I'm notification")
        axios.get(`${API_BASE_URL}mockusers?username=${username}`).then((res) => {
            res.data && res.data[0].cart.map((product) => {
                cartSum += product.count
            })
            setNotification(cartSum)
        })

    }, [notificationChange])

    return (
        <>
            <div className={Styles.headercontainer}>
                <header>
                    <div className={Styles.header} >
                        <div className={Styles.headerleft}>
                            <Link className={Styles.cartlink} to={INTERNAL_PATHS.CART}>
                                <span className={`${Styles.headerhref} ${Styles.dishref}`}>سبد خرید</span>
                                <div className={Styles.noti}>
                                    <span>
                                        {notification !== 0 && notification && notification}
                                    </span>
                                </div>
                                <img style={{
                                    width: ' 28px'
                                    , margin: '5px'
                                }} src={carticon} alt="carticon" />
                            </Link>
                            <Link className={Styles.cartlink} to={'/' + INTERNAL_PATHS.CONTROLPANEL}>
                                <span className={Styles.headerhref}>مدیریت</span>
                            </Link>
                        </div>
                        <CompanyName />
                    </div>
                </header>
                <div className={Styles.headerbottom}>
                    <Link style={{ color: 'black', textDecoration: "none" }} to={'#'}>
                        <LodinOrRegister />
                    </Link>
                    <div className={Styles.barserchside}>
                        <HeaderSearchComponent />
                        <div style={{ height: "32px" }} className="height-hr"></div>
                        <CategoryMenuComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
