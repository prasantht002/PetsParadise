import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li><a href="#facebook"><i className="bi bi-facebook me-2"></i>Facebook</a></li>
              <li><a href="#twitter"><i className="bi bi-twitter me-2"></i>Twitter</a></li>
              <li><a href="#instagram"><i className="bi bi-instagram me-2"></i>Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@example.com</li>
              <li>Phone: +1234567890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
