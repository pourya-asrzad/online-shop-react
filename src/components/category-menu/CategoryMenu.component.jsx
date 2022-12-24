import menuicon from '../../assets/svg/menu.svg'
import Styles from './CategoryMenu.module.css'
export const CategoryMenuComponent = () => {
    return (
        <div className={Styles.menu}>
            <h2>دسته بندی کالا ها</h2>
            <img src={menuicon} alt="menuicon" />
        </div>
    );
}


