import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const isDropdownActive = ["/price", "/team", "/testimonial", "/blog", "/detail"].includes(location.pathname);

  return (
    <>
        <div className="container-fluid border-bottom d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-lg-4 text-center py-2">
                <div className="d-inline-flex align-items-center">
                    <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                    <div className="text-start">
                        <h6 className="text-uppercase mb-1">Our Office</h6>
                        <span>123 Street, Gurgaon, India</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 text-center border-start border-end py-2">
                <div className="d-inline-flex align-items-center">
                    <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                    <div className="text-start">
                        <h6 className="text-uppercase mb-1">Email Us</h6>
                        <span>ershubhamgupta1@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 text-center py-2">
                <div className="d-inline-flex align-items-center">
                    <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                    <div className="text-start">
                        <h6 className="text-uppercase mb-1">Call Us</h6>
                        <span>919050149160</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <a href="index.html" className="navbar-brand ms-lg-5">
            <h1 className="m-0 text-uppercase text-dark"><i className="bi bi-shop fs-1 text-primary me-3"></i>Pet Shop</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-item nav-link active' : 'nav-item nav-link')}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-item nav-link active' : 'nav-item nav-link')}>About</NavLink>
                <NavLink to="/service" className={({ isActive }) => (isActive ? 'nav-item nav-link active' : 'nav-item nav-link')}>Service</NavLink>
                <NavLink to="/product" className={({ isActive }) => (isActive ? 'nav-item nav-link active' : 'nav-item nav-link')}>Product</NavLink>
                <div className="nav-item dropdown">
                    <a href="#" className={`nav-link dropdown-toggle${isDropdownActive ? " active" : ""}`} data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu m-0">
                        <NavLink to="/price" className="dropdown-item">Pricing Plan</NavLink>
                        <NavLink to="/team" className="dropdown-item">The Team</NavLink>
                        <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                        <NavLink to="/blog" className="dropdown-item">Blog Grid</NavLink>
                        <NavLink to="/detail" className="dropdown-item">Blog Detail</NavLink>
                    </div>
                </div>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-item nav-link nav-contact bg-primary text-dark px-5 ms-lg-5' : 'nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5')}>Contact <i className="bi bi-arrow-right"></i></NavLink>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Header
