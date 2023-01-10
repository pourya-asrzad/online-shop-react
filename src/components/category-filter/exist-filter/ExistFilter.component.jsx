import React from 'react';
import Styles from './ExistFilter.module.scss'
const ExistFilter = () => {
    return (
        <div className={Styles.ExistFilter}>
            <div className={Styles.exist_filter_header}>
                <h3> :دسته بندی بر اساس </h3>
            </div>
            <div className={Styles.radiosParent}>

                <div className='flex a-c'>
                    <input className={Styles.radio_input} type="radio" id="exist" name="existfilte" value="exist"
                    />
                    <label htmlFor="exist">موجود</label>
                </div>

                <div className='flex a-c'>
                    <input className={Styles.radio_input} type="radio" id="all" name="existfilte" value="all" />
                    <label htmlFor="all">همه</label>
                </div>
            </div>


        </div>
    );
}

export default ExistFilter;
