import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
            
                <div class=" ml-auto" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#">Home </a>
                        <a class="nav-item nav-link" href="#">Features</a>
                        <a class="nav-item nav-link" href="#">Pricing</a>
                        <a class="nav-item nav-link " href="#">Disabled</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
