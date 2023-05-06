import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal';

function UserLogin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a
        className="text-secondary text-decoration-none"
        href="#"
        onClick={handleShow}
      >
        Login
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Login</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="text-center">
          <h1 className="text-secondary text-center py-3">LOGIN</h1>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="m-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="m-3"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <Button variant="outline-secondary" size="lg" className="m-4">
            LOGIN
          </Button>{' '}
          <p>
            <Form.Text className="text-muted">
              Forgot password ? Click{' '}
              <a className="text-secondary" href="#">
                here
              </a>
            </Form.Text>
          </p>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default UserLogin;
