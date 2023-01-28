import React from 'react';
import plusicon from '../../assets/images/plus.png'
import imageSrc from '../../assets/images/profile.png'
import { AiOutlinePicture } from 'react-icons/ai'
import Styles from './modals.module.scss'
const FileInput = () => {
    return (
        <div className="Profile-picture">
            <div className="profileimg">
                <AiOutlinePicture className={Styles.OutlinePicture} />
            </div>
            <label htmlFor="filechoose" className="filechooser">
                <div style={{ width: '40px' }}>

                    <img width={40} src={plusicon} alt="plus.png" />
                </div>
            </label>
            <input type="file" id="filechoose" />
        </div>
    );
}

export default FileInput;
