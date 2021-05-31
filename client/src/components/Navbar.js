import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'




const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <NavLink className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-item nav-link" to="/contact">Contant</NavLink>
                        <NavLink className="nav-item nav-link " to="/login">Login</NavLink>
                        <NavLink className="nav-item nav-link" to="/signup">Registration</NavLink>
                       
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
