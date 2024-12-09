import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import './TestimonialCarousel.scss';

const testimonialOwlCarouselOptions = {
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
}

const testimonialData = [
    { img: 'img/testimonial-1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', clientName: 'Lora Kuban', profession: 'Doctor' },
    { img: 'img/testimonial-2.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..', clientName: 'Daniel Vettory', profession: 'Professor' },
]

const TestimonialCarousel = () => {
    return (
        <OwlCarousel options={testimonialOwlCarouselOptions} className="owl-carousel testimonial-carousel bg-white p-5">
            {
                testimonialData.map((testimonial, index) => {
                    const { img, description, clientName, profession } = testimonial;
                    return (
                        <div className="testimonial-item text-center" key={index}>
                            <div className="position-relative mb-4">
                                <img className="img-fluid mx-auto" src={img} alt="" />
                                <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white" style={{ width: '45px', height: '45px' }}>
                                    <i className="bi bi-chat-square-quote text-primary"></i>
                                </div>
                            </div>
                            <p>{description}</p>
                            <hr className="w-25 mx-auto" />
                            <h5 className="text-uppercase">{clientName}</h5>
                            <span>{profession}</span>
                        </div>
                    )
                })
            }
        </OwlCarousel>
    )
}

export default TestimonialCarousel
