import { Link } from "react-router-dom";
import carticon from '../../assets/images/cart.png'
import { CategoryMenuComponent, HeaderSearchComponent, LodinOrRegister } from "../../components";
import { INTERNAL_PATHS } from "../../configs/routs.config";
import Styles from './header.module.css'
const Header = () => {
    return (
        <>
            <div className={Styles.headercontainer}>
                <header>
                    <div className={Styles.header} >
                        <div className={Styles.headerleft}>
                            <Link className={Styles.cartlink} to={INTERNAL_PATHS.CART}>
                                <span className={Styles.headerhref}>سبد خرید</span>
                                <img src={carticon} alt="carticon" />
                            </Link>
                            <span className={Styles.headerhref}>مدیریت</span>
                        </div>
                        <h1 className={Styles.companyname}>پوریا کالا </h1>
                    </div>
                </header>
                <div className={Styles.headerbottom}>
                    <LodinOrRegister />
                    <div className={Styles.barserchside}>
                        <HeaderSearchComponent />
                        <div style={{ height: "40px" }} className="height-hr"></div>
                        <CategoryMenuComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
