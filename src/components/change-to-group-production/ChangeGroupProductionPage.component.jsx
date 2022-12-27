import Styles from './ChangeGroupProductionPage.module.css'
import nexticon from '../../assets/images/next.png'
export const ChangeGroupProductionPage = (props) => {
    const { children } = props
    return (
        <div className={Styles.ChangeGroupProductionPage}>
            <img width={50} src={nexticon} alt="nexticon" />
            <span>
                {children}
            </span>
        </div>
    );
}


