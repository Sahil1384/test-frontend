import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function ProjectsCreate() {
  return (
    <>
      <Header />
      <div className='page-wrapper'>
        <div className='page-content-tab'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box">
                  <div className="float-end">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="#"></Link>
                      </li>
                      <li className="breadcrumb-item"><Link to="#!">Projects /</Link>
                      </li>
                      <li className="breadcrumb-item active">Create</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Create Project</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-6">
                        <form>
                          <div className="form-group">
                            <label for="projectName" className="form-label">Project Name :</label>
                            <input type="text" className="form-control" id="projectName"
                              aria-describedby="emailHelp" placeholder="Enter project name" />
                          </div>

                          <div className="form-group">
                            <div className="row">
                              <div className="col-lg-3 col-6 mb-2 mb-lg-0">
                                <label className="form-label mt-2" for="pro-start-date">Project Start
                                  Date</label>
                                <input type="text" className="form-control" id="pro-start-date"
                                  placeholder="Enter start date" />
                              </div>

                              <div className="col-lg-3 col-6 mb-2 mb-lg-0">
                                <label className="form-label mt-2" for="pro-end-date">Project End Date</label>
                                <input type="text" className="form-control" id="pro-end-date"
                                  placeholder="Enter end date" />
                              </div>

                              <div className="col-lg-3 col-6">
                                <label className="form-label mt-2" for="pro-rate">Rate</label>
                                <input type="text" className="form-control" id="pro-rate"
                                  placeholder="Enter rate" />
                              </div>

                              <div className="col-lg-3 col-6">
                                <label className="form-label mt-2" for="pro-end-date">Price Type</label>
                                <select className="form-select">
                                  <option>Hourly</option>
                                  <option>Daily</option>
                                  <option>Fix</option>
                                </select>
                              </div>

                            </div>

                          </div>

                          <div className="form-group">
                            <div className="row">
                              <div className="col-lg-6 mb-2 mb-lg-0">
                                <label className="form-label mt-2" for="pro-end-date">Required</label>
                                <select className="form-select">
                                  <option>--Select--</option>
                                  <option>UI/UX Design</option>
                                  <option>Payment System </option>
                                  <option>Android 10</option>
                                </select>
                              </div>

                              <div className="col-lg-3 col-6">
                                <label className="form-label mt-2" for="pro-end-date">Invoice Time</label>
                                <select className="form-select">
                                  <option>30 Day</option>
                                  <option>3 Month</option>
                                  <option>1 Year</option>
                                </select>
                              </div>

                              <div className="col-lg-3 col-6">
                                <label className="form-label mt-2" for="pro-end-date">Priority</label>
                                <select className="form-select">
                                  <option>-- select --</option>
                                  <option>High</option>
                                  <option>Medium</option>
                                  <option>Low</option>
                                </select>
                              </div>

                            </div>

                          </div>

                          <div className="form-group mb-3">
                            <label className="form-label mt-2" for="pro-message">Message</label>
                            <textarea className="form-control" rows="5" id="pro-message"
                              placeholder="writing here.."></textarea>
                          </div>


                          <button type="submit" className="btn btn-de-primary btn-sm">Create project</button>
                          <button type="button" className="btn btn-de-danger btn-sm">Cancel</button>
                        </form>

                      </div>

                      <div className="col-lg-5 ms-auto align-self-center">
                        <form>
                          <div className="form-group">
                            <label for="pro-avatar">Project Avatar</label>
                            <img src="assets/images/small/project-3.jpg" alt="" className="thumb-lg rounded mx-3" />
                            <label className="btn btn-de-primary btn-sm text-light">
                              Change Avatar <input type="file" hidden />
                            </label>
                          </div>

                          <h5 className="fw-normal my-5">The significance of a project is not measured merely by its
                            outcomes, but by the passion, dedication, and collaboration invested in its
                            realization.</h5>
                          <div className="form-group">
                            <label className="form-label" for="team-leader">Project team members</label>
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <img src="assets/images/users/user-10.jpg" alt="user"
                                  className="rounded-circle thumb-xs" />
                              </li>
                              <li className="list-inline-item">
                                <img src="assets/images/users/user-9.jpg" alt="user"
                                  className="rounded-circle thumb-xs" />
                              </li>
                              <li className="list-inline-item">
                                <img src="assets/images/users/user-8.jpg" alt="user"
                                  className="rounded-circle thumb-xs" />
                              </li>
                              <li className="list-inline-item">
                                <img src="assets/images/users/user-5.jpg" alt="user"
                                  className="rounded-circle thumb-xs" />
                              </li>
                              <li className="list-inline-item">
                                <img src="assets/images/users/user-4.jpg" alt="user"
                                  className="rounded-circle thumb-xs" />
                              </li>
                              <li className="list-inline-item">
                                <Link to="#" className="user-avatar">
                                  <span
                                    className="thumb-xs justify-content-center d-flex align-items-center bg-soft-info rounded-circle fw-semibold">+6</span>
                                </Link>
                              </li>
                            </ul>
                            <input id="add-member" type="file" name="files[]" multiple style={{ display: 'none' }} />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default ProjectsCreate
