import React from 'react';
import plusicon from '../../assets/images/plus.png'
import imageSrc from '../../assets/images/profile.png'
const FileInput = () => {
    return (
        <div className="Profile-picture">
            <div className="profileimg">
                <img width={120} src={imageSrc} alt={imageSrc} />
            </div>
            <label htmlFor="filechoose" className="filechooser">
                <img width={40} src={plusicon} alt="plus.png" />
            </label>
            <input type="file" id="filechoose" />
        </div>
    );
}

export default FileInput;
