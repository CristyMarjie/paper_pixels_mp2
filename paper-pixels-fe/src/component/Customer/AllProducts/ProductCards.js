import React, { useState, useEffect } from 'react';

import { Button, InputGroup, Form, Modal, Container, Col, Row, Card, FloatingLabel, Alert } from 'react-bootstrap';

import { api } from '../../../component/api';

function ProductCardsCont(props) {
  const { products } = props;
  const [nam, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [top_prod, setTop] = useState('');

  const [quantity, setQuantity] = useState('');
  const [subtotal, setSubtotal] = useState('');
  const [total, setTotal] = useState('');
  const [cust_name, setCustName] = useState('');
  const [prod_nam, setProdNam] = useState('');
  const [ship_add, setShipAdd] = useState('');
  const [ship_cost, setShipCost] = useState('');

  const [variant, setVariant] = useState('');
  const [msg, setMsg] = useState('');

  const [activeButton, setActiveButton] = useState(null);
  const toggleModal = (buttonIndex, unitPrice, prodNam, shipCost) => {
      setActiveButton(buttonIndex);
      setQuantity('');
      setTotal('');
      setVariant('');
      setMsg('');
      setSubtotal('');
      setCustName('');
      setShipAdd('');
      setProdNam(prodNam);
      setShipCost(shipCost);
      setPrice(unitPrice);
  };

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder({ prod_nam,cust_name,ship_add,quantity,total,ship_cost });
    setName('');
    setDesc('');
    setPrice('');
    setTop('');
    setQuantity('');
    setTotal('');
    setVariant('');
    setMsg('');
    setSubtotal('');
    setCustName('');
    setShipAdd('');
  };

  const handleChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
    calcSubtotal(e.target.value, price);
  };

  const calcSubtotal = (quantity, price) => {
    const subtotals = quantity*price;
    
    setSubtotal(subtotals);
    setTotal(subtotals+ship_cost);
  }

  const addOrder= async (value) => {
    const orders = {
        // modify
        product_name: value.prod_nam,
        customer_name: value.cust_name,
        shipping_address: value.ship_add,
        quantity: value.quantity,
        total_amount: value.total,
        shipping_cost: value.ship_cost,
        order_status : 'Pending'
    };
    console.log(orders);
      // fire an api
      const ENDPOINT = `${api.ENDPOINT}/api/orders`;
      await fetch(ENDPOINT, {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(orders),
      })
      .then((response) => {
          if (response.status >= 200 && response.status < 400) {
          // if request is good, return the body parsed as json
          return response.json();
          } else {
          // alert(`${response.status}: ${response.statusText}`);
          throw new Error(`${response.status}: ${response.statusText}`);
          }
      })
      .then((data) => {
          setVariant('success');
          setMsg('Successfully Placed an Order');
      })
      .catch((error) => {
          //alert(`Unable to create a Order. Reason: ${error.message}`);
          setVariant('danger');
          setMsg(`Unable to create a Order. Reason: ${error.message}`);
      });
  };

  return (
    <>
      <Container>
        <Row>
          {products.map((item, index) => (
            <Col key={index} xs={12} md={4} lg={4} xxl={4} className="mb-4">
              <Card className="p-3 card-shadow" key={index}>
                <Card.Img variant="top" src={`/img/products/${item.image}`} />
                <Card.Body>
                  <Card.Title className="text-blue">{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                 
                    <Button variant="outline-secondary" key={index} onClick={() => toggleModal(index, item.unit_price,item.name,150)} >
                    Buy Now
                    </Button>
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Modal show={activeButton !== null} onHide={() => toggleModal(null)}  >
            {/* <Modal.Header closeButton>
                <Modal.Title className="text-blue">{products[activeButton]?.name}</Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
              {/* <p><img src={products[activeButton]?.avatar} alt="Your Image" className="img-fluid" /></p> */}
              {/* <p className="text-secondary">Description : <strong>{products[activeButton]?.description}</strong></p> */}
              <p className="text-secondary text-center mt-3"><h2>Price : <strong>PHP {products[activeButton]?.unit_price}</strong></h2></p>
              <form onSubmit={handleSubmit} className="text-center">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Product Name"
                    className="mb-3"
                >
                    <Form.Control type="text" value={products[activeButton]?.name} disabled />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Shipping Cost"
                    className="mb-3"
                >
                    <Form.Control type="text" value="150" disabled />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Customer Name"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="Customer Name" value={cust_name} onChange={(e) => {setCustName(e.target.value);}}/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Shipping Address"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="Shipping Address" value={ship_add} onChange={(e) => {setShipAdd(e.target.value);}}/>
                </FloatingLabel>
                
                <InputGroup size="lg" className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Quantity
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-lg" type="number" value={quantity} onChange={handleChange}
                  />
                </InputGroup>
                <InputGroup size="lg" className="mb-3">
                  <InputGroup.Text>Subtotal</InputGroup.Text>
                  <Form.Control aria-label="Amount (to the nearest dollar)" value={subtotal} disabled/>
                  
                </InputGroup>
                <InputGroup size="lg" className="mb-3">
                  <InputGroup.Text>Total</InputGroup.Text>
                  <Form.Control aria-label="Amount (to the nearest dollar)" value={total} disabled/>
                  {/* <InputGroup.Text>.00</InputGroup.Text> */}
                </InputGroup>
                  <Button type="submit" variant="outline-secondary" size="lg" className="m-4">
                      PLACE ORDER
                  </Button>
                  <Button variant="danger" size="lg" onClick={() => toggleModal(null)}>
                      CLOSE
                  </Button>
                  <Alert key={variant} variant={variant}>
                    {msg}
                  </Alert>
            </form>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="secondary" onClick={() => toggleModal(null)}>
                Close
                </Button>
            </Modal.Footer> */}
        </Modal>
    </>
  );
}

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const ENDPOINT = `${api.ENDPOINT}/api/products`;
    useEffect(() => {
        fetch(ENDPOINT, {
        method: 'GET',
        mode: 'cors',
        })
        .then((response) => response.json())
        .then((data) => {
            setProducts([...data]);
        })
        .catch((error) => console.log('error', error));
    }, []);
  return <ProductCardsCont products={products} />;
}
// export default funcName
export default ProductCards;
