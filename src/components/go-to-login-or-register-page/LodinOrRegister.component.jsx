import Styles from './LodinOrRegister.module.css'
import loginicon from '../../assets/images/login.png'

export const LodinOrRegister = () => {
    return (
        <div className={Styles.loginandregister}>
            <span>ورود </span>
            <div style={{ height: "24px" }} className="height-hr"></div>
            <span>ثبت نام </span>
            <img width={20} src={loginicon} alt="login" />
        </div>
    );
}

