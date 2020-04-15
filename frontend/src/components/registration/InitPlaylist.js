// Library imports
import React from 'react';
import styled from 'styled-components';

// React Bootstrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Alert from 'react-bootstrap/Alert';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default function InitPlaylist(props) {

  const connect = () => {

  }

  return (
    <div>
      <ProgressBar variant="success" animated now="99"/>
      <Alert variant="secondary" style={{textAlign: "center"}}>
        Get your playlist started!
      </Alert>

      <Form>
        <Form.Label>Playlist Name</Form.Label>
        <Form.Control type="text"></Form.Control>

        <ButtonContainer>
          <Button>Submit</Button>
        </ButtonContainer>
      </Form>

    </div>
  )
} 