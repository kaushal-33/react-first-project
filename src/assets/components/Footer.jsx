import React from 'react'

const Footer = () => {
    return (
        <footer className='py-100 bg-blue'>
            <div className="container">
                <hr className='border-secondary' />
                <div className="row mt-4 gy-4">
                    <div className="col-lg-6">
                        <div className='text-white'>
                            <a className="navbar-brand fs-4 m-0 text-uppercase text-light fw-medium" href="#">strategy</a>
                            <p className='fs-sm mb-4 text-secondary mt-4'>
                                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.
                            </p>
                            <ul className='m-0 p-0 d-flex align-items-center gap-3 team-social'>
                                <li className='rounded-circle'>
                                    <span className='d-inline-block'><i className="ri-instagram-line"></i></span>
                                </li>
                                <li className='rounded-circle'>
                                    <span className='d-inline-block'><i className="ri-facebook-line"></i></span>
                                </li>
                                <li className='rounded-circle'>
                                    <span className='d-inline-block'><i className="ri-twitter-x-line"></i></span>
                                </li>
                                <li className='rounded-circle'>
                                    <span className='d-inline-block'><i className="ri-linkedin-box-line"></i></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className='text-capitalize h-100'>
                            <h6 className='text-white mb-3'>useful links</h6>
                            <ul className='text-secondary footer-link m-0 p-0'>
                                <li className='mb-2 fs-sm'>home</li>
                                <li className='mb-2 fs-sm'>about us</li>
                                <li className='mb-2 fs-sm'>services</li>
                                <li className='mb-2 fs-sm'>terms of service</li>
                                <li className='mb-2 fs-sm'>privacy policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className='text-capitalize h-100'>
                            <h6 className='text-white mb-3'>our services</h6>
                            <ul className='text-secondary footer-link m-0 p-0'>
                                <li className='mb-2 fs-sm'>web design</li>
                                <li className='mb-2 fs-sm'>web development</li>
                                <li className='mb-2 fs-sm'>product management</li>
                                <li className='mb-2 fs-sm'>marketing</li>
                                <li className='mb-2 fs-sm'>graphic design</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className='h-100'>
                            <h6 className='text-white mb-3 text-capitalize'>contact us</h6>
                            <ul className='text-secondary m-0 p-0'>
                                <li className='mb-4 fs-sm'>
                                    A108 Adam Street
                                    New York, NY 535022
                                    United States
                                </li>
                                <li className='mb-2 fs-sm'>
                                    Phone: +1 5589 55488 55
                                    Email: info@example.com
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer