import React from 'react'
import Title from './Title'
import AboutCard from './AboutCard'
import Button from './Button'

let aboutCardArr = [
    {
        icon: "ri-checkbox-circle-fill",
        title: "Dedicated Team Support",
        disc: "Our highly skilled professionals are committed to providing personalized service and impactful solutions on every engagement.",
    },
    {
        icon: "ri-lightbulb-fill",
        title: "Forward-Thinking Approach",
        disc: "We embrace innovative methodologies to develop unique strategies that drive lasting success.",
    },
]
const About = (props) => {


    return (
        <section className='about-section py-100'>
            <div className="container">
                <Title baseTitle="about" mainTitle="Learn More About Us" />
                <div className="row align-items-center gy-4 mt-5">
                    <div className="col-lg-5">
                        <div className='rounded overflow-hidden position-relative'>
                            <img src={props.image} alt="about image" className='img-fluid' />
                            <div className='text-white p-4 position-absolute end-0 bottom-0 bg-warning rounded rounded-end-0 text-center'>
                                <h3 className='fw-bold fs-2'>{props.expertise}+</h3>
                                <p className='text-uppercase m-0 fs-sm'>years of expertise</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className='text-white'>
                            <h3 className='h2 fw-bold mb-4'>{props.title}</h3>
                            <p className='text-secondary'>{props.disc1}</p>
                            <p className='text-secondary mb-4'>{props.disc2}</p>
                            <div className="row gy-4 mb-5">
                                {aboutCardArr.map((card, idx) => <AboutCard key={idx} icon={card.icon} title={card.title} disc={card.disc} />)}
                            </div>
                            <Button btnName="explore our services" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About