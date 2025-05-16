import React from 'react'

const Button = (props) => {
    return (
        <button className='btn btn-warning main-btn text-white py-2 fs-sm rounded-pill text-capitalize px-3'>
            {props.btnName}
        </button>
    )
}

export default Button