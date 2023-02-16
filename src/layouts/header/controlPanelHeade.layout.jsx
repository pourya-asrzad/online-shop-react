import Nav from 'react-bootstrap/Nav';
import React from 'react';
import Styles from './header.module.css'
import { INTERNAL_PATHS } from '../../configs/routs.config';
import { NavLink, useLocation } from 'react-router-dom';

import { HiBuildingStorefront } from 'react-icons/hi2'
const ControlPanelHeader = () => {
    const location = useLocation()

    return (
        <>
            <header className={Styles.controllpanelheadertag}>

                <Nav className={Styles.controlpanelheader} variant="tabs" defaultActiveKey={location.pathname}>
                    <div className='flex a-c j-ar' >

                        <NavLink className={Styles.backToHome} style={{ textDecoration: 'none' }} to={INTERNAL_PATHS.HOME} >
                            بازگشت به سایت
                        </NavLink>
                        <div className='flex'>
                            <Nav.Item>
                                <Nav.Link href={'/' + INTERNAL_PATHS.CONTROLPANEL} >
                                    عملکرد فروشگاه
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={'/' + INTERNAL_PATHS.CONTROLPANEL + '/' + INTERNAL_PATHS.GOODS}>کالا ها</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={'/' + INTERNAL_PATHS.CONTROLPANEL + '/' + INTERNAL_PATHS.INVENTORY_PRICE} > موجودی و قیمت ها</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={'/' + INTERNAL_PATHS.CONTROLPANEL + '/' + INTERNAL_PATHS.ORDERS} >
                                    سفارش ها
                                </Nav.Link>
                            </Nav.Item>

                        </div>
                    </div>
                    <div>
                        <h1 className={Styles.panel_header_text}><HiBuildingStorefront /> پنل مدیریت فروشگاه</h1>
                    </div>
                </Nav>
            </header>
            <div className={Styles.headerghost}></div>
        </>
    );
}

export default ControlPanelHeader;

