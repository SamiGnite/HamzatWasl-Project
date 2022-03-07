import React from "react";
import "./navbar.css";
import logo from "../../../utils/images/Logo.png"

export default function navbar() {
  return (
    <div className="topbar-container">
      <div className="wrapper">
        <div className="left">
          <div className="profile-picture">
            <div className="profile-picture-background">
              </div>
          </div>
        </div>

        <div className="right">
          <a href="#home" className="home">
            Home
          </a>
          <a href="#about" className="aboutus">
            About us
          </a>
          <a href="#testimonials" className="testimonials">
            Testimonials
          </a>
          <a href="#contactus" className="contactus">
            Contact Us
          </a>
        </div>

        <div className="corner">
          <a href="#" className="sign-up">Sign up</a>
          <a href="#" className="sign-in">Sign in</a>
          </div>
      </div>
      <div className="line"></div>
    </div>
  );
}
