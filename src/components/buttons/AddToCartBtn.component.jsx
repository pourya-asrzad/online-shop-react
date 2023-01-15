import React from 'react';

const AddToCartBtn = ({ children, className }) => {
    return (
        <button className={className}>{children}</button>
    );
}

export default AddToCartBtn;
