import React, { Children } from 'react';

const Pagination = ({ handelPageHange, children }) => {
    return (
        <button onClick={handelPageHange}> {children}</button>
    );
}

export default Pagination;
