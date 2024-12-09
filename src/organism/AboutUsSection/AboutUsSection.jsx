import React from 'react'

const AboutUsSection = () => {
  return (
    <div className="container">
    <div className="row gx-5">
        <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: '500px'}}>
            <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100 rounded" src="img/about.jpg" style={{objectFit: 'cover'}} />
            </div>
        </div>
        <div className="col-lg-7">
            <div className="border-start border-5 border-primary ps-5 mb-5">
                <h6 className="text-primary text-uppercase">About Us</h6>
                <h1 className="display-5 text-uppercase mb-0">We Ensure Your Pets Stay Happy at All Times</h1>
            </div>
            <h4 className="text-body mb-4">Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no labore lorem sit clita duo justo magna dolore</h4>
            <div className="bg-light p-4">
                <ul className="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item w-50" role="presentation">
                        <button className="nav-link text-uppercase w-100 active" id="pills-1-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1"
                            aria-selected="true">Our Mission</button>
                    </li>
                    <li className="nav-item w-50" role="presentation">
                        <button className="nav-link text-uppercase w-100" id="pills-2-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2"
                            aria-selected="false">Our Vission</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default AboutUsSection
