import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri'
const DeleteAllBtn = () => {

    return (
        <div className={`flex a-c `} style={{ cursor: 'pointer' }}>
            <RiDeleteBinLine style={{
                width: "22px",
                height: "24px",
                color: "#3a542a"
            }} />
            <span style={{ fontSize: '18px' }}>حذف همه</span>
        </div>
    );
}

export default DeleteAllBtn;
