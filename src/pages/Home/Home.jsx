import React from 'react'
import TestimonialCarousel from '../../molecules/TestimonialCarousel/TestimonialCarousel';
import ProductCarousel from '../../molecules/ProductCarousel/ProductCarousel';
import ServicesAvailable from '../../organism/ServicesAvailable/ServicesAvailable';
import PricePlan from '../../organism/PricePlan/PricePlan';
import TeamMembers from '../../organism/TeamMembers/TeamMembers';
import SpecialOffer from '../../organism/SpecialOffer/SpecialOffer';
import LatestBlogs from '../../organism/LatestBlogs/LatestBlogs';
import AboutUsSection from '../../organism/AboutUsSection/AboutUsSection';
import HeroSection from '../../organism/HeroSection/HeroSection';


const Home = () => {
  return (
    <>
    <HeroSection />
    <div className="container-fluid py-5">
        <AboutUsSection />
    </div>
    <div className="container-fluid py-5">
        <ServicesAvailable />
    </div>
    <div className="container-fluid py-5">
        <div className="container">
            <div className="border-start border-5 border-primary ps-5 mb-5" style={{maxWidth: '600px'}}>
                <h6 className="text-primary text-uppercase">Products</h6>
                <h1 className="display-5 text-uppercase mb-0">Products For Your Pet</h1>
            </div>
            <div className="owl-carousel product-carousel">
                <ProductCarousel />
            </div>
        </div>
    </div>
    <div className="container-fluid bg-offer my-5 py-5">
        <SpecialOffer />
    </div>
    <div className="container-fluid py-5">
        <PricePlan />
    </div>
    <div className="container-fluid py-5">
        <TeamMembers />
    </div>
    <div className="container-fluid bg-testimonial py-5" style={{margin: '45px 0'}}>
        <div className="container py-5">
            <div className="row justify-content-end">
                <div className="col-lg-7">
                    <TestimonialCarousel />
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid py-5">
        <LatestBlogs />
    </div>
    </>
  )
}

export default Home
