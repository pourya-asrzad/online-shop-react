import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { INTERNAL_PATHS } from '../configs/routs.config'
import AdminLogin from '../pages/admin-login/admin-login.page'
import Goods from '../pages/control-panel/goods/goods.page'
import InventoryPrice from '../pages/control-panel/Inventory-and-price/inventory-price.page'
import Orders from '../pages/control-panel/orders/orders.page'
import Login from '../pages/login/login.page'
import SignUp from '../pages/sign-up/sign-up.page'
import { PrivateRoutes } from './private.routes'
import { ProtectedRoutes } from './protected.routes'
import { PublicRoutes } from './public.routes'
import Home from '../pages/home/home.page'
import SearchPage from '../pages/search/search.page'
const LazyHome = React.lazy(() => import('../pages/home/home.page'))
const LazyCart = React.lazy(() => import('../pages/cart/cart.page'))
const LazyNotFound = React.lazy(() => import('../pages/Error/not-found.page'))
const Category = React.lazy(() => import('../pages/category/category.page'))
const SingleProduct = React.lazy(() => import('../pages/single-product/single-product.page'))
export const AppRouting = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicRoutes />}>
                    <Route path={INTERNAL_PATHS.HOME} element={<LazyHome />} />
                    <Route path={INTERNAL_PATHS.CART} element={<LazyCart />} />
                    <Route path={INTERNAL_PATHS.SEARCH} element={<SearchPage />} />
                    <Route path={INTERNAL_PATHS.CATEGORYS}  >
                        <Route path=':id' element={<Category />} />
                    </Route>
                    <Route path={INTERNAL_PATHS.PAGE404} element={<LazyNotFound />} />
                    <Route path={INTERNAL_PATHS.SINGLEPRODUCT}>
                        <Route path=':id' element={<SingleProduct />} />
                    </Route>
                </Route>
                <Route element={<PrivateRoutes />}>
                    <Route path={INTERNAL_PATHS.LOGIN} element={<Login />} />
                    <Route path={INTERNAL_PATHS.SIGNUP} element={<SignUp />} />
                    <Route path={INTERNAL_PATHS.ADMIN_LOGIN} element={<AdminLogin />} />
                </Route>
                <Route element={<ProtectedRoutes />}>
                    <Route path={INTERNAL_PATHS.CONTROLPANEL} >
                        <Route index element={<Goods />} />
                        <Route path={INTERNAL_PATHS.ORDERS} element={<Orders />} />
                        <Route path={INTERNAL_PATHS.INVENTORY_PRICE} element={<InventoryPrice />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}