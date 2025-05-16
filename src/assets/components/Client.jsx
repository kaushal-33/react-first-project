import React from 'react';
import ClientCard from './ClientCard';

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper modules
import { Navigation, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const clientArr = [
    {
        comment:
            'Their strategic vision and unwavering commitment to results provided exceptional value. Our operational efficiency has signficantly improved.',
        name: 'isabell diaz',
        designation: 'development strategist',
        profile:
            'https://bootstrapmade.com/content/demo/Strategy/assets/img/person/person-f-1.webp',
    },
    {
        comment:
            'Their dedication to delivering superior solutions and their meticulous attention to detail have profoundly impacted our corporate growth trajectory.',
        name: 'david kim',
        designation: 'product lead',
        profile:
            'https://bootstrapmade.com/content/demo/Strategy/assets/img/person/person-m-1.webp',
    },
    {
        comment:
            'Collaborating with their team was a revelation. Their innovative strategies guided us toward achieving our objectives with precision and speed.',
        name: 'ealoner vance',
        designation: 'operation manager',
        profile:
            'https://bootstrapmade.com/content/demo/Strategy/assets/img/person/person-f-3.webp',
    },
    {
        comment:
            "The depth of knowledge and unwavering dedication they bring to every project is exceptional. They've become an essential ally in driving our expansion.",
        name: 'olivia chen',
        designation: 'research analyst',
        profile:
            'https://bootstrapmade.com/content/demo/Strategy/assets/img/person/person-f-2.webp',
    },
];

const Client = (props) => {
    return (
        <section className="py-100 bg-blue overflow-x-hidden">
            <div className="container">
                <div className="row gy-3 align-items-center">
                    <div className="col-lg-4">
                        <div className="text-white">
                            <h5 className="fw-bold text-capitalize mb-4">{props.title}</h5>
                            <p className="mb-4">{props.disc}</p>
                            <div className="d-flex gap-2">
                                <div className="swiper-button-prev1 position-relative">
                                    <i className="ri-arrow-left-line"></i>
                                </div>
                                <div className="swiper-button-next1 position-relative">
                                    <i className="ri-arrow-right-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            speed={1500}
                            navigation={{
                                nextEl: '.swiper-button-next1',
                                prevEl: '.swiper-button-prev1',
                            }}
                            breakpoints={{
                                576: {
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            {clientArr.map((client, idx) => (
                                <SwiperSlide key={idx}>
                                    <ClientCard
                                        comment={client.comment}
                                        name={client.name}
                                        designation={client.designation}
                                        img={client.profile}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Client;
