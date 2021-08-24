import React, { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Products from "../products/Products";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <div className="has-background-light">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-3">
                <div className="box">
                  <Sidebar />
                </div>
              </div>
              <div className="column is-9">
                <Products />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
