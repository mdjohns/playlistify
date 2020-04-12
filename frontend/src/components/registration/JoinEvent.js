// Library imports
import React from 'react';

// React Bootstrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


export default function RegisterHost(props) {
  return (
    <div>
      <div>
        <Alert variant="secondary" style={{textAlign: "center"}}>
          Enter your display name and the event code provided by the host.
        </Alert>
      </div>
      <Form>
        <Form.Group controlId="formDisplayName">
          <Form.Label>Display Name</Form.Label>
          <Form.Control type="text" placeholder="Enter a display name"/>
        </Form.Group>

        <Form.Group controlId="formEventCode">
          <Form.Label>Event Code</Form.Label>
          <Form.Control type="text" placeholder="Enter the event code" />
        </Form.Group>
        <Button type="submit">Join</Button>
      </Form>
    </div>
  )
} 