import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
 
  return (
    <>
    <Link
                      className="nav-link text-secondary"
                      aria-current="page"
                      data-bs-toggle="modal"
                      data-bs-target="#signupModal"
                      to=""
                    >
                      Signup
                    </Link>
                    <div
                      className="modal fade"
                      id="signupModal"
                      tabIndex="-1"
                      aria-labelledby="signupModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="signupModalLabel">
                              
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                          <Form className="text-center">
      <h1 className="text-secondary text-center py-3">SIGN UP</h1>
      <FloatingLabel
            controlId="floatingInput"
            label="First Name"
            className="m-3"
          >
            <Form.Control type="text" placeholder="First Name" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Last Name"
            className="m-3"
          >
            <Form.Control type="text" placeholder="Last Name" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="m-3"
          >
            <Form.Control type="email" placeholder="Email address" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Password"
            className="m-3"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Confirm Password"
            className="m-3"
          >
            <Form.Control type="password" placeholder="Confirm Password" />
          </FloatingLabel>
          <Button variant="outline-secondary" size="lg" className="m-4">
            SIGN UP
          </Button>{' '}
    </Form>
                          </div>
                        </div>
                      </div>
                    </div>
    
    </>
    
  );
};

export default SignUpForm;
