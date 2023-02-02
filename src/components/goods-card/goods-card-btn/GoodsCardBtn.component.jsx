import React from 'react';
import Button from 'react-bootstrap/Button';

const GoodsCardBtn = ({ id, children, icon, variant = null, onclick = null }) => {
    return (
        <Button id={id} variant={variant} onClick={(e) => onclick(e.target.id)}>
            <span id={id}>{children}</span>
            {icon}
        </Button>
    );
}

export default GoodsCardBtn;
