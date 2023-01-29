import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryItem } from '../../../components';
import { INTERNAL_PATHS } from '../../../configs/routs.config';
import { useCategorysInHomeQuery } from '../../../store/products/homeProductsApiSlice';
import Styles from './SecondCategory.module.scss'
const SecondCategory = () => {
    const { data: category } = useCategorysInHomeQuery()
    return (
        <div className={Styles.secondcategory}>
            {category && category.map((category) => {
                return <Link key={category.id} className='link-route' to={INTERNAL_PATHS.CATEGORYS + `/${category.id}-0`}>
                    <CategoryItem key={category.id} image={category.image}>
                        {category.name}
                    </CategoryItem>
                </Link>
            })}

        </div>
    );
}

export default SecondCategory;
