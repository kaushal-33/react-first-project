import React from 'react'

const TeamCard = (props) => {
    return (
        <div className="col-lg-6">
            <div className='h-100 team-card overflow-hidden rounded-3 text-light bg-subtle-blue border border-secondary'>
                <div className='row'>
                    <div className="col-sm-4 p-0">
                        <div className=''>
                            <img src={props.img} alt="Member's profile image" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className='p-3'>
                            <h6 className='text-capitalize fs-5'>{props.name}</h6>
                            <span className='text-capitalize text-secondary text-warning'>{props.post}</span>
                            <p className='text-secondary fs-sm mt-3'>{props.intro}</p>
                            <ul className='m-0 p-0 d-flex align-items-center gap-3 team-social'>
                                <li>
                                    <span className='d-inline-block'><i className="ri-instagram-line"></i></span>
                                </li>
                                <li>
                                    <span className='d-inline-block'><i className="ri-facebook-line"></i></span>
                                </li>
                                <li>
                                    <span className='d-inline-block'><i className="ri-twitter-x-line"></i></span>
                                </li>
                                <li>
                                    <span className='d-inline-block'><i className="ri-linkedin-box-line"></i></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard