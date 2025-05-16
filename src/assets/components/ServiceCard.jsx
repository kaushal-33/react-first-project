import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className='service-card h-100'>
        <div className='service-hidden-icon position-absolute z-1 shadow fs-2'>
          <i className="ri-arrow-right-up-line"></i>
        </div>
        <div className='position-relative z-1'>
          <div className='service-icon rounded-3 text-warning fs-2 mb-4'>
            <i className={props.icon}></i>
          </div>
          <h4 className='fs-3 text-capitalize w-50 mb-3'>{props.title}</h4>
          <p className='m-0 fs-sm text-secondary'>{props.disc}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard