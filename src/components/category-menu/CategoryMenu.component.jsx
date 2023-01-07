import menuicon from '../../assets/svg/menu.svg'
import Styles from './CategoryMenu.module.css'
import { uiActions } from '../../store/ui-slice';

import { useDispatch } from 'react-redux';
export const CategoryMenuComponent = () => {
    const dispatch = useDispatch()

    function showModal() {
        dispatch(uiActions.showMenu())
    }

    return (
        <div onMouseOver={showModal} className={Styles.menu}>
            <h2>دسته بندی کالا ها</h2>
            <img src={menuicon} alt="menuicon" />
        </div>
    );
}


