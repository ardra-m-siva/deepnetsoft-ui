
import './App.css'
import logoImg from './assets/logo.png'
function App() {

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
              <a class="navbar-brand" href="#"></a>
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
          <button  className='btn rounded-0 me-2 text-white bg-black px-4' style={{ border: '1px solid #0796EF' }}>FOOD</button>
          <button className='btn rounded-0 me-2 text-white px-4' style={{ border: '1px solid #0796EF', backgroundColor: '#0796EF' }}>DRINKS</button>
          <button className='btn rounded-0 me-2 text-white bg-black px-4' style={{ border: '1px solid #0796EF' }}>BRUNCH</button>
        </div>
        <div className='descriptionSection container-fluid d-flex align-itemscenter'>
          <div className="row justify-content-center align-items-center w-100">
            <div className="col-lg-1 d-sm-none">
            </div>
            <div className="col-lg-10 ">
              <div className='border p-3 juice-container'>
                <img src="https://s3-alpha-sig.figma.com/img/08f1/ba92/09e436820849a421ec0b1fe5126bf9b5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nHH5ikf0w~1AI9tETSX3FOP3fDLT24aUtN3k8EXaDXf1Iwnw8zr2yi8TMTSZl9xhOzV9a8DXNBKFwWynwpVctPEILgS4bU2fJKouUBuVRYA8n8N0wbJM7uHuST5LYmhQj99iGQZV~eKdfZ7OC0I-Nvw8MNNQ83LEJgaL-J-UFhhMmlGbB4-6TmCqLxKP6ohzKcaLc8X3jxW6VwXQNPFnu9Rv83FEuBHI3w5kBL2fH5CpSgM0MDprGT0opt6BH~1I3cAc3GycUi827evLBcWJ0sNUtmxTuuQJ2X4KKLGTMdxGRTxpHvqNpcP-9d-766OyGB6knoF4LT6QyZomDANPsA__" width={'190px'} className='juice-image' alt="" />
                <div className='d-flex justify-content-center align-items-center'>
                  <div className='bg-white me-2' style={{ backgroundColor: ' #857878', width: '68px', height: '2px' }}></div>
                  <h1 className='text-white text-center my-4' style={{ fontSize: '50px', textShadow: "3px 3px 5px #800020" }}>BRUNCH COCKTAILS</h1>
                  <div className='bg-white ms-2' style={{ backgroundColor: ' #857878', width: '68px', height: '2px' }}></div>
                </div>
                <div className='row py-2'>
                  <div className='col-lg-6 px-4 py-2'>
                    <h4 className='text-white'>CINNAMON TOAST CRUNCH..........................$16</h4>
                    <p className='fw-normal text-light text-left' style={{ fontFamily: '"Kelly Slab", sans-serif' }}>Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon</p>
                  </div>
                  <div className='col-lg-6 px-4 py-2' >
                    <h4 className='text-white'>BAR 42 MARY..................................................$14
                    </h4>
                    <p className='fw-normal text-light' style={{ fontFamily: '"Kelly Slab", sans-serif' }}>Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded</p>
                  </div>
                  <div className='col-lg-6 px-4 py-2'>
                    <h4 className='text-white'>MOET SPRITZ..................................................$20
                    </h4>
                    <p className='fw-normal text-light' style={{ fontFamily: '"Kelly Slab", sans-serif' }}>Aperol, St Germain, botanical liquor, fresh lime juice, mini brut Moet topper</p>
                  </div>
                </div>
              </div>
              <img src="https://s3-alpha-sig.figma.com/img/6b91/b238/f07a69022d4c64e313237eadaceb997f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZK22g00Fpmpy8pZ~GIXeqlTB7e3sppQKLvxTKhCKG9Z4cMmX1hXDts91EcZ0ZQCDSH~68-Sqv9fYl5AwJDOaQVYttDiHv9C06L~T7AredBQZkAxEgvzc6DUeDVkP0jW-dzVEpnHipZt~r~wljYohq7SgSF61E-NUQjDfwzNgtAsLcRKZeCHAn0lDTxTs-N1UxA6LTdETE4gtmzm6aACXt4sBOAbShcOF2vHR2mAMvdJpzB1JXEfPDTBFyxGSW53hnA2qiuue9eeccj-KP2zhDn16B~578gd~cBsYLO1Qx~VXxzcheoSh4AE7MkNVQrc3IsDq43qw1ye8VfRZJuTuyA__" alt="" className='juice-plate' width={'192px'} />
            </div>
            <div className="col-lg-1 d-sm-none"></div>
          </div>
        </div>
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
    </>
  )
}

export default App
