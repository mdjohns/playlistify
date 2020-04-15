// Library Imports
import React from 'react';
import styled from 'styled-components';

// React Bootstrap imports
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

// ------ Styled Components -----
const Container = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ContainerRow = styled.div`
  width: auto;
`
const ContainerItem = styled.div`
  padding: 5px;
  text-align: center;
`
const StyledAlert = styled(Alert)`
  text-align: center;
`


export default function Homepage() {
  return (
    <React.Fragment>
      <StyledAlert variant="secondary" >Select an option to get started</StyledAlert>

      <Container>
        <ContainerRow>
          <ContainerItem>
            <Button href="/register" variant="primary" size="lg">Host an Event</Button>
          </ContainerItem>

          <ContainerItem>
            <Button href ="/join" variant="success" size="lg">Join an Event</Button>
          </ContainerItem>
        </ContainerRow>
      </Container>
    </React.Fragment>
  )
}