import React from 'react';
import Button from 'react-bootstrap/Button';

const GoodsCardBtn = ({ children, icon, variant = null, onclick = null }) => {
    return (
        <Button variant={variant} onClick={onclick}>
            <span>{children}</span>
            {icon}
        </Button>
    );
}

export default GoodsCardBtn;
