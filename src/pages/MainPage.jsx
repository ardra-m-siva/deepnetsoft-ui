import React from 'react'
import logoImg from '../assets/logo.png'
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import { addMenuItemApi, getAllMenuItemApi } from '../services/allApi';
import MenuSection from './menuSection';
const MainPage = () => {
    const [menuItemDetails, setMenuItemDetails] = useState({
        name: " ", description: ""
    })
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [show, setShow] = useState(false);
    const [allMenues, setAllMenues] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(()=>{
        getAllMenues()
    },[])

    useEffect(() => {
        if (allMenues.length > 0 && selectedMenu === null) {
            setSelectedMenu(allMenues[0])
        }
    }, [allMenues]); 

    const handleMenuAdd = async () => {
        const { name, description } = menuItemDetails
        if (name && description) {
            // api call
            const result = await addMenuItemApi(menuItemDetails)
            if (result.status == 200) {
                alert("Menu Added Successfully")
                getAllMenues()
                handleClose()
            }
        } else {
            alert("Fill the form Completely")
        }
    }

    const getAllMenues = async () => {
        try {
            const result = await getAllMenuItemApi()
            if (result.status == 200) {
                setAllMenues(result.data)
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (

        <>
            <div className='bg-black'>
                <nav className="navbar navbar-expand-lg bg-black " style={{ minHeight: '100px' }}>
                    <div className="container-fluid">
                        {/* logo */}
                        <div className='logo-container d-flex'>
                            <img className='img-fluid' src={logoImg} alt="" />
                            <div className='mt-3 d-none d-md-block'>
                                <h3 className='text-white d-flex mb-0'><span style={{ color: '#0796EF' }}>DEEP</span> <span className='ms-1'> NET</span></h3>
                                <h3 className='text-secondary '>SOFT</h3>
                            </div>
                        </div>
                        <a className="navbar-brand" href="#"></a>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end  me-5" id="navbarNav" >
                            <ul className="navbar-nav " style={{ fontSize: '16px' }}>
                                <li className="nav-item me-2 ">
                                    <a className="nav-link text-white" aria-current="page" href="#">HOME</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link" style={{ color: '#0796EF' }} href="#">MENU</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link text-white" href="#">MAKE A RESERVATION</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link text-white" aria-disabled="true">CONTACT US</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='backgroundStyle-menu w-100 pt-5' height={'311px'}>
                    <div className='d-flex  justify-content-center '>
                        <h1 className='text-light' style={{ fontSize: '75px', textShadow: "3px 3px 5px #800020" }}>MENU</h1>
                    </div>
                    <p className='text-center text-white mx-auto' style={{ fontFamily: "Kelly Slab, sans-serif", maxWidth: '600px' }}>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to  place an order, use the "Order Online" button located below the menu.</p>
                </div>
                <div className='background-menuList w-100 d-flex justify-content-center align-items-center'>
                    {
                        allMenues.length > 0 &&
                        allMenues.map(item => (
                            <button onClick={() => setSelectedMenu(item)} key={item._id} className='btn rounded-0 me-2 text-white  px-4' style={{ border: '1px solid #0796EF', backgroundColor: selectedMenu?.name === item.name ? '#0796EF' : 'black' }}>{item.name.toUpperCase().split(" ")[0]}</button>
                        ))
                    }
                    <button onClick={handleShow} className='btn rounded-0 me-2 text-white bg-black px-4' style={{ border: '1px solid #0796EF' }}> + ADD MENU</button>

                </div>
                <MenuSection selectedMenu={selectedMenu} />
                <div className='bg-black p-5 row mx-5 text-white justify-content-center' >
                    <div className='connect-Deepnet col-12 col-md-6 col-lg-3 order-2 order-md-1 m-2'>
                        <p style={{ color: '#0796EF' }}>CONNECT WITH US</p>
                        <p> +91 9567843340</p>
                        <p><i className="fa-solid fa-envelope" style={{ color: '#FFD43B' }}></i> info@deepnetsoft.com</p>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 connect-Deepnet align-items-center order-1 order-md-2 m-2'>
                        <img className='bg-black' style={{ width: '86px', marginTop: '-66px' }} src={logoImg} alt="" />
                        <h3><span style={{ color: '#0796EF' }} >DEEP</span> NET <span className='text-secondary'>SOFT</span></h3>
                        <div className='text-secondary d-flex justify-content-center '>
                            <i className="fa-brands fa-facebook me-2"></i>
                            <i className="fa-brands fa-twitter me-2"></i>
                            <i className="fa-brands fa-youtube me-2"></i>
                            <i className="fa-brands fa-instagram me-2"></i>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3  connect-Deepnet order-3 order-md-3 m-2'>
                        <p style={{ color: '#0796EF' }}>FIND US</p>
                        <p><i className="fa-solid fa-location-dot" style={{ color: ' #FFD43B' }}></i> First floor, Geo infopark,<br /> Infopark EXPY, Kakkanad</p>
                    </div>

                </div>
                <div className='d-flex flex-column flex-md-row justify-content-evenly text-white align-items-center w-100 bg-dark text-center '>
                    <p style={{ fontWeight: 400 }}>&copy; 2024 Deepnetsoft Solutions. All rights reserved.</p>
                    <p>Terms & Conditions Privacy Policy</p>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input onChange={e => setMenuItemDetails({ ...menuItemDetails, name: e.target.value })} type="text" className='w-100 form-control m-2' placeholder='Enter the Menu Title' />
                        <textarea onChange={e => setMenuItemDetails({ ...menuItemDetails, description: e.target.value })} name="" id="" className='w-100 form-control m-2' placeholder='Enter a Description'></textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleMenuAdd}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MainPage