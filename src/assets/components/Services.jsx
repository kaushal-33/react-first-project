import React from 'react'
import Title from './Title'
import Button from './Button'
import ServiceCard from './ServiceCard'

let serviceArr = [
    {
        icon: "ri-palette-line",
        title: "creative branding",
        disc: "Nulla facilisi. Maecenas eget magna neque. Suspendisse potenti. Curabitur eleifend nisi non magna vulputate, vel condimentum libero tempus. Proin consectetur feugiat diam.",
    },
    {
        icon: "ri-vip-diamond-line",
        title: "design system",
        disc: "Praesent euismod varius tellus, vel bibendum nunc interdum at. Donec vehicula diam vel metus venenatis convallis. Aliquam erat volutpat. Etiam viverra magna sit amet.",
    },
    {
        icon: "ri-megaphone-line",
        title: "marketing strategies",
        disc: "Vivamus tempor velit id magna dictum, sed fermentum nisi faucibus. Integer nec pretium sapien. Fusce tincidunt ligula et purus consequat, ac pellentesque nulla eleifend.",
    },
    {
        icon: "ri-code-s-slash-line",
        title: "digital platform",
        disc: "Cras fermentum odio eu feugiat malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et accumsan cursus. Morbi placerat nulla vel nunc viverra accumsan.",
    },
    {
        icon: "ri-line-chart-line",
        title: "growth acceleration",
        disc: "Aenean vel augue vel nisi bibendum posuere. Phasellus in lacus quis urna sodales dignissim. Duis aliquam libero eget risus facilisis. Quisque eget libero vel nisl fringilla.",
    },
    {
        icon: "ri-video-on-line",
        title: "media solution",
        disc: "Etiam efficitur lacus in diam finibus, nec ultrices est sagittis. Maecenas elementum magna sed risus faucibus, nec commodo purus facilisis. Vestibulum accumsan magna.",
    },
]

const services = (props) => {
    return (
        <section className='py-100 bg-blue'>
            <div className="container">
                <div>
                    <Title baseTitle="services" mainTitle="Check Our Services" />
                    <div className="row gy-4 align-items-center mt-5">
                        <div className="col-lg-8">
                            <div className='text-capitalize'>
                                <h2 className='text-white display-5 fw-semibold'>
                                    {props.title1}
                                </h2>
                                <h2 className='text-warning display-5 fw-semibold m-0'>
                                    {props.title2}
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div>
                                <p className='text-white mb-4'>{props.intro}</p>
                                <Button btnName="view all services ->" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 gy-4">
                        {serviceArr.map((card, idx) => <ServiceCard key={idx} icon={card.icon} title={card.title} disc={card.disc} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default services