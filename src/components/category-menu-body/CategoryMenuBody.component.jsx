import './CategoryMenuBody.module.scss'
import ReactDOM from 'react-dom';
import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from 'react-redux';
import Styles from './CategoryMenuBody.module.scss'
import { uiActions } from '../../store/ui-slice'
import { useDispatch } from 'react-redux';
import { useCategorysInHomeQuery, useSubcategoryHomeQuery } from '../../store/products/homeProductsApiSlice';
import { Link } from 'react-router-dom';
import { INTERNAL_PATHS } from '../../configs/routs.config';
const CategoryMenuBody = () => {
    const showModal = useSelector(state => state.ui.showMenu)
    const dispatch = useDispatch()
    function hideMenuHandler() {
        dispatch(uiActions.hideMenu())
    }
    const { data: category = [] } = useCategorysInHomeQuery()
    const { data: subCategory = [] } = useSubcategoryHomeQuery()

    return showModal ? ReactDOM.createPortal(
        <>
            <div onMouseOver={hideMenuHandler} className={Styles.shadow}></div>
            <Accordion onMouseLeave={hideMenuHandler} className={Styles.menu} defaultActiveKey="0" flush>
                {category.length > 0 && category.map((category) => {
                    return <Accordion.Item key={category.id} eventKey={category.id}>
                        <Accordion.Header >{category.name}</Accordion.Header>
                        <Accordion.Body >
                            <ol key={category.id} >
                                {subCategory && subCategory.filter((ele) => ele.category == category.id).map((item, index) => {
                                    return (<a key={item.id} className='link-route' href={INTERNAL_PATHS.CATEGORYS + `/${category.id}-${item.id}`}>

                                        <li key={index}>{item.name}</li>
                                    </a>)
                                })}
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                })
                }
            </Accordion>
        </>,
        document.getElementById('menu')
    ) : ''
}

export default CategoryMenuBody;