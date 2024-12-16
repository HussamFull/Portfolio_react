import React from 'react'

export default function NavBar() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 nav">
        <div className="container">
            <a className="navbar-brand text-light fw-bold fs-4" href="#">START BOOTSTRAP</a>
            <div className="" id="navbarNavAltMarkup">
                <div className="navbar-nav d-flex gap-4">
                    <a className="nav-link fw-bold text-light" href="#">PORTFOLIO</a>
                    <a className="nav-link fw-bold text-light" href="#">ABOUT</a>
                    <a className="nav-link fw-bold text-light" href="#">CONTACT</a>
                </div>
            </div>
        </div>
    </nav>

    </>
  )
}
