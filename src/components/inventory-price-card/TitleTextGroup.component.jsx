import React from 'react';

const TitleTextGroup = ({ title, children }) => {
    return (

        <div>
            <h5>{title}</h5>
            <span>{children}</span>
        </div>

    );
}

export default TitleTextGroup;
