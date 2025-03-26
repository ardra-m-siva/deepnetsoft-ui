import React from 'react'
import { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { addFoodMenuItemApi, getAllFoodItemApi } from '../services/allApi';
export const MenuSect = ({ selectedMenu }) => {
    const [show, setShow] = useState(false);
    const [foodDetails, setFoodDetails] = useState(false);
    const [foodItem, setFoodItem] = useState({
        title: "", description: "", price: "", category: selectedMenu?.name
    });
    useEffect(() => {
        if (selectedMenu?.name) {
            getAllFoodItem();
        }
    }, [selectedMenu?.name])


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddItem = async () => {
        const newFoodItem = {
            ...foodItem,
            category: selectedMenu?.name // Ensure category is set
        };
        const { title, description, price, category } = newFoodItem
        try {
            if (title && description && price && category) {
                // api call
                const result = await addFoodMenuItemApi(newFoodItem)
                if (result.status == 200) {
                    alert("Item Added Successfully")
                    getAllFoodItem()
                    handleClose()
                }
            } else {
                alert("Please Fill the form Completly")
            }
        } catch (err) {
            console.log(err);
        }

    }

    const getAllFoodItem = async () => {
        try {
            if (selectedMenu?.name) {
                const passingData = {
                    category: selectedMenu?.name
                }
                const result = await getAllFoodItemApi(passingData)
                setFoodDetails(result.data)
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className='descriptionSection d-flex align-items-center'>
                <div className='container-fluid '>
                    <div className="row justify-content-center align-items-center w-100">
                        <div className="col-lg-1 d-sm-none">
                        </div>
                        <div className="col-lg-10 ">
                            <div className='border p-3 juice-container'>
                                <img src="https://s3-alpha-sig.figma.com/img/08f1/ba92/09e436820849a421ec0b1fe5126bf9b5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nHH5ikf0w~1AI9tETSX3FOP3fDLT24aUtN3k8EXaDXf1Iwnw8zr2yi8TMTSZl9xhOzV9a8DXNBKFwWynwpVctPEILgS4bU2fJKouUBuVRYA8n8N0wbJM7uHuST5LYmhQj99iGQZV~eKdfZ7OC0I-Nvw8MNNQ83LEJgaL-J-UFhhMmlGbB4-6TmCqLxKP6ohzKcaLc8X3jxW6VwXQNPFnu9Rv83FEuBHI3w5kBL2fH5CpSgM0MDprGT0opt6BH~1I3cAc3GycUi827evLBcWJ0sNUtmxTuuQJ2X4KKLGTMdxGRTxpHvqNpcP-9d-766OyGB6knoF4LT6QyZomDANPsA__" width={'190px'} className='juice-image' alt="" />
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div className='bg-white me-2' style={{ backgroundColor: ' #857878', width: '68px', height: '2px' }}></div>
                                    <h1 className='text-white text-center my-4' style={{ fontSize: '50px', textShadow: "3px 3px 5px #800020" }}>{selectedMenu?.name.toUpperCase()}</h1>
                                    <div className='bg-white ms-2' style={{ backgroundColor: ' #857878', width: '68px', height: '2px' }}></div>
                                </div>
                                <div className='row py-2'>
                                    {
                                        foodDetails.length > 0 ?
                                            foodDetails.map(item => (
                                                <div className='col-lg-6 px-4 py-2'>
                                                    <h4 className='text-white'>{item.title}........................${item.price}</h4>
                                                    <p className='fw-normal text-light text-left' style={{ fontFamily: '"Kelly Slab", sans-serif' }}>{item?.itemDescription}</p>
                                                </div>
                                            ))
                                            :
                                            <div className='text-center text-danger'>No Items Found</div>
                                    }
                                </div>
                            </div>
                            <img src="https://s3-alpha-sig.figma.com/img/6b91/b238/f07a69022d4c64e313237eadaceb997f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZK22g00Fpmpy8pZ~GIXeqlTB7e3sppQKLvxTKhCKG9Z4cMmX1hXDts91EcZ0ZQCDSH~68-Sqv9fYl5AwJDOaQVYttDiHv9C06L~T7AredBQZkAxEgvzc6DUeDVkP0jW-dzVEpnHipZt~r~wljYohq7SgSF61E-NUQjDfwzNgtAsLcRKZeCHAn0lDTxTs-N1UxA6LTdETE4gtmzm6aACXt4sBOAbShcOF2vHR2mAMvdJpzB1JXEfPDTBFyxGSW53hnA2qiuue9eeccj-KP2zhDn16B~578gd~cBsYLO1Qx~VXxzcheoSh4AE7MkNVQrc3IsDq43qw1ye8VfRZJuTuyA__" alt="" className='juice-plate' width={'192px'} />
                        </div>
                        <div className="col-lg-1 d-sm-none"></div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center my-5'>
                        <button onClick={handleShow} className='btn rounded-0 me-2 text-white bg-black px-4' style={{ border: '1px solid #0796EF' }}>+ ADD MENU ITEM</button>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a New Menu Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input onChange={e => setFoodItem({ ...foodItem, title: e.target.value })} type="text" className='w-100 form-control m-2' placeholder='Enter the Menu Title' />
                    <textarea onChange={e => setFoodItem({ ...foodItem, description: e.target.value })} name="" id="" className='w-100 form-control m-2' placeholder='Enter a Description'></textarea>
                    <input onChange={e => setFoodItem({ ...foodItem, price: e.target.value })} type="text" className='w-100 form-control m-2' placeholder='Enter the Price' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddItem}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
