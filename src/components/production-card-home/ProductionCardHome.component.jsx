import React from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
import Styles from './ProductionCardHome.module.css'
export const ProductionCardHome = ({ name, price, image }) => {

    return (
        <>
            <div className={Styles.ProductionCardHome}>
                <div className={Styles.imagecontainer}>
                    <img src={image} alt={image} />
                </div>
                <div className={Styles.textflex}>
                    <span className={Styles.name} >{name}</span>
                    <span style={{ direction: 'rtl' }}>{price} <span className='digifont'>تومان</span>  </span>
                </div>
            </div>
        </>
    );
}

{/* <div className={Styles.ProductionCardHome}>
<div className={Styles.imagecontainer}>
    <img src={image} alt={image} />
</div>
<div className={Styles.textflex}>
    <span className={Styles.name} >{name}</span>
    <span style={{ direction: 'rtl' }}>{price} <span className='digifont'>تومان</span>  </span>
</div>
</div> */}

// <>
// {
//     fakeArray.map(() => {
//         <div className={Styles.ProductionCardHome}>
//             <div className={Styles.imagecontainerplaceholder}>
//                 <img src={'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_185fce472d4%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_185fce472d4%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.53125%22%20y%3D%2297.44000034332275%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'} alt={image} />
//             </div>
//             <div >
//                 <Placeholder animation="glow">
//                     <Placeholder xs={8} />
//                     <Placeholder xs={6} />
//                     <Placeholder style={{ width: '10rem', display: 'block' }} bsPrefix=' ' xs={7} />
//                 </Placeholder>
//             </div>

//         </div>
//     })
// }
// </>