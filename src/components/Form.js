import React, { Component } from 'react'
import {Form, Button}  from 'react-bootstrap'

class FormComponent extends Component {
  render() {
    return (
      <div>
     <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
  </Form.Group>
  <Button variant="danger" type="submit">
    Submit
  </Button>
</Form>
      </div>
    )
  }
}

export default FormComponent