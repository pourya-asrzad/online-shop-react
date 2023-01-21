import React from 'react';
import Button from 'react-bootstrap/Button';

const GoodsCardBtn = ({ children, icon, variant = null }) => {
    return (
        <Button variant={variant}>
            <span>{children}</span>
            {icon}
        </Button>
    );
}

export default GoodsCardBtn;
