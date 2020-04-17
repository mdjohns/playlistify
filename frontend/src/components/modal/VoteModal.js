import React from "react";

// Component imports
import ModalContainer from "./ModalContainer";
import Modal from "./Modal";

function VoteModal(props) {
  return (
    <Modal>
      <ModalContainer>
        <h2>Suggestion Submitted!</h2>
        <span>{props.title} has been suggested.</span>
      </ModalContainer>
    </Modal>
  );
}

export default VoteModal;
