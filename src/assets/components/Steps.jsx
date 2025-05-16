import React from 'react'

const Steps = (props) => {
    return (
        <div className='text-light d-flex gap-4 align-items-center position-relative z-1 mt-5' >
            <div className={`order-${props.order[0]}`}>
                <div className={`bg-subtle-blue step-icon text-warning fs-2`}>
                    <i className={props.icon}></i>
                </div>
            </div>
            <div className={`bg-subtle-blue p-4 order-${props.order[1]} rounded-4`}>
                <span className='text-warning text-uppercase fs-sm'>step {props.step}</span>
                <h6 className='my-3'>{props.title}</h6>
                <p className='fs-sm text-secondary m-0'>{props.disc}</p>
            </div>
        </div>
    )
}

export default Steps