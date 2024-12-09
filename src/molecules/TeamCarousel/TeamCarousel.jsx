import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import './TeamCarousel.scss';

const teamOwlCarouselOptions = {
    autoplay: true,
    smartSpeed: 1000,
    margin: 45,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
};

const teamMembers = [
    {img: 'img/team-1.jpg', fullName: 'Anna Belle', designation : 'M.D'},
    {img: 'img/team-2.jpg', fullName: 'Ella Rose', designation : 'CMO'},
    {img: 'img/team-3.jpg', fullName: 'Sophie Mae', designation : 'SMM'},
    {img: 'img/team-4.jpg', fullName: 'Lily Grace', designation : 'PM'},
    {img: 'img/team-5.jpg', fullName: 'Emma Claire', designation : 'CTO'}

]
    
const TeamCarousel = () => {
  return (
    <OwlCarousel options={teamOwlCarouselOptions}>
        {
            teamMembers.map((member, index)=>{
                const {img, fullName, designation} = member;
                return (
                    <div className="team-item" key={index}>
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src={img} alt=""/>
                            <div className="team-overlay">
                                <div className="d-flex align-items-center justify-content-start">
                                    <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-twitter"></i></a>
                                    <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-facebook"></i></a>
                                    <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="text-uppercase">{fullName}</h5>
                            <p className="m-0">{designation}</p>
                        </div>
                    </div>
                )
            })
        }
    </OwlCarousel>
)
}

export default TeamCarousel
