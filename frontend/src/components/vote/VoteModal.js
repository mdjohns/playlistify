import React from 'react';
import ReactDOM from 'react-dom';

// Bootstrap
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function VoteModal(props){
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Cast Your Vote!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p> [name] has suggested: [song name]</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success">Yes</Button>
          <Button variant="danger">No</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}
