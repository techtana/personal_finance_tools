import React from "react";
import { NavLinkDark } from './NavbarElements';


const Footer = () => {
    return (
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-body-secondary">&copy; 2024 Tech Tana. All rights reserved.</p>
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><NavLinkDark to="/privacy_policy" activeClassName="selected">Privacy Policy</NavLinkDark></li>
            <li className="nav-item"><NavLinkDark to="/terms_of_service" activeClassName="selected">Terms of Service</NavLinkDark></li>
          </ul>
        </footer>
      </div>
    );
  }

  
export default Footer;