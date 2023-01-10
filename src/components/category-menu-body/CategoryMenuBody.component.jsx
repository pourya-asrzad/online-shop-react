import './CategoryMenuBody.module.scss'
import ReactDOM from 'react-dom';
import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from 'react-redux';
import Styles from './CategoryMenuBody.module.scss'
import { uiActions } from '../../store/ui-slice'
import { useDispatch } from 'react-redux';
import { categoryItems } from './categoryData';
const CategoryMenuBody = () => {
    const showModal = useSelector(state => state.ui.showMenu)
    const dispatch = useDispatch()
    function hideMenuHandler() {
        dispatch(uiActions.hideMenu())
    }
    return showModal ? ReactDOM.createPortal(
        <>
            <div onMouseOver={hideMenuHandler} className={Styles.shadow}></div>
            <Accordion onMouseLeave={hideMenuHandler} className={Styles.menu} defaultActiveKey="0" flush>
                {categoryItems.map((item) => {

                    return <Accordion.Item key={item.id} eventKey={item.id}>
                        <Accordion.Header>{item.name}</Accordion.Header>
                        <Accordion.Body>
                            <ol>
                                {item.items.map((item, index) => {
                                    return (<>
                                        <li key={index}>{item}</li>
                                    </>)
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