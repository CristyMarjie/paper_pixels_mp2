// import
import React, { useState } from 'react';
import { Button, FloatingLabel, Form, InputGroup } from 'react-bootstrap';

// function
function ProductCreate(props) {
    
    const [nam, setName] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const [top_prod, setTop] = useState('');
    const [img, setImg] = useState('');

    
    const handleSubmit = (e) => {
      
        e.preventDefault();
        props.addProduct({ nam, price, desc, top_prod, img});
        setName('');
        setDesc('');
        setPrice('');
        setTop('');
    };

  return (
    <>
      <form id="createProduct" onSubmit={handleSubmit}>
        <FloatingLabel
            controlId="floatingInput"
            label="Product Name"
            className="m-3"
        >
            <Form.Control type="text" placeholder="Product Name" value={nam} onChange={(e) => {setName(e.target.value);}}/>
        </FloatingLabel>
        <FloatingLabel
            controlId="floatingInput"
            label="Price"
            className="m-3"
        >
            <Form.Control type="number" placeholder="Price" value={price} onChange={(e) => {setPrice(e.target.value);}}/>
        </FloatingLabel>
        <FloatingLabel
            controlId="floatingInput"
            label="Description"
            className="m-3"
        >
            <Form.Control type="text" placeholder="Description" value={desc} onChange={(e) => {setDesc(e.target.value);}} />
        </FloatingLabel>
        <Form.Group controlId="formFileLg" className="m-3">
          {/* <Form.Label>Upload Image</Form.Label> */}
          <Form.Control type="file" size="lg" value={img} onChange={(e) => {setImg(e.target.value);}} />
        </Form.Group>
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Top Product"
          className="m-3"
        >
          <Form.Select aria-label="Floating label select example" value={top_prod} onChange={(e) => {setTop(e.target.value);}}>
            <option>Top Product</option>
            <option value="Y">YES</option>
            <option value="N">NO</option>
          </Form.Select>
        </FloatingLabel>
        <Button type="submit" variant="outline-secondary" size="lg" className="m-4">
            SUBMIT
        </Button>
    </form>
    </>
  );
}

// export default
export default ProductCreate;
