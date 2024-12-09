import React from 'react'

const plans = [
    {
        name: 'Basic', 
        subtitle: 'The Best Choice', 
        price:49,
        features: [
        {name: 'Pet Care Essentials', available: true},
        {name: 'Monitoring & Updates', available: true},
        {name: 'Health & Wellness', available: false},
        {name: 'Walks & Play', available: false},
       ]
    },
    {
        name: 'Standard', 
        subtitle: 'The Best Choice', 
        price:69,
        features: [
        {name: 'Pet Care Essentials', available: true},
        {name: 'Monitoring & Updates', available: true},
        {name: 'Health & Wellness', available: true},
        {name: 'Walks & Play', available: false},
       ]
    },
    {
        name: 'Premium', 
        subtitle: 'The Best Choice', 
        price:99,
        features: [
        {name: 'Pet Care Essentials', available: true},
        {name: 'Monitoring & Updates', available: true},
        {name: 'Health & Wellness', available: true},
        {name: 'Walks & Play', available: true},
       ]
    }
];
const PricePlan = () => {
  return (
    <div className="container">
    <div className="border-start border-5 border-primary ps-5 mb-5" style={{maxWidth: '600px'}}>
        <h6 className="text-primary text-uppercase">Pricing Plan</h6>
        <h1 className="display-5 text-uppercase mb-0">Quality Pet Care at Competitive Prices</h1>
    </div>
    <div className="row g-5">
        {
            plans.map((plan, index)=>{
                const {name, subtitle, price, features} = plan;
                return (
                    <div className="col-lg-4" key={index}>
                    <div className="bg-light text-center pt-5 mt-lg-5">
                        <h2 className="text-uppercase">{name}</h2>
                        <h6 className="text-body mb-5">{subtitle}</h6>
                        <div className="text-center bg-primary p-4 mb-2">
                            <h1 className="display-4 text-white mb-0">
                                <small className="align-top"
                                    style={{fontSize: '22px', lineHeight: '45px'}}>$</small>{price}<small
                                    className="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/
                                    Mo</small>
                            </h1>
                        </div>
                        <div className="text-center p-4">
                            {
                                features.map((feat, index)=>{
                                    return (
                                        <div key={index} className="d-flex align-items-center justify-content-between mb-1">
                                            <span>{feat.name}</span>
                                            {
                                                feat.available && 
                                                <i className="bi bi-check2 fs-4 text-primary"></i>
                                            }
                                            {
                                                !feat.available &&
                                                <i className="bi bi-x fs-4 text-danger"></i>
                                            }

                                        </div>
                                    )
                                })
                            }
                            <a href="" className="btn btn-primary text-uppercase py-2 px-4 my-3">Order Now</a>
                        </div>
                    </div>
                </div>
        
                )
            })
        }
        {/* <div className="col-lg-4">
            <div className="bg-light text-center pt-5 mt-lg-5">
                <h2 className="text-uppercase">Basic</h2>
                <h6 className="text-body mb-5">The Best Choice</h6>
                <div className="text-center bg-primary p-4 mb-2">
                    <h1 className="display-4 text-white mb-0">
                        <small className="align-top"
                            style={{fontSize: '22px', lineHeight: '45px'}}>$</small>49<small
                            className="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/
                            Mo</small>
                    </h1>
                </div>
                <div className="text-center p-4">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <span>HTML5 & CSS3</span>
                        <i className="bi bi-check2 fs-4 text-primary"></i>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <span>Bootstrap v5</span>
                        <i className="bi bi-check2 fs-4 text-primary"></i>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <span>Responsive Layout</span>
                        <i className="bi bi-x fs-4 text-danger"></i>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <span>Browsers Compatibility</span>
                        <i className="bi bi-x fs-4 text-danger"></i>
                    </div>
                    <a href="" className="btn btn-primary text-uppercase py-2 px-4 my-3">Order Now</a>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="bg-light text-center pt-5">
                <h2 className="text-uppercase">Standard</h2>
                <h6 className="text-body mb-5">The Best Choice</h6>
                <div className="text-center bg-dark p-4 mb-2">
                    <h1 className="display-4 text-white mb-0">
                        <small className="align-top"
                            style={{fontSize: '22px', lineHeight: '45px'}}>$</small>99<small
                            className="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/
                            Mo</small>
                    </h1>
                </div>
                <div className="text-center p-4">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <span>HTML5 & CSS3</span>
                        <i className="bi bi-check2 fs-4 text-primary"></i>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <span>Bootstrap v5</span>
                        <i className="bi bi-check2 fs-4 text-primary"></i>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <span>Responsive Layout</span>
                        <i className="bi bi-check2 fs-4 text-primary"></i>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <span>Browsers Compatibility</span>
                        <i className="bi bi-x fs-4 text-danger"></i>
                    </div>
                    <a href="" className="btn btn-primary text-uppercase py-2 px-4 my-3">Order Now</a>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="bg-light text-center pt-5 mt-lg-5">
                <h2 className="text-uppercase">Extended</h2>
                <h6 className="text-body mb-5">The Best Choice</h6>
                <div className="text-center bg-primary p-4 mb-2">
                    <h1 className="display-4 text-white mb-0">
                        <small className="align-top"
                            style={{fontSize: '22px', lineHeight: '45px'}}>$</small>149<small
                            className="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/
                            Mo</small>
                    </h1>
                </div>
                <div className="text-center p-4">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <span>HTML5 & CSS3</span>
                        <i className="bi bi-check2 fs-4 text-primary"></i>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <span>Bootstrap v5</span>
                        <i className="bi bi-check2 fs-4 text-primary"></i>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <span>Responsive Layout</span>
                        <i className="bi bi-check2 fs-4 text-primary"></i>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <span>Browsers Compatibility</span>
                        <i className="bi bi-check2 fs-4 text-primary"></i>
                    </div>
                    <a href="" className="btn btn-primary text-uppercase py-2 px-4 my-3">Order Now</a>
                </div>
            </div>
        </div> */}
    </div>
</div>
)
}

export default PricePlan
