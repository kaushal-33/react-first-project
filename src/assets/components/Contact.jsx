import React from 'react'
import Title from './Title'
import Button from './Button'


const Contact = (props) => {
    return (
        <section className='py-100 bg-blue'>
            <div className="container">
                <div>
                    <Title baseTitle="contact" mainTitle="let's connect" />
                    <div className="row gy-4 mt-5">
                        <div className="col-lg-4">
                            <div className='d-flex align-items-center gap-3 h-100 bg-subtle-blue p-3 rounded-3'>
                                <div className='text-warning contact-icon'>
                                    <i className="ri-map-pin-line"></i>
                                </div>
                                <div>
                                    <h6 className='text-capitalize text-white'>our address</h6>
                                    <p className='text-secondary m-0 fs-sm'>{props.address}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='d-flex align-items-center gap-3 h-100 bg-subtle-blue p-3 rounded-3'>
                                <div className='text-warning contact-icon'>
                                    <i className="ri-mail-line"></i>
                                </div>
                                <div>
                                    <h6 className='text-capitalize text-white'>email address</h6>
                                    <p className='text-secondary m-0 fs-sm'>{props.email1}</p>
                                    <p className='text-secondary m-0 fs-sm'>{props.email2}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='d-flex align-items-center gap-3 h-100 bg-subtle-blue p-3 rounded-3'>
                                <div className='text-warning contact-icon'>
                                    <i className="ri-customer-service-line"></i>
                                </div>
                                <div>
                                    <h6 className='text-capitalize text-white'>hours of operation</h6>
                                    <p className='text-secondary m-0 fs-sm'>{props.time1}</p>
                                    <p className='text-secondary m-0 fs-sm'>{props.time2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.183795882288!2d72.79657487503476!3d21.14508268053352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05353c5a858cf%3A0x15f8b0fe4f718a7d!2sRed%20%26%20White%20Skill%20Education%20-%20Vesu!5e0!3m2!1sen!2sin!4v1747380067389!5m2!1sen!2sin" className='mt-5' width="100%" height={500} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className='d-flex justify-content-center'>
                <form action="#" className='w-75 p-4 contact-form rounded-4 bg-subtle-blue contact-container'>
                    <h4 className='text-capitalize text-white text-center mb-4 h3 fw-semibold border-bottom border-warning pb-3'>get in touch</h4>
                    <div>
                        <div className='d-flex flex-md-nowrap flex-wrap align-items-center gap-3'>
                            <div className='w-100 position-relative'>
                                <span className="text-secondary fs-5 position-absolute"><i className="ri-user-line"></i></span>
                                <input type="text" name='name' className='form-control bg-transparent py-3 ps-5 pe-3 text-white' placeholder='Full Name' />
                            </div>
                            <div className='w-100 position-relative'>
                                <span className="text-secondary fs-5 position-absolute"><i className="ri-mail-line"></i></span>
                                <input type="email" name='email' className='form-control bg-transparent py-3 ps-5 pe-3 text-white' placeholder='Email Address' />
                            </div>
                        </div>
                        <div className='position-relative'>
                            <span className="text-secondary fs-5 position-absolute"><i className="ri-bar-chart-horizontal-line"></i></span>
                            <input type="text" name='subject' className='form-control mt-3 bg-transparent py-3 ps-5 pe-3 text-white' placeholder='Subject' />
                        </div>
                        <div className='position-relative'>
                            <span className="text-secondary fs-5 position-absolute"><i className="ri-message-line"></i></span>
                            <textarea className="form-control py-3 ps-5 pe-3 text-white bg-transparent mt-3 mb-5" placeholder='Write Message...'></textarea>
                        </div>
                        <div className='text-center'>
                            <Button btnName="send message" />
                        </div>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Contact