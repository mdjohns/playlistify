import React from "react";

// Component imports
import ModalContainer from "./ModalContainer";
import Modal from "./Modal";

function SuggestionModal(props) {
  return (
    <Modal>
      <ModalContainer>
        <h2>🎉Suggestion Submitted! 🎉</h2>
        <span>
          <b>{props.title}</b> has been suggested.
        </span>
      </ModalContainer>
    </Modal>
  );
}

export default SuggestionModal;
