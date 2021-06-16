import React, { useEffect } from 'react'
import gourab from '../image/gourab.jpeg'

const About = () => {

    return (
        <>
            <div className="container ">
                <form method="GET">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="profilepic" src={gourab} />
                        </div>

                        <div className="col-md-6">
                            <div>
                                <h3>Gourab Banik</h3>
                                <h4>Web Developer</h4>
                                <p className="">RANKINGS <span>1/10</span></p>


                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link " id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                                    </li>

                                </ul>


                                <div className="col-md-12 pl-5">
                                    <div className="tab-content profile-tab " id="myTabContent">

                                        <div className="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label >User ID</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>123456789</p>
                                                </div>


                                                <div className="col-md-6">
                                                    <label >Name</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Gourab Banik</p>
                                                </div>



                                                <div className="col-md-6">
                                                    <label >Email</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>gourab@gmail.com</p>
                                                </div>


                                                <div className="col-md-6">
                                                    <label >Phone </label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>9126100622</p>
                                                </div>

                                                <div className="col-md-6">
                                                    <label >Professon</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Web Dev</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="tab-pane fade show active " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label >Experience </label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Expert</p>
                                                </div>


                                                <div className="col-md-6">
                                                    <label >Hourly Rate</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>10$/</p>
                                                </div>

                                                <div className="col-md-6">
                                                    <label >Total Project</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>230</p>
                                                </div>


                                                <div className="col-md-6">
                                                    <label >English Level </label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Expert</p>
                                                </div>

                                                <div className="col-md-6">
                                                    <label >Avoilobility</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>6 month</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-button" />
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default About
