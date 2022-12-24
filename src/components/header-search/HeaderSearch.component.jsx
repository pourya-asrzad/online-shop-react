import Styles from './HeaderSearch.module.css'
export const HeaderSearchComponent = () => {
    return (
        <input className={Styles.headersearchinput} placeholder="جستجو..." type="search" name="search" id="search" />
    );
}


