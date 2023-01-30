import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TiWarning } from 'react-icons/ti'
import Styles from './modals.module.scss'

function DeleteModal({ show, setShow }) {


    const handleClose = () => setShow(false);


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>

                        <TiWarning className={Styles.warningIcon} />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={Styles.deletemodalbody}>آیا از حذف این محصول مطمئن هستید؟</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        خیر
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        بله
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal