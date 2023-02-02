import React from 'react';
const TitleTextGroup = ({ title, children }) => {
    return (

        <div className='flex'>
            <span style={{ direction: 'rtl' }}>{children}</span>
            <h5>{title}</h5>
        </div>

    );
}

export default TitleTextGroup;
