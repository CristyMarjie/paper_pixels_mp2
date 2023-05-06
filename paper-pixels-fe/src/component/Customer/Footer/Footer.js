import React from 'react';
import { Link } from 'react-router-dom';
// import SignupModal from '../Modal/SignupModal';
// import UserLogin from '../Modal/UserLogin';
import HowToOrder from '../Modal/HowToOrder';


function Footer() {
  return (
    <>
      <footer className="py-5 text-secondary">
        <div className="container">
          <div className="row pb-5">
            <div className="col-12 text-center">
              <Link to="#top">
                <img width="40px" src="img/top.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="row m-2">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div>
                <h5 className="fw-bold">Contact Us</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link className="nav-link text-secondary">
                      Printing Services <br />
                      Business Hours: <br />
                      Monday - Saturday
                      <br />
                      8:00 AM - 6:00 PM
                      <br />
                      Online Shop - Business Hours: 24/7
                      <br />
                      Main address : Brgy. Duterte, Davao City
                      <br />
                      Contact no. : 0946 934 1998
                      <br />
                      Email : account@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
              <div className="">
                <h5 className="fw-bold">Payment Option</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="nav-link text-secondary"
                      aria-current="page"
                      href="paymentmethod.html"
                    >
                      Bank Transfer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link text-secondary"
                      aria-current="page"
                      href="paymentmethod.html"
                    >
                      Gcash
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link text-secondary"
                      aria-current="page"
                      href="paymentmethod.html"
                    >
                      Maya
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h5 className="fw-bold">Stay Connected</h5>
                <ul className="list-unstyled">
                  <Link
                    to="https://www.facebook.com/printcraffiti"
                    className=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook text-secondary fs-2 m-1"></i>
                  </Link>
                  <Link
                    to="https://www.m.me/printcraffiti"
                    className=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook-messenger text-secondary fs-2 m-1"></i>
                  </Link>
                  <Link
                    to="https://www.instagram.com/mpdpcompany/"
                    className=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram text-secondary fs-2 m-1"></i>
                  </Link>
                  <Link to="" className="">
                    <i className="fa-brands fa-viber text-secondary fs-2 m-1"></i>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h5 className="fw-bold">More</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="nav-link text-secondary"
                      aria-current="page"
                      to="/faqs"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link text-secondary"
                      aria-current="page"
                      data-bs-toggle="modal"
                      data-bs-target="#howtoorderModal"
                      href="#"
                    >
                      <HowToOrder />
                    </Link>
                  </li>
                  <li>
                    {/* <Link
                      className="nav-link text-secondary"
                      aria-current="page"
                      data-bs-toggle="modal"
                      data-bs-target="#userloginModal"
                      href="#"
                    >
                      <UserLogin />
                    </Link> */}
                  </li>
                  <li>
                    
                  {/* <SignupModal /> */}



                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-center m-2">
            <div className="copyright ">
              <p className="fw-bold">Copyright @ 2023 Paper Pixels</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
