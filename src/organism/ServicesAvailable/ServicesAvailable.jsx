import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaseballBall, faCat, faHome, faPlateWheat, faScissors, faSyringe } from '@fortawesome/free-solid-svg-icons';
import './ServicesAvailable.scss'

const services = [
    {icon: faHome, name : 'Pet Boarding', description : 'Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit'},
    {icon: faPlateWheat, name : 'Pet Feeding', description : 'Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit'},
    {icon: faScissors, name : 'Pet Grooming', description : 'Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit'},
    {icon: faCat, name : 'Pet Training', description : 'Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit'},
    {icon: faBaseballBall, name : 'Pet Exercise', description : 'Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit'},
    {icon: faSyringe, name : 'Pet Treatment', description : 'Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit'},

]
const ServicesAvailable = () => {
  return (
    <div className="container">
    <div className="border-start border-5 border-primary ps-5 mb-5" style={{maxWidth: '600px'}}>
        <h6 className="text-primary text-uppercase">Services</h6>
        <h1 className="display-5 text-uppercase mb-0">Our Excellent Pet Care Services</h1>
    </div>
    <div className="row g-5">
        {
            services.map((service, index)=>{
                const {icon, name, description} = service;
                return (
                    <div className="col-md-6" key={index}>
                        <div className="service-item bg-light d-flex p-4">
                        <FontAwesomeIcon icon={icon} className="display-1 text-primary me-4" />
                            {/* <i className="fas fa-home display-1 text-primary me-4"></i> */}
                            <div>
                                <h5 className="text-uppercase mb-3">{name}</h5>
                                <p> {description} </p>
                                <a className="text-primary text-uppercase" href="">Read More<i className="bi bi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
</div>
)
}

export default ServicesAvailable
