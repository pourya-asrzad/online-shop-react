import React from 'react';
import Styles from './ExistFilter.module.scss'
const ExistFilter = ({ setfilterAsquantity }) => {

    return (
        <div className={Styles.ExistFilter}>
            <div className={Styles.exist_filter_header}>
                <h3> :دسته بندی بر اساس </h3>
            </div>
            <div className={Styles.radiosParent}>
                <div className='flex a-c'>
                    <input onClick={(e) => setfilterAsquantity(e.target.value)} className={Styles.radio_input} type="radio" id="exist" name="existfilte" value="0"
                    />
                    <label htmlFor="exist">موجود</label>
                </div>

                <div className='flex a-c'>
                    <input onClick={(e) => setfilterAsquantity(e.target.value)} className={Styles.radio_input} type="radio" id="all" name="existfilte" value="1" />
                    <label htmlFor="all">همه</label>
                </div>
            </div>


        </div>
    );
}

export default ExistFilter;
