import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function HowToOrder() {
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
        How to Order
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How to Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            1. Choose what you want to order: Decide what items you want to
            order, and make note of any customization or special instructions
            that you may have.
          </p>
          <p>
            2. Provide shipping and payment information: Provide your shipping
            information and select a payment method.
          </p>
          <p>
            3. Review and confirm your order: Review your order details,
            including shipping address, items, and total cost. Confirm that
            everything is correct before submitting your order.
          </p>
          <p>
            4. Wait for delivery: After you've placed your order, wait for it to
            be delivered. You may receive a confirmation email or tracking
            information from the vendor.
          </p>
          <p>
            5. Receive your order: Once your order arrives, inspect it to make
            sure that everything is correct and in good condition.
          </p>
          <p>
            6. Enjoy your purchase: Now that you've received your order, enjoy
            your purchase!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HowToOrder;
