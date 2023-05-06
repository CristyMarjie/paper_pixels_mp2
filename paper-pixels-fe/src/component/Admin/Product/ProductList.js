// import
import React, {useState} from 'react';
import { Dropdown, Modal, FloatingLabel, Form, Button, Alert } from 'react-bootstrap';
import { api } from '../../../component/api';


function ProductList({ product, index }) {
    const ENDPOINT = `${api.ENDPOINT}/api/products`;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [smShow, setSmShow] = useState(false);

    const [activeButton, setActiveButton] = useState('');
    const toggleModal = (buttonIndex) => {
        setMsg('');
        setVariant('');
        setShow(true);
        setActiveButton(index);
    };

    const [activeButton3, setActiveButton3] = useState(null);
    const toggleModal3 = (buttonIndex2) => {
        setActiveButton3(buttonIndex2);
    };
    const [activeButton2, setActiveButton2] = useState(null);
    const toggleModal2 = (buttonIndex2) => {
        setActiveButton2(buttonIndex2);
    };

    const [nam, setName] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const [top_prod, setTop] = useState('');
    const [img, setImg] = useState('');
    const [variant, setVariant] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct({ index,nam, price, desc, top_prod });
        setName('');
        setDesc('');
        setPrice('');
        setTop('');
      };
    const updateProduct = async (value) => {
    // console.log(`Complete task for id ${id} is called from parent`);
    console.log(`updateProduct : ${index}`);
        const products = {
            // modify
            name: value.nam,
            description: value.desc,
            unit_price: value.price,
            top_product: value.top_prod,
        };
        
        await fetch(`${ENDPOINT}/${index}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(products),
        })
        .then((data) => {
            // alert(`Successfully Updated`);
            setVariant('success');
            setMsg('Successfully Updated');
        })
        .catch((error) => {
        alert(`Unable to update task`);
        });
    };
    const deleteProduct = () => {
        fetch(`${ENDPOINT}/${index}`, {
          method: 'DELETE',
          mode: 'cors',
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.message.includes('successfully deleted')) {
                setActiveButton2(null);
                alert(`Successfully deleted product id=${index}`);
            //   () => toggleModal2(null);
                
              
            } else {
              alert(`Unable to delete product id=${index}`);
            }
          })
          .catch((error) => {
            alert(`Unable to delete product.`);
          });
      };
  return (
    
    <>
        {index>0 ? 
            <tr key={index}>
                <td>{index}</td>
                <td>{product.name}</td>
                <td>PHP {product.unit_price}</td>
                <td>{product.description}</td>
                <td>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary"></Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                            <Dropdown.Item key={index} onClick={() => toggleModal(index)}>Edit</Dropdown.Item>
                            <Dropdown.Item key={index} onClick={() => toggleModal2(index)}>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </td>
            </tr> 
            : 
            <tr>
                <td colSpan={5}>
                    No records to show.
                </td>
            </tr> 
        }
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                
            </Modal.Header>
            <Modal.Body>
                <h1 className="text-secondary text-center py-3">UPDATE PRODUCT</h1>
              <form onSubmit={handleSubmit} id="updateProduct" className="text-center">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Product Name"
                    className="m-3"
                >
                    <Form.Control type="text" placeholder={product.name} value={nam} onChange={(e) => {setName(e.target.value);}}/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Price"
                    className="m-3"
                >
                    <Form.Control type="number" placeholder={product.unit_price} value={price} onChange={(e) => {setPrice(e.target.value);}}/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Description"
                    className="m-3"
                >
                    <Form.Control type="text" placeholder={product.description} value={desc} onChange={(e) => {setDesc(e.target.value);}} />
                </FloatingLabel>
                <FloatingLabel
                controlId="floatingSelectGrid"
                label="Top Product"
                className="m-3"
                >
                <Form.Select aria-label="Floating label select example" value={top_prod} onChange={(e) => {setTop(e.target.value);}}>
                    <option value="Y">YES</option>
                    <option value="N">NO</option>
                </Form.Select>
                </FloatingLabel>
                <Button type="submit" variant="outline-secondary" size="lg" className="m-4">
                    UPDATE
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

        <Modal
            show={activeButton2 !== null} onHide={() => toggleModal2(null)}
            aria-labelledby="example-modal-sizes-title-sm"
        >
            {/* <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
                Small Modal
            </Modal.Title>
            </Modal.Header> */}
            <Modal.Body className="text-center">
                <p><h5>ARE YOU SURE ?</h5></p>
                <p>
                    <Button variant="primary" className="m-3" onClick={deleteProduct}>
                    YES
                    </Button>
                    <Button variant="danger" className="m-3" onClick={() => toggleModal2(null)}>
                    NO
                    </Button>
                </p>
            </Modal.Body>
        </Modal>
        
        
    </>

  );
}

// export default funcName
export default ProductList;
