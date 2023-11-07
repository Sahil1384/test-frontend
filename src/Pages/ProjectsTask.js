import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function ProjectsTask() {
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

                      <li className="breadcrumb-item active">Tasks</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Tasks</h4>
                </div>

              </div>

            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="apexchart-wrapper">
                      <div id="task_status" className="apex-charts"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <img className="me-3 rounded-circle thumb-xl" src="assets/images/users/user-4.jpg" alt="" />
                      <div className="">
                        <h5 className="mb-0 fw-bold">Pragati Pandey</h5>
                        <small className="text-muted">Project Manager</small>
                        <ul className="list-unstyled list-inline my-1">
                          <li className="list-inline-item me-0">
                            <i className="mdi mdi-star text-warning font-18"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="mdi mdi-star text-warning font-18"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="mdi mdi-star text-warning font-18"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="mdi mdi-star text-warning font-18"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="mdi mdi-star-half text-warning font-18"></i>
                          </li>
                        </ul>
                      </div>
                      <p className="text-muted px-3 fw-semibold">I see obstacles as opportunities, find solutions in
                        challenges, and lead the team with unwavering determination towards success.
                      </p>
                      <div className="mb-3">
                        <Link to="#" className="me-3 text-warning">2843 Followers</Link>
                        <Link to="#" className=" text-warning">295 Following</Link>
                      </div>
                      <button type="button" className="btn btn-sm btn-primary">More Detail</button>
                    </div>
                  </div>

                </div>

              </div>


              <div className="col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Milestones</h4>
                      </div>

                    </div>

                  </div>

                  <div className="card-body">
                    <div className="media align-items-center mb-3">
                      <span
                        className="thumb-xs justify-content-center d-flex align-items-center bg-soft-warning rounded-circle fw-semibold">A</span>
                      <div className="media-body ms-3 align-self-center">
                        <h6 className="m-0 font-15">Overall Progress </h6>
                        <div className="d-flex justify-content-between">
                          <span>
                            <Link className="" to="#">
                              <i className="mdi mdi-format-list-bulleted text-success"></i>
                              <span className="text-muted">85/100</span>
                            </Link>
                          </span>
                          <span className="text-muted">85% Complete</span>
                        </div>
                        <div className="progress mt-0" style={{ height: '3px' }}>
                          <div className="progress-bar bg-warning" role="progressbar" style={{ width: '85%' }}
                            aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>

                    </div>

                    <div className="media align-items-center mb-3">
                      <span
                        className="thumb-xs justify-content-center d-flex align-items-center bg-soft-purple rounded-circle fw-semibold">F</span>
                      <div className="media-body ms-3 align-self-center">
                        <h6 className="m-0 font-15"> Completed</h6>
                        <div className="d-flex justify-content-between">
                          <span>
                            <Link className="" to="#">
                              <i className="mdi mdi-format-list-bulleted text-success"></i>
                              <span className="text-muted">55/100</span>
                            </Link>
                          </span>
                          <span className="text-muted">55% Complete</span>
                        </div>
                        <div className="progress mt-0" style={{height:'3px'}}>
                          <div className="progress-bar bg-purple" role="progressbar" style={{width: '55%'}}
                            aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>

                    </div>

                    <div className="media align-items-center mb-3">
                      <span
                        className="thumb-xs justify-content-center d-flex align-items-center bg-soft-pink rounded-circle fw-semibold">B</span>
                      <div className="media-body ms-3 align-self-center">
                        <h6 className="m-0 font-15"> In-progress</h6>
                        <div className="d-flex justify-content-between">
                          <span>
                            <Link className="" to="#">
                              <i className="mdi mdi-format-list-bulleted text-success"></i>
                              <span className="text-muted">45/100</span>
                            </Link>
                          </span>
                          <span className="text-muted">45% Complete</span>
                        </div>
                        <div className="progress mt-0" style={{height:'3px'}}>
                          <div className="progress-bar bg-pink" role="progressbar" style={{width: '45%'}}
                            aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>

                    </div>

                    <div className="media align-items-center">
                      <span
                        className="thumb-xs justify-content-center d-flex align-items-center bg-soft-success rounded-circle fw-semibold">T</span>
                      <div className="media-body ms-3 align-self-center">
                        <h6 className="m-0 font-15">Anticipated</h6>
                        <div className="d-flex justify-content-between">
                          <span>
                            <Link className="" to="#">
                              <i className="mdi mdi-format-list-bulleted text-success"></i>
                              <span className="text-muted">35/100</span>
                            </Link>
                          </span>
                          <span className="text-muted">35% Complete</span>
                        </div>
                        <div className="progress mt-0" style={{height:'3px'}}>
                          <div className="progress-bar bg-success" role="progressbar" style={{width: '35%'}}
                            aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-lg-6">
                <h5 className="d-inline-block me-2">🏆 Acme's Team </h5>
                <div className="img-group d-inline-block">
                  <Link className="user-avatar" to="#">
                    <img src="assets/images/users/user-8.jpg" alt="user" className="thumb-xs rounded-circle" />
                  </Link>
                  <Link className="user-avatar ms-n3" to="#">
                    <img src="assets/images/users/user-5.jpg" alt="user" className="thumb-xs rounded-circle" />
                  </Link>
                  <Link className="user-avatar ms-n3" to="#">
                    <img src="assets/images/users/user-4.jpg" alt="user" className="thumb-xs rounded-circle" />
                  </Link>
                  <Link className="user-avatar ms-n3" to="#">
                    <img src="assets/images/users/user-6.jpg" alt="user" className="thumb-xs rounded-circle" />
                  </Link>
                  <Link to="#" className="user-avatar">
                    <span
                      className="thumb-xs justify-content-center d-flex align-items-center bg-soft-info rounded-circle fw-semibold">+6</span>
                  </Link>
                </div>

              </div>


              <div className="col-lg-6 text-end align-self-center">
                <button type="button" className="btn btn-sm btn-primary">Add New Task</button>
              </div>

            </div>


            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <div className="task-box">
                      <div className="task-priority-icon"><i className="fas fa-circle text-success"></i></div>
                      <p className="text-muted float-right">
                        <span className="text-muted">01:33</span> /
                        <span className="text-muted">9:30</span>
                        <span className="mx-1">·</span>
                        <span><i className="far fa-fw fa-clock"></i> June 06</span>
                      </p>
                      <h5 className="mt-0 mb-1">Quality Analysis Team </h5>
                      <p className="text-muted mb-1">In the pursuit of excellence, there is no room for mediocrity. Strive
                        for perfection, and quality will follow.
                      </p>
                      <p className="text-muted text-end mb-1">15% Complete</p>
                      <div className="progress mb-4" style={{height: '4px'}}>
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: '15%'}}
                          aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="img-group">
                          <Link className="user-avatar user-avatar-group" to="#">
                            <img src="assets/images/users/user-1.jpg" alt="user"
                              className="rounded-circle thumb-xs" />
                          </Link>
                          <Link className="user-avatar user-avatar-group" to="#">
                            <img src="assets/images/users/user-5.jpg" alt="user"
                              className="rounded-circle thumb-xs" />
                          </Link>
                          <Link className="user-avatar user-avatar-group" to="#">
                            <img src="assets/images/users/user-7.jpg" alt="user"
                              className="rounded-circle thumb-xs" />
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


                <div className="card">
                  <div className="card-body">
                    <div className="task-box">
                      <div className="task-priority-icon"><i className="fas fa-circle text-secondary"></i></div>
                      <p className="text-muted float-right">
                        <span className="text-muted">01:33</span> /
                        <span className="text-muted">9:30</span>
                        <span className="mx-1">·</span>
                        <span><i className="far fa-fw fa-clock"></i> June 06</span>
                      </p>
                      <h5 className="mt-0 mb-1">Purchase Team</h5>
                      <p className="text-muted mb-1">The purchase team's expertise lies in finding opportunities,
                        negotiating smartly, and optimizing resources for organizational success.
                      </p>
                      <p className="text-muted text-end mb-1">50% Complete</p>
                      <div className="progress mb-4" style={{height: '4px'}}>
                        <div className="progress-bar bg-pink" role="progressbar" style={{width: '50%'}} aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="img-group">
                          <Link className="user-avatar user-avatar-group" to="#">
                            <img src="assets/images/users/user-2.jpg" alt="user"
                              className="rounded-circle thumb-xs" />
                          </Link>
                          <Link className="user-avatar user-avatar-group" to="#">
                            <img src="assets/images/users/user-5.jpg" alt="user"
                              className="rounded-circle thumb-xs" />
                          </Link>
                          <Link className="user-avatar user-avatar-group" to="#">
                            <img src="assets/images/users/user-7.jpg" alt="user"
                              className="rounded-circle thumb-xs" />
                          </Link>
                        </div>

                        <ul className="list-inline mb-0 align-self-center">
                          <li className="list-item d-inline-block me-2">
                            <Link className="" to="#">
                              <i className="mdi mdi-format-list-bulleted text-success font-15"></i>
                              <span className="text-muted fw-bold">25/50</span>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="" to="#">
                              <i className="mdi mdi-comment-outline text-primary font-15"></i>
                              <span className="text-muted fw-bold">7</span>
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




                <div className="card">
                  <div className="card-body">
                    <div className="task-box">
                      <div className="task-priority-icon"><i className="fas fa-check text-success"></i></div>
                      <p className="text-muted float-right">
                        <span className="text-muted">01:20</span> /
                        <span className="text-muted">1:30</span>
                        <span className="mx-1">·</span>
                        <span><i className="far fa-fw fa-clock"></i> June 06</span>
                      </p>
                      <h5 className="mt-0 mb-1">Billing Team</h5>
                      <p className="text-muted mb-1">The billing team's expertise and commitment drive financial success,
                        enabling the organization to thrive.
                      </p>
                      <p className="text-muted text-end mb-1">100% Complete</p>
                      <div className="progress mb-4" style={{height: '4px'}}>
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}}
                          aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="img-group">
                          <Link className="user-avatar user-avatar-group" to="#">
                            <img src="assets/images/users/user-2.jpg" alt="user"
                              className="rounded-circle thumb-xs" />
                          </Link>
                          <Link className="user-avatar user-avatar-group" to="#">
                            <img src="assets/images/users/user-4.jpg" alt="user"
                              className="rounded-circle thumb-xs" />
                          </Link>
                          <Link className="user-avatar user-avatar-group" to="#">
                            <img src="assets/images/users/user-6.jpg" alt="user"
                              className="rounded-circle thumb-xs" />
                          </Link>
                        </div>

                        <ul className="list-inline mb-0 align-self-center">
                          <li className="list-item d-inline-block me-2">
                            <Link className="" to="#">
                              <i className="mdi mdi-format-list-bulleted text-success font-15"></i>
                              <span className="text-muted fw-bold">128/128</span>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="" to="#">
                              <i className="mdi mdi-comment-outline text-primary font-15"></i>
                              <span className="text-muted fw-bold">13</span>
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


              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <div className="task-box">
                      <div className="task-priority-icon"><i className="fas fa-circle text-danger"></i></div>
                      <p className="text-muted float-right">
                        <span className="text-danger">10:33</span> /
                        <span className="text-danger">9:30</span>
                        <span className="mx-1">·</span>
                        <span><i className="far fa-fw fa-clock"></i> June 08</span>
                      </p>
                      <h5 className="mt-0 mb-1">Production Team</h5>
                      <p className="text-muted mb-1">A well-coordinated production team is the heartbeat of operational
                        excellence.
                      </p>
                      <p className="text-muted text-end mb-1">95% Complete</p>
                      <div className="progress mb-4" style={{height: '4px'}}>
                        <div className="progress-bar bg-purple" role="progressbar" style={{width: '95%'}}
                          aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="img-group">
                          <Link className="user-avatar user-avatar-group" to="#">
                            <img src="assets/images/users/user-9.jpg" alt="user"
                              className="rounded-circle thumb-xs" />
                          </Link>
                          <Link className="user-avatar user-avatar-group" to="#">
                            <img src="assets/images/users/user-5.jpg" alt="user"
                              className="rounded-circle thumb-xs" />
                          </Link>
                          <Link className="user-avatar user-avatar-group" to="#">
                            <img src="assets/images/users/user-7.jpg" alt="user"
                              className="rounded-circle thumb-xs" />
                          </Link>
                        </div>

                        <ul className="list-inline mb-0 align-self-center">
                          <li className="list-item d-inline-block me-2">
                            <Link className="" to="#">
                              <i className="mdi mdi-format-list-bulleted text-success font-15"></i>
                              <span className="text-muted fw-bold">82/90</span>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="" to="#">
                              <i className="mdi mdi-comment-outline text-primary font-15"></i>
                              <span className="text-muted fw-bold">11</span>
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

                <div className="card">
                  <div className="card-body">
                    <div className="task-box">
                      <div className="task-priority-icon"><i className="fas fa-circle text-info"></i></div>
                      <p className="text-muted float-right">
                        <span className="badge bg-danger me-2">Stop</span>
                        <span className="text-muted">01:33</span> /
                        <span className="text-muted">9:30</span>
                        <span className="mx-1">·</span>
                        <span><i className="far fa-fw fa-clock"></i> June 18</span>
                      </p>
                      <h5 className="mt-0 mb-1">Tender Team</h5>
                      <p className="text-muted mb-1">The tender team's tenacity and determination transform challenges
                        into opportunities and aspirations into reality.
                      </p>
                      <p className="text-muted text-end mb-1">37% Complete</p>
                      <div className="progress mb-4" style={{height: '4px'}}>
                        <div className="progress-bar bg-secondary" role="progressbar" style={{width: '37%'}}
                          aria-valuenow="37" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="img-group">
                          <Link className="user-avatar user-avatar-group" to="#">
                            <img src="assets/images/users/user-8.jpg" alt="user"
                              className="rounded-circle thumb-xs" />
                          </Link>
                          <Link className="user-avatar user-avatar-group" to="#">
                            <img src="assets/images/users/user-5.jpg" alt="user"
                              className="rounded-circle thumb-xs" />
                          </Link>
                          <Link className="user-avatar user-avatar-group" to="#">
                            <img src="assets/images/users/user-7.jpg" alt="user"
                              className="rounded-circle thumb-xs" />
                          </Link>
                        </div>

                        <ul className="list-inline mb-0 align-self-center">
                          <li className="list-item d-inline-block me-2">
                            <Link className="" to="#">
                              <i className="mdi mdi-format-list-bulleted text-success font-15"></i>
                              <span className="text-muted fw-bold">55/150</span>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="" to="#">
                              <i className="mdi mdi-comment-outline text-primary font-15"></i>
                              <span className="text-muted fw-bold">8</span>
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

                <div className="card">
                  <div className="card-body">
                    <div className="task-box">
                      <div className="task-priority-icon"><i className="fas fa-circle text-info"></i></div>
                      <p className="text-muted float-right">
                        <span className="badge bg-warning me-2">Panding</span>
                        <span className="text-muted">01:33</span> /
                        <span className="text-muted">9:30</span>
                        <span className="mx-1">·</span>
                        <span><i className="far fa-fw fa-clock"></i> June 18</span>
                      </p>
                      <h5 className="mt-0 mb-1">Technical Team
                      </h5>
                      <p className="text-muted mb-1">The technical team's dedication to excellence ensures that we stay at
                        the forefront of technological advancements and maintain a competitive edge.
                      </p>
                      <p className="text-muted text-end mb-1">01% Complete</p>
                      <div className="progress mb-4" style={{height: '4px'}}>
                        <div className="progress-bar bg-info" role="progressbar" style={{width: '1%'}} aria-valuenow="1"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="img-group">
                          <Link className="user-avatar user-avatar-group" to="#">
                            <img src="assets/images/users/user-10.jpg" alt="user"
                              className="rounded-circle thumb-xs" />
                          </Link>
                          <Link className="user-avatar user-avatar-group" to="#">
                            <img src="assets/images/users/user-8.jpg" alt="user"
                              className="rounded-circle thumb-xs" />
                          </Link>
                          <Link className="user-avatar user-avatar-group" to="#">
                            <img src="assets/images/users/user-6.jpg" alt="user"
                              className="rounded-circle thumb-xs" />
                          </Link>
                        </div>

                        <ul className="list-inline mb-0 align-self-center">
                          <li className="list-item d-inline-block me-2">
                            <Link className="" to="#">
                              <i className="mdi mdi-format-list-bulleted text-success font-15"></i>
                              <span className="text-muted fw-bold">01/80</span>
                            </Link>
                          </li>
                          <li className="list-item d-inline-block">
                            <Link className="" to="#">
                              <i className="mdi mdi-comment-outline text-primary font-15"></i>
                              <span className="text-muted fw-bold">0</span>
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

export default ProjectsTask
