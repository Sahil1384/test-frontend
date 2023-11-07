import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";

function MaterialAcceptedAdd() {
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  if (isChecked) {
    console.log("Status Enable");
  } else {
    console.log("Status Disabled");
  }

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
                      {/* <li className="breadcrumb-item">
                        <Link to="#!">Projects /</Link>
                      </li> */}
                      <li className="breadcrumb-item">
                        <Link to="/accepted-material">Accepted Material/</Link>
                      </li>
                      <li className="breadcrumb-item active">Add Accepted Material</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Add Accepted Material</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <form encType="multipart/form-data">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label htmlFor="name" className="form-label">
                              Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              placeholder="Enter name"
                              maxLength={40}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label
                              htmlFor="flexSwitchCheckChecked"
                              className="form-label"
                            >
                              Status
                            </label>
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-sm me-3"
                        >
                          Add Material
                        </button>
                        <Link to='/accepted-material'>
                        <button
                          type="button"
                          className="btn btn-de-danger btn-sm"
                        >
                          Cancel
                        </button>
                        </Link>
                      </div>
                    </form>

                    {/* <p style={{ color: "red" }}>{error}</p> */}
                  </div>
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

export default MaterialAcceptedAdd;
