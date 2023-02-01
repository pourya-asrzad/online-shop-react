import { useLocation, useNavigate } from 'react-router-dom';
import Styles from './HeaderSearch.module.css'
export const HeaderSearchComponent = () => {
    const currentLocation = useLocation()
    console.log(currentLocation);
    const navigate = useNavigate()
    function searchOnClick(params) {
        if (currentLocation.pathname) {
            navigate('/search')
        }
    }
    return (
        <input onClick={searchOnClick} autoFocus={currentLocation.pathname == '/search' ? true : false} className={Styles.headersearchinput} placeholder="جستجو..." type="search" name="search" id="search" />
    );
}


