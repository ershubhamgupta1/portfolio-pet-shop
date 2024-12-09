import React from 'react';

import TestimonialCarousel from '../../molecules/TestimonialCarousel/TestimonialCarousel'
import ServicesAvailable from '../../organism/ServicesAvailable/ServicesAvailable';
import PricePlan from '../../organism/PricePlan/PricePlan';

    
const Service = () => {
  return (
    <div>
    <div class="container-fluid py-5">
        <ServicesAvailable />
    </div>
    <div class="container-fluid bg-testimonial py-5" style={{margin: '45px 0'}}>
        <div class="container py-5">
            <div class="row justify-content-end">
                <div class="col-lg-7">
                    <TestimonialCarousel />
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid py-5">
        <PricePlan />
    </div>
    </div>
  )
}

export default Service
