import React from 'react';
import plusicon from '../../assets/images/plus.png'
import imageSrc from '../../assets/images/profile.png'
import { AiOutlinePicture } from 'react-icons/ai'
import Styles from './modals.module.scss'
import { useState } from 'react';
const FileInput = ({ setFile, imageData, setImageData, fileIsTouched, setFileIsTouched }) => {

    function encodeImageFileAsURL(e) {
        console.log(e.target.files)
        setFileIsTouched(true)
        const filesSelected = e.target.files;
        if (filesSelected.length > 0) {
            const fileToLoad = filesSelected[0];
            setFile(fileToLoad)
            const fileReader = new FileReader();
            fileReader.onload = function (fileLoadedEvent) {
                const srcData = fileLoadedEvent.target.result; // <- data: base64
                setImageData(srcData)
                console.log(srcData)
                console.log(imageData)
                const imageSizeInByte = new Blob([srcData]).size
                const imageSizeInMegeByte = imageSizeInByte / 1000000
            }
            fileReader.readAsDataURL(fileToLoad);
        }
    }

    return (
        <div className="Profile-picture">
            <div className="profileimg">
                {imageData !== '' || imageData !== false ? <img src={imageData} alt="productimage" /> : <AiOutlinePicture className={Styles.OutlinePicture} />}
            </div>
            <label htmlFor="filechoose" className="filechooser">
                <div style={{ width: '40px' }}>
                    <img width={40} src={plusicon} alt="plus.png" />
                </div>
            </label>
            <input accept="image/*" onChange={encodeImageFileAsURL} type="file" id="filechoose" />

        </div>
    );
}

export default FileInput;
