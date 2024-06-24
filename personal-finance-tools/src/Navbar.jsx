import React from "react"
import { NavLinkLight } from './NavbarElements';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid justify-content-around">
          <div className="d-flex">
            <img src="logo_v1.png" className="mx-1 object-fit-contain" style={{width: '2em'}} /> 
            <span className="text-info fs-2 text-end mx-1" >ClearPlan Finance</span>
          </div>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="container-fluid">
              <ul className="row navbar-nav me-auto mb-2 mb-lg-0">
                <li className="col-auto"><NavLinkLight className="nav-item" to="/home" activeClassName="selected">Tools</NavLinkLight></li>
                <li className="col-auto"><NavLinkLight className="nav-item" to="/contact" activeClassName="selected">Contact</NavLinkLight></li>
              </ul>
          </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>

        </div>
      </nav>
    )
  }

export default Navbar