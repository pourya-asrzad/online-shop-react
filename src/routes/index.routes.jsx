import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { INTERNAL_PATHS } from '../configs/routs.config'
import Login from '../pages/login/login.page'
import { PrivateRoutes } from './private.routes'
import { PublicRoutes } from './public.routes'
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
                    <Route path={INTERNAL_PATHS.CATEGORYS} element={<Category />} />
                    <Route path={INTERNAL_PATHS.PAGE404} element={<LazyNotFound />} />
                    <Route path={INTERNAL_PATHS.SINGLEPRODUCT} element={<SingleProduct />} />
                </Route>
                <Route element={<PrivateRoutes />}>
                    <Route path={INTERNAL_PATHS.LOGIN} element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}