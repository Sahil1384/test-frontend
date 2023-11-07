import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import img from '../logo.svg'

function DownloadPdf() {
  return (
    <>
      <Header />

      <div className="page-wrapper">
        <div className="page-content-tab">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box">
                  <div className="float-end">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="#"></Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="#!">Projects /</Link>
                      </li>
                      <li className="breadcrumb-item active">Chat</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Chat</h4>
                </div>
              </div>
            </div> 
            <div className="row mt-5 ">
              <div className="d-grid align-content-center justify-content-center">
                <div className="p-5 text-center">
                  <h2>Thanks you for submitting the project details</h2>
                  <Link to={img} className="btn btn-danger px-5 mb-0" target="_blank" download>Download</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default DownloadPdf;
