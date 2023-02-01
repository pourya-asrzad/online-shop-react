import React from 'react';

const PriceWithDiscountText = ({ price, category }) => {
    return (
        <span className={category ? 'priceWithoutDiscountcategory' : 'priceWithoutDiscount'}>
            {price}
            <div className='priceWithoutDiscounthr'></div>
        </span>
    );
}

export default PriceWithDiscountText;
