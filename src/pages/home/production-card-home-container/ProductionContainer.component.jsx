import React from 'react';
import { useState } from 'react';
import { Placeholder } from 'react-bootstrap';
import { ProductionCardHome } from '../../../components/production-card-home/ProductionCardHome.component';
import { useFetchHomecategoryQuery, useFetchHomeProductsQuery } from '../../../store/products/homeProductsApiSlice';
import './ProductionContainer.scss'
import Styles from './ProductionCardHome.module.css'
import { Link } from 'react-router-dom';
import { INTERNAL_PATHS } from '../../../configs/routs.config';
const ProductionContainer = ({ categoryId }) => {
    const fakeArray = ['1', '2', '3', '4', '5', '6', '7', '8']
    const { data: someProducts = [], isLoading: someProductLoading, isSuccess } = useFetchHomeProductsQuery(categoryId)
    const { data: filterName, isLoading: categoryisLoading = false } = useFetchHomecategoryQuery(categoryId)
    console.log(filterName);
    let categoryTitleAnswer = <Placeholder animation="glow">
        <Placeholder xs={6} />
    </Placeholder>
    console.log(categoryisLoading)
    if (categoryisLoading) {
        categoryTitleAnswer = <Placeholder style={{ width: '9rem' }} animation="glow">
            <Placeholder xs={6} />
        </Placeholder>
    } else if (isSuccess) {
        categoryTitleAnswer = <span style={{
            fontSize: "22px",
            fontWeight: 600
        }}>  {filterName[0].name}</span>
    }
    let productAnswer = null
    if (someProductLoading) {
        productAnswer = fakeArray.map(() => {
            return <div className={Styles.ProductionCardHome}>
                <div className={Styles.imagecontainerplaceholder}>
                    <img src={'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_185fce472d4%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_185fce472d4%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.53125%22%20y%3D%2297.44000034332275%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'} />
                </div>
                <div >
                    <Placeholder animation="glow">
                        <Placeholder xs={8} />
                        <Placeholder xs={6} />
                        <Placeholder style={{ width: '10rem', display: 'block' }} bsPrefix=' ' xs={7} />
                    </Placeholder>
                </div>

            </div>
        })
    }
    if (isSuccess) {
        productAnswer = someProducts.map((element) => {
            return <Link className={Styles.link} to={INTERNAL_PATHS.SINGLEPRODUCT + `/${element.id}`}>
                <ProductionCardHome key={element.id} image={element.image[0]} name={element.name} price={element.price} />
            </Link>

        })
    }
    return (
        <>
            <div className='categorycontainr'>
                <div style={{ fontSize: '20px', color: " #1c315e", marginBottom: "1rem", textAlign: 'center' }}>

                    {categoryTitleAnswer}
                </div>
                <div className='categorycontainrproductions'>

                    {
                        productAnswer
                    }

                </div>

                <div style={{ cursor: 'pointer', color: " #19bfd3", marginTop: "1rem", textAlign: 'center' }}>
                    <button className="prevcategory" style={{ color: " #19bfd3" }} >❮</button>
                    <span>مشاهده </span>
                </div>
            </div>
        </>
    );
}

export default ProductionContainer;
