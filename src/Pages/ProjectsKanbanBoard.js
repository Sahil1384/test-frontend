import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function ProjectsKanbanBoard() {
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
                      <li className="breadcrumb-item active">Kanban</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Kanban Board</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="kanban-board">
                      <div className="kanban-col">
                        <div className="kanban-main-card">
                          <div className="kanban-box-title">
                            <h4 className="header-title mb-3">New Projects</h4>
                            <div className="dropdown kanban-main-dropdown">
                              <Link className="dropdown-toggle arrow-none" id="drop1" data-bs-toggle="dropdown"
                                to="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i className="las la-ellipsis-v font-24 text-muted"></i>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop1">
                                <Link className="dropdown-item" to="#">Create Project</Link>
                                <Link className="dropdown-item" to="#">Open Project</Link>
                                <Link className="dropdown-item" to="#">Tasks Details</Link>
                              </div>
                            </div>
                          </div>

                          <div id="project-list-left" className="pb-1">
                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop2"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop2">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>

                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-warning"></i>
                                <h5 className="my-1">Furnishing Of modern <br />LHB coaches</h5>
                                <p className="text-muted mb-2">MCF</p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-1.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-9.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>

                                </div>

                              </div>

                            </div>


                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop3"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop3">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>

                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-success"></i>
                                <h5 className="my-1">Inspection carriage <br /> coaches 56 sets</h5>
                                <p className="text-muted mb-2">RCF</p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-2.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>

                                </div>

                              </div>

                            </div>


                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop4"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop4">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>

                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-danger"></i>
                                <h5 className="my-1">Furnishing of Vande Bharat <br /> 35 coaches</h5>
                                <p className="text-muted mb-2">ICF </p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-3.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-1.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>

                                </div>

                              </div>

                            </div>

                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop5"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop5">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>

                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-purple"></i>
                                <h5 className="my-1">Refurbishment Of coaches<br /> 46 sets</h5>
                                <p className="text-muted mb-2">WCR </p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-4.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop6"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop6">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>

                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-success"></i>
                                <h5 className="my-1">Inspection carriage <br />coaches 46 sets</h5>
                                <p className="text-muted mb-2">RCF</p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-8.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-2.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>

                                </div>

                              </div>

                            </div>

                          </div>

                          <button type="button" className="btn w-100 btn-soft-primary btn-sm">Add Task</button>
                        </div>

                      </div>

                      <div className="kanban-col">
                        <div className="kanban-main-card">
                          <div className="kanban-box-title">
                            <h4 className="header-title mb-3">To Do</h4>
                            <div className="dropdown kanban-main-dropdown">
                              <Link className="dropdown-toggle arrow-none" id="drop1" data-bs-toggle="dropdown"
                                to="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i className="las la-ellipsis-v font-24 text-muted"></i>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop1">
                                <Link className="dropdown-item" to="#">Create Project</Link>
                                <Link className="dropdown-item" to="#">Open Project</Link>
                                <Link className="dropdown-item" to="#">Tasks Details</Link>
                              </div>
                            </div>
                          </div>

                          <div id="project-list-center-left" className="pb-1">
                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop2"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop2">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>

                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-warning"></i>
                                <h5 className="my-1">Refurbishment of <br />LWACCN coaches</h5>
                                <p className="text-muted mb-2">RCF</p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-1.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-9.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>

                                </div>

                              </div>

                            </div>

                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop3"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop3">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>
                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-success"></i>
                                <h5 className="my-1"> refurbishment of IR <br /> coaches
                                </h5>
                                <p className="text-muted mb-2">ICF</p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-2.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>

                                </div>

                              </div>

                            </div>

                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop4"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop4">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>
                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-danger"></i>
                                <h5 className="my-1">Furnishing of Self-Propelled <br />Inspection Cars
                                  (SPIC)<br /> coaches
                                </h5>
                                <p className="text-muted mb-2">RCF</p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-3.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-1.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop5"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop5">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>
                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-purple"></i>
                                <h5 className="my-1">Furnishing of Inspection <br /> carriage coaches
                                </h5>
                                <p className="text-muted mb-2">RCF</p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-4.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop6"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop6">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>
                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-success"></i>
                                <h5 className="my-1">Upgradation Toilet <br />420 Coaches</h5>
                                <p className="text-muted mb-2">NER</p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-8.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-2.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button type="button" className="btn w-100 btn-soft-primary btn-sm">Add Task</button>
                        </div>
                      </div>

                      <div className="kanban-col">
                        <div className="kanban-main-card">
                          <div className="kanban-box-title">
                            <h4 className="header-title mb-3">In Progress</h4>
                            <div className="dropdown kanban-main-dropdown">
                              <Link className="dropdown-toggle arrow-none" id="drop1" data-bs-toggle="dropdown"
                                to="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i className="las la-ellipsis-v font-24 text-muted"></i>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop1">
                                <Link className="dropdown-item" to="#">Create Project</Link>
                                <Link className="dropdown-item" to="#">Open Project</Link>
                                <Link className="dropdown-item" to="#">Tasks Details</Link>
                              </div>
                            </div>
                          </div>
                          <div id="project-list-center" className="pb-1">
                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop08"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop08">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>
                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-warning"></i>
                                <h5 className="my-1">Vande Bharat</h5>
                                <p className="text-muted mb-2">ICF</p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-1.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-9.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop9"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop9">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>
                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-success"></i>
                                <h5 className="my-1">Deendayalu LHB-GS <br /> 233 coach</h5>
                                <p className="text-muted mb-2">MCF </p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-2.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop10"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop10">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>
                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-danger"></i>
                                <h5 className="my-1">LWSCN EOG LHP Type <br />
                                  (Non-AC Sleeper Coach) <br />45 coach
                                </h5>
                                <p className="text-muted mb-2">RCF</p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-3.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-1.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop11"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop11">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>
                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-purple"></i>
                                <h5 className="my-1">Mechanical Furnishing Work <br />in 8-Wheeler DETC<br /> (Under
                                  Slung Type)
                                </h5>
                                <p className="text-muted mb-2">NR</p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-4.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button type="button" className="btn w-100  btn-soft-primary btn-sm">Add Task</button>
                        </div>
                      </div>

                      <div className="kanban-col">
                        <div className="kanban-main-card">
                          <div className="kanban-box-title">
                            <h4 className="header-title mb-3">RITES Inspection</h4>
                            <div className="dropdown kanban-main-dropdown">
                              <Link className="dropdown-toggle arrow-none" id="drop1" data-bs-toggle="dropdown"
                                to="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i className="las la-ellipsis-v font-24 text-muted"></i>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop1">
                                <Link className="dropdown-item" to="#">Create Project</Link>
                                <Link className="dropdown-item" to="#">Open Project</Link>
                                <Link className="dropdown-item" to="#">Tasks Details</Link>
                              </div>
                            </div>
                          </div>

                          <div id="project-list-center-right" className="pb-1">
                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop13"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop13">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>
                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-warning"></i>
                                <h5 className="my-1">Braille Signages </h5>
                                <p className="text-muted mb-2">1000 Sets</p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-5.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop14"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop14">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>
                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-purple"></i>
                                <h5 className="my-1">Seat and Berth <br /> 46 sets</h5>
                                <p className="text-muted mb-2">46 sets</p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-6.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-9.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop15"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop15">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>
                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-danger"></i>
                                <h5 className="my-1">Modular Deluxe Toilet</h5>
                                <p className="text-muted mb-2">40 sets</p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-7.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button type="button" className="btn w-100  btn-soft-primary btn-sm">Add Task</button>
                        </div>
                      </div>

                      <div className="kanban-col">
                        <div className="kanban-main-card">
                          <div className="kanban-box-title">
                            <h4 className="header-title mb-3">Done</h4>
                            <div className="dropdown kanban-main-dropdown">
                              <Link className="dropdown-toggle arrow-none" id="drop1" data-bs-toggle="dropdown"
                                to="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i className="las la-ellipsis-v font-24 text-muted"></i>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop1">
                                <Link className="dropdown-item" to="#">Create Project</Link>
                                <Link className="dropdown-item" to="#">Open Project</Link>
                                <Link className="dropdown-item" to="#">Tasks Details</Link>
                              </div>
                            </div>
                          </div>

                          <div id="project-list-right" className="pb-1">
                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop17"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop17">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>
                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-warning"></i>
                                <h5 className="my-1">LWSCN EOG LHP Type <br />
                                  (Non-AC Sleeper Coach)
                                </h5>
                                <p className="text-muted mb-2">45 Coach</p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-5.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop18"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop18">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>
                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-purple"></i>
                                <h5 className="my-1">Supply of Furnishing Material <br />and Complete Furnishing
                                  of <br />TRC Coaches</h5>
                                <p className="text-muted mb-2">04 Coaches</p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-6.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-9.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop19"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop19">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>
                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-danger"></i>
                                <h5 className="my-1">Electrical Furnishing<br /> Work in 8-Wheeler DETC<br /> (Under
                                  Slung Type)
                                </h5>
                                <p className="text-muted mb-2">19 Coaches</p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-7.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>

                                </div>

                              </div>
                            </div>
                            <div className="card">
                              <div className="card-body">
                                <div className="dropdown d-inline-block float-end">
                                  <Link className="dropdown-toggle mr-n2 mt-n2" id="drop20"
                                    data-bs-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i className="las la-ellipsis-v font-14 text-muted"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="drop20">
                                    <Link className="dropdown-item" to="#">Edit</Link>
                                    <Link className="dropdown-item" to="#">Delete</Link>
                                  </div>
                                </div>
                                <i className="mdi mdi-circle-outline d-block mt-n2 font-14 text-success"></i>
                                <h5 className="my-1">LHB Type Power Car <br />(LWLRRM
                                  Break Luggage <br />cum Generator)
                                </h5>
                                <p className="text-muted mb-2">24 Coach</p>
                                <div className="row justify-content-center">
                                  <div className="col-6 align-self-center">
                                    <ul className="list-inline mb-0">
                                      <li className="list-item d-inline-block mr-2">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-format-list-bulleted text-muted"></i>
                                          <span className="text-muted font-weight-bold">0/5</span>
                                        </Link>
                                      </li>
                                      <li className="list-item d-inline-block">
                                        <Link className="" to="#">
                                          <i className="mdi mdi-comment-outline text-muted"></i>
                                          <span className="text-muted font-weight-bold">3</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 align-self-center">
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-8.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                    <Link className="float-end" to="#">
                                      <img src="assets/images/users/user-2.jpg" alt="user"
                                        className="thumb-xs rounded-circle" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button type="button" className="btn w-100  btn-soft-primary btn-sm">Add Task</button>
                        </div>
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

export default ProjectsKanbanBoard
