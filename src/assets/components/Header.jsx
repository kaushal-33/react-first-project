import React from 'react'
import Button from './Button'

const Header = () => {
    return (
        <header className='position-sticky top-0 z-3 mt-4'>
            <div className="container">
                <nav className="navbar header justify-content-between align-items-center py-3 px-4 rounded-pill navbar-expand-lg">
                    <a className="navbar-brand m-0 text-uppercase text-light fw-medium" href="#">strategy</a>
                    <div className="">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className='text-warning'>
                                <i className="ri-arrow-left-wide-line"></i>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link text-white-50 text-capitalize active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white-50 text-capitalize" href="#">about</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white-50 text-capitalize" href="#">services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white-50 text-capitalize" href="#">team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white-50 text-capitalize" href="#">contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='d-sm-block d-none'>
                        <Button btnName="get started" />
                    </div>
                </nav>

            </div>
            <div className="offcanvas offcanvas-start bg-subtle-blue" tabIndex={-1} id="offcanvas" aria-labelledby="offcanvasExampleLabel">
                <div className="d-flex justify-content-between align-items-center p-3">
                    <a className="navbar-brand m-0 text-uppercase text-light fw-medium" href="#">strategy</a>
                    <div className="text-end">
                        <button type="button" className="text-warning btn" data-bs-dismiss="offcanvas" aria-label="Close">
                            <span className="fs-3"><i className="ri-close-large-line" /></span>
                        </button>
                    </div>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white-50 text-capitalize active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50 text-capitalize" href="#">about</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50 text-capitalize" href="#">services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50 text-capitalize" href="#">team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50 text-capitalize" href="#">contact</a>
                        </li>
                    </ul>
                    <div className='d-block d-sm-none mt-5'>
                        <Button btnName="get started" />
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header