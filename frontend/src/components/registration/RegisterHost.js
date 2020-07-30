// Library imports
import React from 'react';

// React Bootstrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Alert from 'react-bootstrap/Alert';


export default function RegisterHost(props) {
  const registerHost = () => {
    alert("Submitted!")
  }
  return (
    <div>
      <div>
        <ProgressBar variant="success" animated now="33"/>
        <Alert variant="secondary" style={{textAlign: "center"}}>
          First, select a username and password.
        </Alert>

      </div>
      <Form onSubmit={registerHost}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter a username"/>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter a password" />
        </Form.Group>
        <Button type="submit">Register</Button>
      </Form>
    </div>
  )
} 