import React from 'react'

const ClientCard = (props) => {
    return (
        <div className="swiper-slide">
            <div className='client-card p-4 rounded-4 h-100'>
                <span className='text-warning'>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                </span>
                <p className='text-secondary my-3'>"{props.comment}"</p>
                <div className='d-flex align-items-center gap-3'>
                    <div className='client-profile'>
                        <img src={props.img} alt="client-image" width="100%" />
                    </div>
                    <div>
                        <h6 className='text-white text-capitalize m-0'>{props.name}</h6>
                        <p className='text-secondary m-0 text-capitalize fs-sm'>{props.designation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientCard