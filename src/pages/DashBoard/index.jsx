import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { Link, Outlet } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import NavAccount from "./NavAccount";

const DashBoardPage = () => {
  return (
    <>
      <div>
        <div className="page-wrapper">
          <main className="main">
            <div
              className="page-header text-center"
              style={{
                backgroundImage: 'url("assets/images/page-header-bg.jpg")',
              }}
            >
              <div className="container">
                <h1 className="page-title">My Account</h1>
              </div>
            </div>
            <Breadcrumb>
            <Breadcrumb.Item>
                <Link to={PATHS.HOME}>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item isActive>My Account</Breadcrumb.Item>
            </Breadcrumb>
            {/* <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
              <div className="container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    My Account
                  </li>
                </ol>
              </div>
            </nav> */}
            <div className="page-content">
              <div className="dashboard">
                <div className="container">
                  <div className="row">
                    <NavAccount />
                    <div className="col-md-8 col-lg-9">
                      <div className="tab-content">
                        <Outlet />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashBoardPage;
