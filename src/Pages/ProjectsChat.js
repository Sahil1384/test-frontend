import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function ProjectsChat() {
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
                      <li className="breadcrumb-item active">Chat</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Chat</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="chat-box-left">
                  <ul className="nav nav-tabs mb-3 nav-justified" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <Link className="nav-link active" id="general_chat_tab" data-bs-toggle="tab" to="#general_chat"
                        role="tab">General</Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link className="nav-link" id="group_chat_tab" data-bs-toggle="tab" to="#group_chat"
                        role="tab">Groups</Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link className="nav-link" id="personal_chat_tab" data-bs-toggle="tab" to="#personal_chat"
                        role="tab">Personal</Link>
                    </li>
                  </ul>
                  <div className="chat-search mb-3">
                    <div className="form-group">
                      <div className="input-group">
                        <input type="text" id="chat-search" name="chat-search" className="form-control"
                          placeholder="Search" />
                        <button type="button" className="btn btn-outline-light shadow-none"><i
                          className="la la-search"></i></button>
                      </div>
                    </div>
                  </div>


                  <div className="chat-body-left" data-simplebar>
                    <div className="tab-content chat-list" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="general_chat">
                        <Link to="#" className="media new-message">
                          <div className="media-left">
                            <img src="assets/images/users/user-1.jpg" alt="user"
                              className="rounded-circle thumb-md" />
                            <span className="round-10 bg-success"></span>
                          </div>
                          <div className="media-body">
                            <div className="d-inline-block">
                              <h6>Om Prakash Giri</h6>
                              <p>Good morning! Congratulations Friend...</p>
                            </div>
                            <div>
                              <span>20 Feb</span>
                              <span>3</span>
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="media new-message">
                          <div className="media-left">
                            <img src="assets/images/users/user-2.jpg" alt="user"
                              className="rounded-circle thumb-md" />
                            <span className="round-10 bg-success"></span>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6>
                                Manoj Mouryan</h6>
                              <p>Congratulations Friend...</p>
                            </div>
                            <div>
                              <span>20 Feb</span>
                              <span>1</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="#" className="media">
                          <div className="media-left">
                            <img src="assets/images/users/user-8.jpg" alt="user"
                              className="rounded-circle thumb-md" />
                            <span className="round-10 bg-secondary"></span>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6>D.K Agrawal</h6>
                              <p>How are you Friend...</p>
                            </div>
                            <div>
                              <span>15 Feb</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="#" className="media">
                          <div className="media-left">
                            <img src="assets/images/users/user-4.jpg" alt="user"
                              className="rounded-circle thumb-md" />
                            <span className="round-10 bg-secondary"></span>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6>Pragati Pandey</h6>
                              <p>Have A Nice day...</p>
                            </div>
                            <div>
                              <span>14 Feb</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="#" className="media">
                          <div className="media-left">
                            <img src="assets/images/users/user-5.jpg" alt="user"
                              className="rounded-circle thumb-md" />
                            <span className="round-10 bg-success"></span>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6>Sivesh Mishra</h6>
                              <p>Good morning! How are you?</p>
                            </div>
                            <div>
                              <span>10 Feb</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="#" className="media">
                          <div className="media-left">
                            <img src="assets/images/users/user-6.jpg" alt="user"
                              className="rounded-circle thumb-md" />
                            <span className="round-10 bg-secondary"></span>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6>Jyoti Joshi</h6>
                              <p>How are you Friend...</p>
                            </div>
                            <div>
                              <span>1 Feb</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="#" className="media">
                          <div className="media-left">
                            <img src="assets/images/users/user-7.jpg" alt="user"
                              className="rounded-circle thumb-md" />
                            <span className="round-10 bg-secondary"></span>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6>Surbhi Singh </h6>
                              <p>Have A Nice day...</p>
                            </div>
                            <div>
                              <span>30 Jan</span>
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="media">
                          <div className="media-left">
                            <img src="assets/images/users/user-8.jpg" alt="user"
                              className="rounded-circle thumb-md" />
                            <span className="round-10 bg-secondary"></span>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6>Mohit Vij</h6>
                              <p>Good morning! How are you?</p>
                            </div>
                            <div>
                              <span>26 Jan</span>
                            </div>
                          </div>
                        </Link>

                      </div>


                      <div className="tab-pane fade" id="group_chat">
                        <Link to="#" className="media new-message">
                          <div className="media-left">
                            <div className="avatar-box thumb-md align-self-center me-2">
                              <span
                                className="thumb-md justify-content-center d-flex align-items-center bg-soft-success rounded-circle me-2">
                                <i className="fab fa-quinscape"></i>
                              </span>
                            </div>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6>Purchase Group</h6>
                              <p>Good morning! How are you?</p>
                            </div>
                            <div>
                              <span>20 Feb</span>
                              <span>1</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="#" className="media">
                          <div className="media-left">
                            <div className="avatar-box thumb-md align-self-center me-2">
                              <span
                                className="thumb-md justify-content-center d-flex align-items-center bg-soft-primary rounded-circle me-2">
                                <i className="fab fa-connectdevelop"></i>
                              </span>
                            </div>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6> MCF Project Group</h6>
                              <p>Have A Nice day...</p>
                            </div>
                            <div>
                              <span>15 Feb</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="#" className="media">
                          <div className="media-left">
                            <div className="avatar-box thumb-md align-self-center me-2">
                              <span
                                className="thumb-md justify-content-center d-flex align-items-center bg-soft-warning rounded-circle me-2">
                                <i className="far fa-gem"></i>
                              </span>
                            </div>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6>Designers Group</h6>
                              <p>Congratulations everybody... </p>
                            </div>
                            <div>
                              <span>14 Feb</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="#" className="media">
                          <div className="media-left">
                            <div className="avatar-box thumb-md align-self-center me-2">
                              <span
                                className="thumb-md justify-content-center d-flex align-items-center bg-soft-pink rounded-circle me-2">
                                <i className="fab fa-react"></i>
                              </span>
                            </div>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6>Billing Group</h6>
                              <p>How are you Friends...</p>
                            </div>
                            <div>
                              <span>10 Feb</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="#" className="media">
                          <div className="media-left">
                            <div className="avatar-box thumb-md align-self-center me-2">
                              <span
                                className="thumb-md justify-content-center d-flex align-items-center bg-soft-info rounded-circle me-2">
                                <i className="fas fa-globe"></i>
                              </span>
                            </div>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6>Marketing Group</h6>
                              <p>How are you Friends...</p>
                            </div>
                            <div>
                              <span>10 Feb</span>
                            </div>
                          </div>
                        </Link>

                      </div>


                      <div className="tab-pane fade" id="personal_chat">
                        <Link to="#" className="media new-message">
                          <div className="media-left">
                            <img src="assets/images/users/user-1.jpg" alt="user"
                              className="rounded-circle thumb-md" />
                            <span className="round-10 bg-success"></span>
                          </div>
                          <div className="media-body">
                            <div className="d-inline-block">
                              <h6>Om Prakash Giri</h6>
                              <p>Good morning! Congratulations Friend...</p>
                            </div>
                            <div>
                              <span>20 Feb</span>
                              <span>3</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="#" className="media new-message">
                          <div className="media-left">
                            <img src="assets/images/users/user-2.jpg" alt="user"
                              className="rounded-circle thumb-md" />
                            <span className="round-10 bg-success"></span>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6>Manoj Mourya</h6>
                              <p>Congratulations Friend...</p>
                            </div>
                            <div>
                              <span>20 Feb</span>
                              <span>1</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="#" className="media">
                          <div className="media-left">
                            <img src="assets/images/users/user-8.jpg" alt="user"
                              className="rounded-circle thumb-md" />
                            <span className="round-10 bg-secondary"></span>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6>
                                D.K Agrawal</h6>
                              <p>How are you Friend...</p>
                            </div>
                            <div>
                              <span>15 Feb</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="#" className="media">
                          <div className="media-left">
                            <img src="assets/images/users/user-4.jpg" alt="user"
                              className="rounded-circle thumb-md" />
                            <span className="round-10 bg-secondary"></span>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6>Pragati Pandey</h6>
                              <p>Have A Nice day...</p>
                            </div>
                            <div>
                              <span>14 Feb</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="#" className="media">
                          <div className="media-left">
                            <img src="assets/images/users/user-5.jpg" alt="user"
                              className="rounded-circle thumb-md" />
                            <span className="round-10 bg-success"></span>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6>Sivesh Mishra</h6>
                              <p>Good morning! How are you?</p>
                            </div>
                            <div>
                              <span>10 Feb</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="#" className="media">
                          <div className="media-left">
                            <img src="assets/images/users/user-6.jpg" alt="user"
                              className="rounded-circle thumb-md" />
                            <span className="round-10 bg-secondary"></span>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6>Jyoti Joshi</h6>
                              <p>How are you Friend...</p>
                            </div>
                            <div>
                              <span>1 Feb</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="#" className="media">
                          <div className="media-left">
                            <img src="assets/images/users/user-7.jpg" alt="user"
                              className="rounded-circle thumb-md" />
                            <span className="round-10 bg-secondary"></span>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6>Surbhi Singh</h6>
                              <p>Have A Nice day...</p>
                            </div>
                            <div>
                              <span>30 Jan</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="#" className="media">
                          <div className="media-left">
                            <img src="assets/images/users/user-8.jpg" alt="user"
                              className="rounded-circle thumb-md" />
                            <span className="round-10 bg-secondary"></span>
                          </div>
                          <div className="media-body">
                            <div>
                              <h6>Om Prakash Giri</h6>
                              <p>Good morning! How are you?</p>
                            </div>
                            <div>
                              <span>26 Jan</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="chat-box-right">
                  <div className="chat-header">
                    <Link to="#" className="media">
                      <div className="media-left">
                        <img src="assets/images/users/user-4.jpg" alt="user" className="rounded-circle thumb-sm" />
                      </div>
                      <div className="media-body">
                        <div>
                          <h6 className="m-0">Pragati Pandey</h6>
                          <p className="mb-0">Last seen: 2 hours ago</p>
                        </div>
                      </div>
                    </Link>

                    <div className="chat-features">
                      <div className="d-none d-sm-inline-block">
                        <Link to="#"><i className="la la-phone"></i></Link>
                        <Link to="#"><i className="la la-video"></i></Link>
                        <Link to="#"><i className="la la-trash-alt"></i></Link>
                        <Link to="#"><i className="la la-ellipsis-v"></i></Link>
                      </div>
                    </div>
                  </div>
                  <div className="chat-body" data-simplebar>
                    <div className="chat-detail">
                      <div className="media">
                        <div className="media-img">
                          <img src="assets/images/users/user-4.jpg" alt="user" className="rounded-circle thumb-sm" />
                        </div>
                        <div className="media-body">
                          <div className="chat-msg">
                            <p>Good Morning !</p>
                          </div>
                          <div className="chat-msg">
                            <p>There are many variations of passages of Lorem Ipsum available.</p>
                          </div>
                          <div className="chat-time">9:02am</div>
                        </div>

                      </div>


                      <div className="media">
                        <div className="media-body reverse">
                          <div className="chat-msg">
                            <p>Good Morning !</p>
                          </div>
                          <div className="chat-msg">
                            <p>There are many variations of passages of Lorem Ipsum available.</p>
                          </div>
                        </div>

                        <div className="media-img">
                          <img src="assets/images/users/user-8.jpg" alt="user" className="rounded-circle thumb-sm" />
                        </div>
                      </div>


                      <div className="media">
                        <div className="media-img">
                          <img src="assets/images/users/user-4.jpg" alt="user" className="rounded-circle thumb-sm" />
                        </div>
                        <div className="media-body">
                          <div className="chat-msg">
                            <p>There are many variations of passages of Lorem Ipsum available.</p>
                          </div>
                        </div>

                      </div>


                      <div className="media">
                        <div className="media-body reverse">
                          <div className="chat-msg">
                            <p>Good Morning !</p>
                          </div>
                          <div className="chat-msg">
                            <p>It is a long established fact that a reader will be distracted by
                              the readable content of a page when looking at its layout.
                              The point of using Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using 'Content here.
                            </p>
                          </div>
                        </div>

                        <div className="media-img">
                          <img src="assets/images/users/user-8.jpg" alt="user" className="rounded-circle thumb-sm" />
                        </div>
                      </div>


                      <div className="media">
                        <div className="media-img">
                          <img src="assets/images/users/user-4.jpg" alt="user" className="rounded-circle thumb-sm" />
                        </div>
                        <div className="media-body">
                          <div className="chat-msg">
                            <p>Good Morning !</p>
                          </div>
                          <div className="chat-msg">
                            <p>It is a long established fact that a reader will be distracted by
                              the readable content of a page when looking at its layout.
                              The point of using Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using 'Content here.
                            </p>
                          </div>
                          <div className="chat-msg">
                            <p>Ok</p>
                          </div>
                        </div>

                      </div>


                      <div className="media">
                        <div className="media-body reverse">
                          <div className="chat-msg">
                            <p>Good Morning !</p>
                          </div>
                          <div className="chat-msg">
                            <p>There are many variations of passages of Lorem Ipsum available.</p>
                          </div>
                          <div className="chat-msg">
                            <p>There are many variations of passages.</p>
                          </div>
                          <div className="chat-msg">
                            <p>By</p>
                          </div>
                        </div>
                        <div className="media-img">
                          <img src="assets/images/users/user-8.jpg" alt="user" className="rounded-circle thumb-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-footer">
                    <div className="row">
                      <div className="col-12 col-md-9">
                        <span className="chat-admin"><img src="assets/images/users/user-8.jpg" alt="user"
                          className="rounded-circle thumb-sm" /></span>
                        <input type="text" className="form-control" placeholder="Type something here..." />
                      </div>
                      <div className="col-3 text-end">
                        <div className="d-none d-sm-inline-block chat-features">
                          <Link to="#"><i className="la la-camera"></i></Link>
                          <Link to="#"><i className="la la-paperclip"></i></Link>
                          <Link to="#"><i className="la la-microphone"></i></Link>
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

export default ProjectsChat
