// Library imports
import React from 'react';

// React Bootstrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Alert from 'react-bootstrap/Alert';

const alertMessage = "First, select a username and password.";
const progressPercentage = 33;

export default function RegisterHost(props) {
  return (
    <div>
      <div>
        <ProgressBar variant="success" now={{ progressPercentage }} />
        <Alert variant="secondary">{ alertMessage }</Alert>

      </div>
      <Form>
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