import React from 'react'
import { NavLink } from 'react-router-dom'
const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="title">SignIn</div>
                <div className="content1">

                    <form action="#">
                        <div className="user-details">
                            <div className="input-box1">
                                <span className="details">Email</span>
                                <input type="text" name="email" placeholder="Enter your email" required autoComplete="off" />
                            </div>

                            <div className="input-box1">
                                <span className="details">Password</span>
                                <input type="password" name="password" placeholder="Enter your password" required autoComplete="off" />
                            </div>

                        </div>

                        <div className="button form-group">
                            <input type="submit" className="signup" value="Login" />
                        </div>
                    </form>
                    <div>Not registered? Go to <NavLink to="/signup" >Signup page</NavLink></div>
                </div>
            </div>
        </div>
    )
}

export default Login
