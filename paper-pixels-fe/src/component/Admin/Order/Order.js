import React, { useState, useEffect } from 'react';
import { Table, Button, OverlayTrigger, Tooltip, Dropdown, Modal, FloatingLabel, Form } from 'react-bootstrap';
import { api } from '../../../component/api';
// import OrderList from './OrderList';

const Order = () => {
    const [custOrders, setCustOrders] = useState([]);
    const ENDPOINT = `${api.ENDPOINT}/api/orders`;
    const [tTipId, setTID] = useState('');
    const [ord_stat, setStat] = useState('');
    const [id, setId] = useState('');

    const [activeButton2, setActiveButton2] = useState(null);
    const toggleModal2 = (buttonIndex2) => {
        setActiveButton2(buttonIndex2);
        setId(buttonIndex2);
    };

    const [activeButton3, setActiveButton3] = useState(null);
    const toggleModal3 = (buttonIndex2) => {
        setActiveButton3(buttonIndex2);
    };

    const [activeButton, setActiveButton] = useState('');
    const toggleModal = (buttonIndex, stat) => {
        setTID(buttonIndex);
        setStat(stat);
        setActiveButton(buttonIndex);
        console.log(`id : ${activeButton}`);
        console.log(`order status : ${ord_stat}`);
        updateOrder({activeButton, ord_stat});
    };

    useEffect(() => {
        fetch(ENDPOINT, {
        method: 'GET',
        mode: 'cors',
        })
        .then((response) => response.json())
        .then((data) => {
            setCustOrders([...data]);
        })
        .catch((error) => console.log('this error', error));
    }, []);

    const updateOrder = async (id,ordStat) => {
        console.log(`update_id : ${id}`);
        console.log(`update_order status : ${ordStat}`);
        await fetch(`${ENDPOINT}/${id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({order_status : ordStat}),
        })
        .then((data) => {
            // setCustOrders([...data]);
            // const newOrders = [...custOrders];
            // newOrders.push(data);
            // setCustOrders(newOrders);
            updateValueByID(id, 'order_status', ordStat);
        })
        .catch((error) => {
            alert(`Unable to update task : ${error}`);
        });
    };

        const deleteValueByID = (id) => {
            const newArray = custOrders.filter(item => item.id !== id);
            setCustOrders(newArray);
        }
        const updateValueByID = (id, key, stat) =>  {
            const newArray = custOrders.map(item => {
                if (item.id === id) {
                    return { ...item, [key]: stat };
                }
                return item;
            });
            setCustOrders(newArray);
        }
      const deleteOrder = (id) => {
        fetch(`${ENDPOINT}/${id}`, {
          method: 'DELETE',
          mode: 'cors',
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.message.includes('successfully deleted')) {
            //   alert(`Successfully deleted order id=${id}`);
                setActiveButton2(null);
                deleteValueByID(id);
                setActiveButton3(id);
            } else {
              alert(`Unable to delete order id=${id}`);
            }
          })
          .catch((error) => {
            alert(`Unable to delete order.`);
          });
      };
    
    return (
      <>
          <label className="fs-2 ms-3 text-secondary">Orders</label> 
        
            <div className="table-responsive p-3">
            <Table bordered hover className="text-secondary text-center">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Customer Name</th>
                    <th>Order Total</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {custOrders.map((item, index) => (
                       
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.customer_name}</td>
                                <td>{item.total_amount}</td>
                                <td>{item.order_status}</td>
                                <td>
                                <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip id={tTipId}>Mark as Preparing</Tooltip>}
                                >
                                    {({ ref, ...triggerHandler }) => (
                                        <Button
                                            variant="outline-secondary"
                                            {...triggerHandler} ref={ref}
                                            className="d-inline-flex align-items-center ms-2 me-2 mb-1"
                                            onClick={() => updateOrder(item.id, 'Preparing')}
                                            >
                                            <i class="fa-solid fa-spinner"></i>
                                        </Button>
                                    )}
                                </OverlayTrigger>
                                <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip id={tTipId}>Mark as Shipped Out</Tooltip>}
                                >
                                    {({ ref, ...triggerHandler }) => (
                                        <Button
                                            variant="outline-secondary"
                                            {...triggerHandler} ref={ref}
                                            className="d-inline-flex align-items-center ms-2 me-2 mb-1"
                                            onClick={() => updateOrder(item.id, 'Shipped Out')}
                                            >
                                            <i class="fa-solid fa-truck-fast"></i>
                                        </Button>
                                    )}
                                </OverlayTrigger>
                                <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip id={tTipId}>Mark as Delivered</Tooltip>}
                                >
                                    {({ ref, ...triggerHandler }) => (
                                        <Button
                                            variant="outline-secondary"
                                            {...triggerHandler} ref={ref}
                                            className="d-inline-flex align-items-center ms-2 me-2 mb-1"
                                            onClick={() => updateOrder(item.id, 'Delivered')}
                                            >
                                            <i class="fa-solid fa-circle-check"></i>
                                        </Button>
                                    )}
                                </OverlayTrigger>
                                <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip id={tTipId}>Delete Order</Tooltip>}
                                >
                                    {({ ref, ...triggerHandler }) => (
                                        <Button
                                            variant="outline-secondary"
                                            {...triggerHandler} ref={ref}
                                            className="d-inline-flex align-items-center ms-2 me-2 mb-1"
                                            onClick={() => toggleModal2(item.id)}
                                            >
                                            <i class="fa-solid fa-trash"></i>
                                        </Button>
                                    )}
                                </OverlayTrigger>
                                
                                </td>
                            </tr>
                        
                        
                    ))}
                </tbody>
                </Table>
            </div>
            <Modal
                show={activeButton2 !== null} onHide={() => toggleModal2(null)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Body className="text-center">
                    <p><h5>ARE YOU SURE ?</h5></p>
                    <p>
                        <Button variant="primary" className="m-3" onClick={() => deleteOrder(id)}>
                        YES
                        </Button>
                        <Button variant="danger" className="m-3" onClick={() => toggleModal2(null)}>
                        NO
                        </Button>
                    </p>
                </Modal.Body>
            </Modal>
            <Modal
                show={activeButton3 !== null} onHide={() => toggleModal3(null)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Body className="text-center">
                        <p><h5>ORDER SUCCESSFULLY DELETED</h5></p>
                        <p className="text-success fs-1">
                            <i class="fa-solid fa-circle-check"></i>
                        </p>
                        <p>
                            <Button variant="success" className="m-3" onClick={() => toggleModal3(null)}>
                                OK
                            </Button>
                        </p>
                    </Modal.Body>
                </Modal>
            
                
      </>
    );
}

export default Order;
