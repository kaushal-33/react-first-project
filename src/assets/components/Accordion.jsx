import React from 'react'

const Accordion = (props) => {
    return (
        <div className="accordion-item acc mb-3">
            <h2 className="accordion-header">
                <button className="accordion-button acc-btn collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${props.no}`} aria-expanded="false" aria-controls={`collapse-${props.no}`}>
                    {props.accTitle}
                </button>
            </h2>
            <div id={`collapse-${props.no}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body rounded-4 bg-subtle-blue text-white">
                    <p className='m-0'>
                        {props.accBody}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Accordion