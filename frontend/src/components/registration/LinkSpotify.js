// Library imports
import React from 'react';
import styled from 'styled-components';

// React Bootstrap imports
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Alert from 'react-bootstrap/Alert';


const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default function LinkSpotify(props) {

  const connect = () => {

  }

  return (
    <div>
      <ProgressBar variant="success" animated now="66"/>
      <Alert variant="secondary" style={{textAlign: "center"}}>
        Click below to link your Spotify account
      </Alert>

      <ButtonContainer>
        <Button onclick={connect}>Link Spotify</Button>
      </ButtonContainer>
    </div>
  )
} 