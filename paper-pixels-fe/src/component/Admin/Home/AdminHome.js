import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Home.css';
import '../dashboard.css';



const AdminHome = () => {

  return (
    <>
     <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <Link className="navbar-brand bg-dark col-md-3 col-lg-2 me-0 px-5 py-3" to="#"><label className="ms-5" >Paper Pixels</label></Link>
      <button className="navbar-toggler position-absolute d-md-none collapsed m-3" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </header>

    <div className="container-fluid p-3">
      <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              {/* <li className="nav-item mt-5">
                <Link className="nav-link active ms-3 align-middle" aria-current="page" to="#">
                  <i class="fa-solid fa-house" width="24" height="24"></i> Dashboard
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link ms-3 text-secondary fs-6" to="/admin/orders">
                <i class="fa-regular fa-clipboard " ></i> Orders
                </Link>
              </li>
              <hr />
              <li className="nav-item">
                <Link className="nav-link ms-3 text-secondary fs-6" to="/admin/products">
                <i class="fa-solid fa-cart-shopping"></i> Products
                </Link>
              </li>
              <hr />
            </ul>
          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
          <Outlet />
          
        </main>
      </div>
    </div>
      
    </>
  );
};

export default AdminHome;
