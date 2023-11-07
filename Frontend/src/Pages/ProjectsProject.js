import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function ProjectsProject() {
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
                      <li className="breadcrumb-item"><Link to="#!"></Link>
                      </li>
                      <li className="breadcrumb-item"><Link to="#!">Projects /</Link>
                      </li>
                      <li className="breadcrumb-item active">Projects</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Projects</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <h5 className="mt-0">Here the list of all continue projects. <span className="badge badge-pink">6</span>
                    </h5>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 text-end">
                <div className="text-end">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <div className="input-group">
                        <input type="text" id="example-input1-group2" name="example-input1-group2"
                          className="form-control form-control-sm" placeholder="Search" />
                        <button type="button" className="btn btn-primary btn-sm"><i className="fas fa-search"></i></button>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <button type="button" className="btn btn-primary btn-sm"><i className="fas fa-filter"></i></button>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/ProjectsProjectAdd"><button type="button" className="btn btn-primary btn-sm">Add New Project</button></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="media mb-3">
                      <img src="assets/images/small/project-2.jpg" alt="" className="thumb-md rounded-circle" />
                      <div className="media-body align-self-center text-truncate ms-2">
                        <h4 className="m-0 fw-bold text-dark font-18">MCF (Furnishing Of Modern LHB Coaches)</h4>
                        <p className="text-muted  mb-0 font-13"><span className="text-dark">Client : </span>Indian Railways
                        </p>
                      </div>

                    </div>
                    <div className="d-flex justify-content-between">
                      <h6 className="fw-semibold">Start : <span className="text-muted font-weight-normal"> 15 Nov 2023</span>
                      </h6>
                      <h6 className="fw-semibold">Deadline : <span className="text-muted font-weight-normal"> 28 Feb
                        2024</span></h6>
                    </div>
                    <div className="mt-3">
                      <h5 className="font-16 fw-bold m-0">Rs 11Cr.</h5>
                      <p className="mb-0 text-muted fw-semibold">Total Budget</p>
                    </div>
                    <div>
                      <p className="text-muted mt-4 mb-1">Breathing new life into spaces .
                      </p>
                      <div className="d-flex justify-content-between">
                        <h6 className="fw-semibold">All Hours : <span className="text-muted font-weight-normal"> 530 /
                          281:30</span></h6>
                        <h6 className="fw-semibold">Today : <span className="text-muted font-weight-normal">
                          2:45</span><span className="badge badge-soft-pink fw-semibold ms-2"><i
                            className="far fa-fw fa-clock"></i> 35 days left</span></h6>
                      </div>
                      <p className="text-muted text-end mb-1">15% Complete</p>
                      <div className="progress mb-4" style={{ height: '4px' }}>
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '15%' }}
                          aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="img-group">
                          <Link className="user-avatar" to="#">
                            <img src="assets/images/users/user-8.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src="assets/images/users/user-5.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src="assets/images/users/user-4.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src="assets/images/users/user-6.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link to="#" className="user-avatar">
                            <span
                              className="thumb-xs justify-content-center d-flex align-items-center bg-soft-info rounded-circle fw-semibold">+6</span>
                          </Link>
                        </div>

                        <ul className="list-inline mb-0 align-self-center">
                          <li className="list-item d-inline-block me-2">
                            <Link className="" to="#">
                              <i className="mdi mdi-format-list-bulleted text-success font-15"></i>
                              <span className="text-muted fw-bold">15/100</span>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="" to="#">
                              <i className="mdi mdi-comment-outline text-primary font-15"></i>
                              <span className="text-muted fw-bold">3</span>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="ms-2" to="#">
                              <i className="mdi mdi-pencil-outline text-muted font-18"></i>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="" to="#">
                              <i className="mdi mdi-trash-can-outline text-muted font-18"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="media mb-3">
                      <img src="assets/images/small/project-1.jpg" alt="" className="thumb-md rounded-circle" />
                      <div className="media-body align-self-center text-truncate ms-2">
                        <h4 className="m-0 fw-bold text-dark font-18">RCF (Inspection carriage Coaches )</h4>
                        <p className="text-muted  mb-0 font-13"><span className="text-dark">Client : </span>Indian Railways
                        </p>
                      </div>

                    </div>
                    <div className="d-flex justify-content-between">
                      <h6 className="fw-semibold">Start : <span className="text-muted font-weight-normal"> 08 Dec 2023</span>
                      </h6>
                      <h6 className="fw-semibold">Deadline : <span className="text-muted font-weight-normal"> 28 Feb
                        2024</span></h6>
                    </div>
                    <div className="mt-3">
                      <h5 className="font-16 fw-bold m-0">Rs 33,100Cr.</h5>
                      <p className="mb-0 text-muted fw-semibold">Total Budget</p>
                    </div>
                    <div>
                      <p className="text-muted mt-4 mb-1">Delivering comfort on the tracks, redefining the journey
                        experience.
                      </p>
                      <div className="d-flex justify-content-between">
                        <h6 className="fw-semibold">All Hours : <span className="text-muted font-weight-normal"> 530 /
                          281:30</span></h6>
                        <h6 className="fw-semibold">Today : <span className="text-muted font-weight-normal">
                          2:45</span><span className="badge badge-soft-success fw-semibold ms-2"><i
                            className="far fa-fw fa-clock"></i> 35 days left</span></h6>
                      </div>
                      <p className="text-muted text-end mb-1">15% Complete</p>
                      <div className="progress mb-4" style={{ height: '4px' }}>
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '15%' }}
                          aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="img-group">
                          <Link className="user-avatar" to="#">
                            <img src="assets/images/users/user-8.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src="assets/images/users/user-5.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src="assets/images/users/user-4.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src="assets/images/users/user-6.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link to="#" className="user-avatar">
                            <span
                              className="thumb-xs justify-content-center d-flex align-items-center bg-soft-info rounded-circle fw-semibold">+6</span>
                          </Link>
                        </div>

                        <ul className="list-inline mb-0 align-self-center">
                          <li className="list-item d-inline-block me-2">
                            <Link className="" to="#">
                              <i className="mdi mdi-format-list-bulleted text-success font-15"></i>
                              <span className="text-muted fw-bold">15/100</span>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="" to="#">
                              <i className="mdi mdi-comment-outline text-primary font-15"></i>
                              <span className="text-muted fw-bold">3</span>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="ms-2" to="#">
                              <i className="mdi mdi-pencil-outline text-muted font-18"></i>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="" to="#">
                              <i className="mdi mdi-trash-can-outline text-muted font-18"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="media mb-3">
                      <img src="assets/images/small/project-3.jpg" alt="" className="thumb-md rounded-circle" />
                      <div className="media-body align-self-center text-truncate ms-2">
                        <h4 className="m-0 fw-bold text-dark font-18">NER (Seat and Berth)</h4>
                        <p className="text-muted  mb-0 font-13"><span className="text-dark">Client : </span>Indian Railways
                        </p>
                      </div>

                    </div>
                    <div className="d-flex justify-content-between">
                      <h6 className="fw-semibold">Start : <span className="text-muted font-weight-normal"> 15 Nov 2023</span>
                      </h6>
                      <h6 className="fw-semibold">Deadline : <span className="text-muted font-weight-normal"> 28 Feb
                        2024</span></h6>
                    </div>
                    <div className="mt-3">
                      <h5 className="font-16 fw-bold m-0">Rs 56Cr.</h5>
                      <p className="mb-0 text-muted fw-semibold">Total Budget</p>
                    </div>
                    <div>
                      <p className="text-muted mt-4 mb-1">Ergonomic seating solutions for an enhanced travel experience.
                      </p>
                      <div className="d-flex justify-content-between">
                        <h6 className="fw-semibold">All Hours : <span className="text-muted font-weight-normal"> 530 /
                          281:30</span></h6>
                        <h6 className="fw-semibold">Today : <span className="text-muted font-weight-normal">
                          2:45</span><span className="badge badge-soft-primary fw-semibold ms-2"><i
                            className="far fa-fw fa-clock"></i> 35 days left</span></h6>
                      </div>
                      <p className="text-muted text-end mb-1">15% Complete</p>
                      <div className="progress mb-4" style={{ height: '4px' }}>
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '15%' }}
                          aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="img-group">
                          <Link className="user-avatar" to="#">
                            <img src="assets/images/users/user-8.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src="assets/images/users/user-5.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src="assets/images/users/user-4.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src="assets/images/users/user-6.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link to="#" className="user-avatar">
                            <span
                              className="thumb-xs justify-content-center d-flex align-items-center bg-soft-info rounded-circle fw-semibold">+6</span>
                          </Link>
                        </div>

                        <ul className="list-inline mb-0 align-self-center">
                          <li className="list-item d-inline-block me-2">
                            <Link className="" to="#">
                              <i className="mdi mdi-format-list-bulleted text-success font-15"></i>
                              <span className="text-muted fw-bold">15/100</span>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="" to="#">
                              <i className="mdi mdi-comment-outline text-primary font-15"></i>
                              <span className="text-muted fw-bold">3</span>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="ms-2" to="#">
                              <i className="mdi mdi-pencil-outline text-muted font-18"></i>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="" to="#">
                              <i className="mdi mdi-trash-can-outline text-muted font-18"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="media mb-3">
                      <img src="assets/images/small/project-1.jpg" alt="" className="thumb-md rounded-circle" />
                      <div className="media-body align-self-center text-truncate ms-2">
                        <h4 className="m-0 fw-bold text-dark font-18">NWR (Furnishing Of Modern LHB Coaches)</h4>
                        <p className="text-muted  mb-0 font-13"><span className="text-dark">Client : </span>Indian Railways
                        </p>
                      </div>

                    </div>
                    <div className="d-flex justify-content-between">
                      <h6 className="fw-semibold">Start : <span className="text-muted font-weight-normal"> 15 Nov 2023</span>
                      </h6>
                      <h6 className="fw-semibold">Deadline : <span className="text-muted font-weight-normal"> 28 Feb
                        2024</span></h6>
                    </div>
                    <div className="mt-3">
                      <h5 className="font-16 fw-bold m-0">Rs 10Cr.</h5>
                      <p className="mb-0 text-muted fw-semibold">Total Budget</p>
                    </div>
                    <div>
                      <p className="text-muted mt-4 mb-1">Redefining the standards of comfort and safety.
                      </p>
                      <div className="d-flex justify-content-between">
                        <h6 className="fw-semibold">All Hours : <span className="text-muted font-weight-normal"> 530 /
                          281:30</span></h6>
                        <h6 className="fw-semibold">Today : <span className="text-muted font-weight-normal">
                          2:45</span><span className="badge badge-soft-warning fw-semibold ms-2"><i
                            className="far fa-fw fa-clock"></i> 35 days left</span></h6>
                      </div>
                      <p className="text-muted text-end mb-1">15% Complete</p>
                      <div className="progress mb-4" style={{ height: '4px' }}>
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '15%' }}
                          aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="img-group">
                          <Link className="user-avatar" to="#">
                            <img src="assets/images/users/user-8.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src="assets/images/users/user-5.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src="assets/images/users/user-4.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src="assets/images/users/user-6.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link to="#" className="user-avatar">
                            <span
                              className="thumb-xs justify-content-center d-flex align-items-center bg-soft-info rounded-circle fw-semibold">+6</span>
                          </Link>
                        </div>

                        <ul className="list-inline mb-0 align-self-center">
                          <li className="list-item d-inline-block me-2">
                            <Link className="" to="#">
                              <i className="mdi mdi-format-list-bulleted text-success font-15"></i>
                              <span className="text-muted fw-bold">15/100</span>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="" to="#">
                              <i className="mdi mdi-comment-outline text-primary font-15"></i>
                              <span className="text-muted fw-bold">3</span>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="ms-2" to="#">
                              <i className="mdi mdi-pencil-outline text-muted font-18"></i>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="" to="#">
                              <i className="mdi mdi-trash-can-outline text-muted font-18"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="media mb-3">
                      <img src="assets/images/small/project-3.jpg" alt="" className="thumb-md rounded-circle" />
                      <div className="media-body align-self-center text-truncate ms-2">
                        <h4 className="m-0 fw-bold text-dark font-18">WCR (Refurbishment Of Coaches)</h4>
                        <p className="text-muted  mb-0 font-13"><span className="text-dark">Client : </span>Indian Railways
                        </p>
                      </div>

                    </div>
                    <div className="d-flex justify-content-between">
                      <h6 className="fw-semibold">Start : <span className="text-muted font-weight-normal"> 20 Nov 2023</span>
                      </h6>
                      <h6 className="fw-semibold">Deadline : <span className="text-muted font-weight-normal"> 20 Feb
                        2024</span></h6>
                    </div>
                    <div className="mt-3">
                      <h5 className="font-16 fw-bold m-0">Rs 13Cr.</h5>
                      <p className="mb-0 text-muted fw-semibold">Total Budget</p>
                    </div>
                    <div>
                      <p className="text-muted mt-4 mb-1">Transforming railway coaches into modern marvels.
                      </p>
                      <div className="d-flex justify-content-between">
                        <h6 className="fw-semibold">All Hours : <span className="text-muted font-weight-normal"> 530 /
                          281:30</span></h6>
                        <h6 className="fw-semibold">Today : <span className="text-muted font-weight-normal">
                          2:45</span><span className="badge badge-soft-pink fw-semibold ms-2"><i
                            className="far fa-fw fa-clock"></i> 35 days left</span></h6>
                      </div>
                      <p className="text-muted text-end mb-1">15% Complete</p>
                      <div className="progress mb-4" style={{ height: '4px' }}>
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '15%' }}
                          aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="img-group">
                          <Link className="user-avatar" to="#">
                            <img src="assets/images/users/user-8.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src="assets/images/users/user-5.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src="assets/images/users/user-4.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src="assets/images/users/user-6.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link to="#" className="user-avatar">
                            <span
                              className="thumb-xs justify-content-center d-flex align-items-center bg-soft-info rounded-circle fw-semibold">+6</span>
                          </Link>
                        </div>

                        <ul className="list-inline mb-0 align-self-center">
                          <li className="list-item d-inline-block me-2">
                            <Link className="" to="#">
                              <i className="mdi mdi-format-list-bulleted text-success font-15"></i>
                              <span className="text-muted fw-bold">15/100</span>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="" to="#">
                              <i className="mdi mdi-comment-outline text-primary font-15"></i>
                              <span className="text-muted fw-bold">3</span>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="ms-2" to="#">
                              <i className="mdi mdi-pencil-outline text-muted font-18"></i>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="" to="#">
                              <i className="mdi mdi-trash-can-outline text-muted font-18"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="media mb-3">
                      <img src="assets/images/small/project-2.jpg" alt="" className="thumb-md rounded-circle" />
                      <div className="media-body align-self-center text-truncate ms-2">
                        <h4 className="m-0 fw-bold text-dark font-18">RCF (Inspection carriage Coaches )</h4>
                        <p className="text-muted  mb-0 font-13"><span className="text-dark">Client : </span>Indian Railways
                        </p>
                      </div>

                    </div>
                    <div className="d-flex justify-content-between">
                      <h6 className="fw-semibold">Start : <span className="text-muted font-weight-normal"> 15 Oct 2023</span>
                      </h6>
                      <h6 className="fw-semibold">Deadline : <span className="text-muted font-weight-normal"> 28 Feb
                        2024</span></h6>
                    </div>
                    <div className="mt-3">
                      <h5 className="font-16 fw-bold m-0">Rs 14Cr.</h5>
                      <p className="mb-0 text-muted fw-semibold">Total Budget</p>
                    </div>
                    <div>
                      <p className="text-muted mt-4 mb-1">Revolutionizing the way people travel on the rails.
                      </p>
                      <div className="d-flex justify-content-between">
                        <h6 className="fw-semibold">All Hours : <span className="text-muted font-weight-normal"> 530 /
                          281:30</span></h6>
                        <h6 className="fw-semibold">Today : <span className="text-muted font-weight-normal">
                          2:45</span><span className="badge badge-soft-info fw-semibold ms-2"><i
                            className="far fa-fw fa-clock"></i> 35 days left</span></h6>
                      </div>
                      <p className="text-muted text-end mb-1">15% Complete</p>
                      <div className="progress mb-4" style={{ height: '4px' }}>
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '15%' }}
                          aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="img-group">
                          <Link className="user-avatar" to="#">
                            <img src="assets/images/users/user-8.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src="assets/images/users/user-5.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src="assets/images/users/user-4.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src="assets/images/users/user-6.jpg" alt="user"
                              className="thumb-xs rounded-circle" />
                          </Link>
                          <Link to="#" className="user-avatar">
                            <span
                              className="thumb-xs justify-content-center d-flex align-items-center bg-soft-info rounded-circle fw-semibold">+6</span>
                          </Link>
                        </div>

                        <ul className="list-inline mb-0 align-self-center">
                          <li className="list-item d-inline-block me-2">
                            <Link className="" to="#">
                              <i className="mdi mdi-format-list-bulleted text-success font-15"></i>
                              <span className="text-muted fw-bold">15/100</span>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="" to="#">
                              <i className="mdi mdi-comment-outline text-primary font-15"></i>
                              <span className="text-muted fw-bold">3</span>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="ms-2" to="#">
                              <i className="mdi mdi-pencil-outline text-muted font-18"></i>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="" to="#">
                              <i className="mdi mdi-trash-can-outline text-muted font-18"></i>
                            </Link>
                          </li>
                        </ul>
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

export default ProjectsProject
