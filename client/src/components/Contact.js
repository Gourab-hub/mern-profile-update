import React from 'react'
import { NavLink } from 'react-router-dom'
const Contact = () => {
    return (
        <>


            <div class="container ">
                <div class="row d-flex justify-content-between">
                    <div class="col-sm">
                        <div class="card">

                            <div class="card-body">
                                <h5 class="card-title"><i class="fa fa-phone" aria-hidden="true"></i> Phonet</h5>
                                <p class="card-text"><span>+91</span>1234567890</p>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card">

                            <div class="card-body">
                                <h5 class="card-title"><i class="fa fa-envelope" aria-hidden="true"></i> Email</h5>
                                <p class="card-text">abc@gmail.com</p>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card">

                            <div class="card-body">
                                <h5 class="card-title"><i class="fa fa-address-card-o" aria-hidden="true"></i> Address</h5>
                                <p class="card-text">Coochbehar</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="container">
                <div className="title">Get In Touch</div>
                <div className="content p-2">

                    <form action="#" className="justify-content-center">
                        <div className="d-flex justify-content-around input-box1">
                            <input type="text" className="m-2" placeholder="Name" required autoComplete="off" />
                            <input type="password" className="m-2" placeholder="Email" required autoComplete="off" />
                            <input type="text" className="m-2" placeholder="Password" required autoComplete="off" />

                        </div>
                        <div className="input-box1 d-flex justify-content-center p-2">
                            <textarea class="form-control" aria-label="With textarea" placeholder="Message"></textarea>
                        </div>

                        <div className="button">
                            <input type="submit" className="signup" value="Login" />
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Contact
