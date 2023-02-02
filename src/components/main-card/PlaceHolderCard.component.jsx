import React from 'react';
import { numberWithCommas } from '../../utils/functions.utils';
import ColorsGroup from '../colors-group/ColorsGroup.component';
import Styles from './maincard.module.scss'
import { AiFillStar } from 'react-icons/ai'
import { Placeholder } from 'react-bootstrap';
const PlaceHolderCard = (props) => {

    return (
        <div className={Styles.maincard}>

            <div className={Styles.card_header}>
                <div className={Styles.image_container} style={{ width: "281px", height: "240px", background: ' #cacaca' }}>

                </div>
            </div>
            <div
                className={Styles.card_middle_space}>
                <br />
                <br />
            </div>
            <div className={Styles.card_footer}>
                <Placeholder style={{ width: '11rem' }} animation="glow">
                    <Placeholder xs={8} />
                </Placeholder>
                <div className={Styles.price_discount_coontainer}>
                    <Placeholder style={{ width: '10rem', marginTop: ' 20px' }} animation="glow">
                        <Placeholder xs={7} />
                    </Placeholder>
                </div>
            </div>
        </div >
    );
}
export default PlaceHolderCard;