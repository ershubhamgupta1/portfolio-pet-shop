import React from 'react'
import TeamCarousel from '../../molecules/TeamCarousel/TeamCarousel';

const TeamMembers = () => {
  return (
    <div className="container">
    <div className="border-start border-5 border-primary ps-5 mb-5" style={{maxWidth: '600px'}}>
        <h6 className="text-primary text-uppercase">Team Members</h6>
        <h1 className="display-5 text-uppercase mb-0">Trusted Pet Care Specialists</h1>
    </div>
    <div className="owl-carousel team-carousel position-relative" style={{paddingRight: '25px'}}>
        <TeamCarousel />
    </div>
</div>
)
}

export default TeamMembers
