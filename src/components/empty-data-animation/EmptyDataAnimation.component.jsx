import React from 'react';

const EmptyDataAnimation = () => {
    return (
        <video className='notDataanimation' width="320" height="240" autoPlay={true} loop>
            <source src="https://cdnl.iconscout.com/lottie/premium/thumb/no-result-4957988-4133894.mp4" type="video/mp4" />
        </video>
    );
}

export default EmptyDataAnimation;
