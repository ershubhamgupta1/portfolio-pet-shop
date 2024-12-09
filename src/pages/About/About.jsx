import React from 'react'
import TeamMembers from '../../organism/TeamMembers/TeamMembers';
import SpecialOffer from '../../organism/SpecialOffer/SpecialOffer';
import AboutUsSection from '../../organism/AboutUsSection/AboutUsSection';

const About = () => {
  return (
    <div>
    <div class="container-fluid py-5">
        <AboutUsSection />
    </div>
    <div class="container-fluid bg-offer my-5 py-5">
        <SpecialOffer />
    </div>
    <div class="container-fluid py-5">
        <TeamMembers />
    </div>
    </div>
  )
}

export default About
