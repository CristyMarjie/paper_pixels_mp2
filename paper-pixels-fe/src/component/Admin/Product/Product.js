import React, { useState, useEffect } from 'react';
import { Table, Button, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';
import ProductCreate from './ProductCreate';
import ProductList from './ProductList';

import { api } from '../../../component/api';

const Product = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    // const { products } = props;

      // const [read, update] = useState([])
        const [products, setProducts] = useState([]);
        // const [finishedCount, setFinishedCount] = useState(0);
        // const [unfinishedCount, setUnfinishedCount] = useState(0);
        // const PRODUCTLIST_KEY = 'PRODUCTLIST_API';
        // let IS_INITIAL_SETUP = 0;
        // let item;
        const ENDPOINT = `${api.ENDPOINT}/api/products`;
        

        // useEffect(() => {
        //     setFinishedCount(prods.filter((product) => product.completed).length);
        //     setUnfinishedCount(prods.filter((product) => !product.completed).length);
        // }, [prods]);

        // sync from database
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

        const getIndexById = (id) => {
            let index = products.indexOf(products.filter((product) => product.id === id)[0]);
            return index;
        };

        

        const addProduct= async (value) => {
            // console.log(`Parent has been notified to add a new task`);
            // const reader = new FileReader();
            // reader.readAsDataURL(img);
            // const base64Image = reader.result.split(',')[1];
            // console.log(`Image : ${base64Image}`);
            // prepare data
            const str = value.img;
            const parts = str.split('\\');
            const product = {
                // modify
                name: value.nam,
                description: value.desc,
                unit_price: value.price,
                top_product: value.top_prod,
                image: parts[2],
            };
            console.log(product);
            // fire an api
            await fetch(ENDPOINT, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
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
                // implement update of internal store
                const newProducts = [...products];
                newProducts.push(data);
                setProducts(newProducts);
                console.log(products);
            })
            .catch((error) => {
                alert(`Unable to create a Product. Reason: ${error.message}`);
            });
        };

        

    return (
      <>
          <label className="fs-2 text-secondary">Products</label> 
        
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="button-tooltip-2">Add Product</Tooltip>}
            >
                {({ ref, ...triggerHandler }) => (
                    <Button
                        variant="outline-secondary"
                        {...triggerHandler} ref={ref}
                        className="d-inline-flex align-items-center ms-3 mb-3"
                        onClick={handleShow}
                        >
                        <i class="fa-solid fa-plus"></i>
                    </Button>
                )}
            </OverlayTrigger>
            <div className="table-responsive p-3">
            <Table bordered hover className="text-secondary text-center">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Details</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        products.map((item, index) => (
                            <ProductList 
                                product={item}
                                key={item.id}
                                index={item.id}
                            />
                            
                        ))
                    }
                </tbody>
                </Table>
            </div>
                
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className="text-center">
                <h1 className="text-secondary text-center py-3">ADD PRODUCT</h1>
                    <ProductCreate addProduct={addProduct}  />
                </Modal.Body>
            </Modal>
                
      </>
    );
}

// function Product() {
//     const products = [
//         {
//             name: 'Calling Card',
//             unit_price: '300',
//             description: '350gsm Matte Laminated',
//         },
//         {
//             name: 'Brochure',
//             unit_price: '100',
//             description: '350gsm Matte Laminated',
//         },
//         {
//             name: 'Magic Mug',
//             unit_price: '350',
//             description: '350gsm Matte Laminated',
//         },
//     ];

//     return <Products products={products} />;
  
// }

export default Product;
