import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
    return (
        <>
            <div className="container">
                <div className="title">Registration</div>
                <div className="content">

                    <form action="#">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input type="text" name="name" placeholder="Enter your name" required autoComplete="off" />
                            </div>
                        
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" name="" placeholder="Enter your email" required autoComplete="off" />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input type="number" name="number" placeholder="Enter your number" required autoComplete="off" />
                            </div>
                            <div className="input-box">
                                <span className="details">Your Work</span>
                                <input type="text" name="work" placeholder="Work" required autoComplete="off" />
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="password" name="password" placeholder="Enter your password" required autoComplete="off" />
                            </div>
                            <div className="input-box">
                                <span className="details">Confirm Password</span>
                                <input type="password" name="cpassword" placeholder="Confirm your password" required autoComplete="off" />
                            </div>
                        </div>
                        
                        <div className="button form-group">
                            <input type="submit" className="signup" value="Register" />
                        </div>
                    </form>
                    <div>Already registered? Go to <NavLink to="/login" >Login page</NavLink></div>
                </div>
            </div>



        </>
    )
}

export default Signup
