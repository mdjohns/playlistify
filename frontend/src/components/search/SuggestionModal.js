import React, { useState, useImperativeHandle, ref } from 'react';

// Bootstrap imports
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function SuggestionModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useImperativeHandle(ref, () => {
    return (
      handleClose,
      handleShow
    )
  })

  return (
    <Modal.Dialog show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>

          <Modal.Body>
            <p>{props.songTitle} was added to the suggestion queue!</p>
          </Modal.Body>      
    </Modal.Dialog>
  )
}