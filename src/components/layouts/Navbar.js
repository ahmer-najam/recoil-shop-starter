import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <i className="fas fa-store fa-2x"></i>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/addProduct" className="button is-primary">
                  <strong>Add Product</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
