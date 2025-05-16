import React from 'react'
import Title from './Title'
import Steps from './Steps'


let stepArr = [
    {
        icon: "ri-lightbulb-line",
        title: "Initial Consultation",
        disc: "Conducting thorough discovery sessions to understand your business requirements and objectives. Our expert team analyzes your needs to create a customized approach.",
    },
    {
        icon: "ri-settings-2-line",
        title: "Planning & Strategy",
        disc: "Developing comprehensive strategies and detailed project plans based on the initial consultation. We create actionable roadmaps with clear milestones and deliverables.",
    },
    {
        icon: "ri-bar-chart-2-line",
        title: "Development Phase",
        disc: "Executing the planned strategies with precision and agility. Our team implements solutions while maintaining constant communication and progress updates.",
    },
    {
        icon: "ri-checkbox-circle-line",
        title: "Launch & Support",
        disc: "Ensuring smooth deployment and providing ongoing support for implemented solutions. We monitor performance and make necessary adjustments for optimal results.",
    },
]

const HowWeWork = () => {
    return (
        <section className='py-100 bg-blue'>
            <div className="container">
                <Title baseTitle="steps" mainTitle="how we work" />
                <div className='step-vertical-line position-relative'>
                    {stepArr.map((card, idx) => <Steps key={idx} icon={card.icon} disc={card.disc} title={card.title} step={idx + 1} order={idx % 2 == 0 ? [1, 2] : [2, 1]} />)}
                </div>
            </div>
        </section>
    )
}

export default HowWeWork