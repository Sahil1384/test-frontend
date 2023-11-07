import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function ProfileAdmin() {
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
                                            <li className="breadcrumb-item"><Link to="#">Unikit</Link></li>
                                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                                            <li className="breadcrumb-item active">Profile</li>
                                        </ol>
                                    </div>
                                    <h4 className="page-title">Profile</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="met-profile">
                                            <div className="row">
                                                <div className="col-lg-4 align-self-center mb-3 mb-lg-0">
                                                    <div className="met-profile-main">
                                                        <div className="met-profile-main-pic">
                                                            <img src="assets/images/users/user-8.jpg" alt="" height="110"
                                                                className="rounded-circle" />
                                                            <span className="met-profile_main-pic-change">
                                                                <i className="fas fa-camera"></i>
                                                            </span>
                                                        </div>
                                                        <div className="met-profile_user-detail">
                                                            <h5 className="met-user-name">Suraj Pandey</h5>
                                                            <p className="mb-0 met-user-name-post">Director </p>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-lg-4 ms-auto align-self-center">
                                                    <ul className="list-unstyled personal-detail mb-0">
                                                        <li className=""><i className="las la-phone mr-2 text-secondary font-22 align-middle"></i>
                                                            <b> phone </b> : +91 23456 78910</li>
                                                        <li className="mt-2"><i
                                                            className="las la-envelope text-secondary font-22 align-middle mr-2"></i> <b>
                                                                Email </b> : director@acmeindia.co</li>
                                                        <li className="mt-2"><i
                                                            className="las la-globe text-secondary font-22 align-middle mr-2"></i> <b>
                                                                Website </b> :
                                                            <Link to="https://acmeindia.co/"
                                                                className="font-14 text-primary">https://acmeindia.co/</Link>
                                                        </li>
                                                    </ul>

                                                </div>

                                                <div className="col-lg-4 align-self-center">
                                                    <div className="row">
                                                        <div className="col-auto text-end border-end">
                                                            <button type="button"
                                                                className="btn btn-soft-primary btn-icon-circle btn-icon-circle-sm mb-2">
                                                                <i className="fab fa-facebook-f"></i>
                                                            </button>
                                                            <p className="mb-0 fw-semibold">Facebook</p>
                                                            <h4 className="m-0 fw-bold">25k <span
                                                                className="text-muted font-12 fw-normal">Followers</span></h4>
                                                        </div>

                                                        <div className="col-auto">
                                                            <button type="button"
                                                                className="btn btn-soft-info btn-icon-circle btn-icon-circle-sm mb-2">
                                                                <i className="fab fa-twitter"></i>
                                                            </button>
                                                            <p className="mb-0 fw-semibold">Twitter</p>
                                                            <h4 className="m-0 fw-bold">58k <span
                                                                className="text-muted font-12 fw-normal">Followers</span></h4>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="card-body p-0">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item">
                                                <Link className="nav-link active" data-bs-toggle="tab" to="#Post" role="tab"
                                                    aria-selected="true">Post</Link>
                                            </li>
                                            {/* <!-- <li className="nav-item">
                                                <Link className="nav-link" data-bs-toggle="tab" to="#Gallery" role="tab"
                                                    aria-selected="false">Gallery</Link>
                                            </li> --> */}
                                            <li className="nav-item">
                                                <Link className="nav-link" data-bs-toggle="tab" to="#Settings" role="tab"
                                                    aria-selected="false">Settings</Link>
                                            </li>
                                        </ul>


                                        <div className="tab-content">
                                            <div className="tab-pane p-3 active" id="Post" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-lg-9">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="card">
                                                                    <div className="card-body  report-card">
                                                                        <div className="row d-flex justify-content-center">
                                                                            <div className="col">
                                                                                <p className="text-dark mb-1 fw-semibold">Project </p>
                                                                                <h3 className="my-2 font-24 fw-bold">10 </h3>
                                                                                <p className="mb-0 text-truncate text-muted"><i
                                                                                    className="ti ti-bell text-warning font-18"></i>
                                                                                    <span className="text-dark fw-semibold">2</span> Project Completed
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-auto align-self-center">
                                                                                <div
                                                                                    className="d-flex justify-content-center align-items-center thumb-xl bg-light-alt rounded-circle mx-auto">
                                                                                    <i
                                                                                        className="ti ti-eye font-30 align-self-center text-muted"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                            <div className="col-lg-6">
                                                                <div className="card">
                                                                    <div className="card-body  report-card">
                                                                        <div className="row d-flex justify-content-center">
                                                                            <div className="col">
                                                                                <p className="text-dark mb-1 fw-semibold">Comments</p>
                                                                                <h3 className="my-2 font-24 fw-bold">24k</h3>
                                                                                <p className="mb-0 text-truncate text-muted"><i
                                                                                    className="ti ti-thumb-up text-success font-18"></i>
                                                                                    <span className="text-dark fw-semibold">854</span> New Like
                                                                                    this week
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-auto align-self-center">
                                                                                <div
                                                                                    className="d-flex justify-content-center align-items-center thumb-xl bg-light-alt rounded-circle mx-auto">
                                                                                    <i
                                                                                        className="ti ti-brand-hipchat font-30 align-self-center text-muted"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <img src="assets/images/small/1.jpg" alt="" className="img-fluid" />
                                                                <div className="post-title mt-4">
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <span className="badge badge-soft-primary">Natural</span>
                                                                        </div>
                                                                        <div className="col-auto">
                                                                            <span className="text-muted"><i className="far fa-calendar me-1"></i>02
                                                                                July 2020</span>
                                                                        </div>
                                                                    </div>

                                                                    <h5 to="#" className="font-20 fw-bold d-block mt-3 mb-4">There is nothing
                                                                        more beautiful than nature.</h5>
                                                                    <span className="font-15 bg-light py-2 px-3 rounded">Taking pictures is
                                                                        savouring life intensely.</span>
                                                                    <p className="font-15 mt-4">It is a long established fact that a reader will
                                                                        be distracted by the readable content of
                                                                        a page when looking at its layout. The point of using Lorem Ipsum is
                                                                        that it has a
                                                                        more-or-less normal distribution of letters, as opposed to using
                                                                        'Content here, content here', making it look like readable English.
                                                                        Many desktop publishing packages and web page editors now use Lorem
                                                                        Ipsum
                                                                        as their default model text, and a search for 'lorem ipsum' will
                                                                        uncover many
                                                                        web sites still in their infancy.

                                                                    </p>
                                                                    <blockquote className="blockquote border-start ps-4">
                                                                        <p className="font-18"><i>"Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Integer posuere erat a ante."</i></p>
                                                                        <footer className="blockquote-footer">Someone famous in <cite
                                                                            title="Source Title">Source Title</cite></footer>
                                                                    </blockquote>
                                                                    <p className="font-15">Taking pictures is savouring life intensely, every
                                                                        hundredth of a second – Marc Riboud.
                                                                        Joy in looking and comprehending is nature’s most beautiful gift.
                                                                    </p>
                                                                    <p className="font-15 mb-0">It is a long established fact that a reader will
                                                                        be distracted by the readable content of
                                                                        a page when looking at its layout. The point of using Lorem Ipsum is
                                                                        that it has a
                                                                        more-or-less normal distribution of letters, as opposed to using
                                                                        'Content here, content here', making it look like readable English.
                                                                        Many desktop publishing packages and web page editors now use Lorem
                                                                        Ipsum
                                                                        as their default model text, and a search for 'lorem ipsum' will
                                                                        uncover many
                                                                        web sites still in their infancy.

                                                                    </p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="card">
                                                            <div className="card-body pb-0">
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <p className="text-dark fw-semibold mb-0">Comments (205)</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body border-bottom-dashed">
                                                                <ul className="list-unstyled mb-0">
                                                                    <li>
                                                                        <div className="row">
                                                                            <div className="col-auto">
                                                                                <img src="assets/images/users/user-2.jpg" alt=""
                                                                                    className="thumb-md rounded-circle" />
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="comment-body ms-n2 bg-light-alt p-3">
                                                                                    <div className="row">
                                                                                        <div className="col">
                                                                                            <p className="text-dark fw-semibold mb-2">Martin
                                                                                                Luther</p>
                                                                                        </div>
                                                                                        <div className="col-auto">
                                                                                            <span className="text-muted"><i
                                                                                                className="far fa-clock me-1"></i>30 min
                                                                                                ago</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p>It is a long established fact that a reader will be
                                                                                        distracted by the
                                                                                        readable content of a page when looking at its
                                                                                        layout. The point of
                                                                                        using Lorem Ipsum is that it has a more-or-less
                                                                                        normal distribution of letters,
                                                                                        as opposed to using 'Content here, content here',
                                                                                        making it look like readable English.
                                                                                    </p>
                                                                                    <Link to="#" className="text-primary"><i
                                                                                        className="fas fa-reply me-1"></i>Replay</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <ul className="list-unstyled ms-5">
                                                                            <li>
                                                                                <div className="row mt-3">
                                                                                    <div className="col-auto">
                                                                                        <img src="assets/images/logo-sm.png" alt=""
                                                                                            className="thumb-md rounded-circle" />
                                                                                    </div>
                                                                                    <div className="col">
                                                                                        <div className="comment-body ms-n2 bg-light-alt p-3">
                                                                                            <div className="row">
                                                                                                <div className="col">
                                                                                                    <p className="text-dark fw-semibold mb-2">
                                                                                                        Unikit Author</p>
                                                                                                </div>
                                                                                                <div className="col-auto">
                                                                                                    <span className="text-muted"><i
                                                                                                        className="far fa-clock me-1"></i>37
                                                                                                        min ago</span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <p>It is a long established fact that a reader
                                                                                                will be distracted by the
                                                                                                readable content of a page when looking at
                                                                                                its layout.
                                                                                            </p>
                                                                                            <p className="mb-0">Thank you</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="mt-3">
                                                                        <div className="row">
                                                                            <div className="col-auto">
                                                                                <img src="assets/images/users/user-1.jpg" alt=""
                                                                                    className="thumb-md rounded-circle" />
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="comment-body ms-n2 bg-light-alt p-3">
                                                                                    <div className="row">
                                                                                        <div className="col">
                                                                                            <p className="text-dark fw-semibold mb-2">Joseph
                                                                                                Rust</p>
                                                                                        </div>
                                                                                        <div className="col-auto">
                                                                                            <span className="text-muted"><i
                                                                                                className="far fa-clock me-1"></i>40 min
                                                                                                ago</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p>Is it a long established fact that a reader will be
                                                                                        distracted by the
                                                                                        readable content of a page when looking at its
                                                                                        layout?
                                                                                    </p>
                                                                                    <Link to="#" className="text-primary"><i
                                                                                        className="fas fa-reply me-1"></i>Replay</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="mt-3">
                                                                        <div className="row">
                                                                            <div className="col-auto">
                                                                                <img src="assets/images/users/user-5.jpg" alt=""
                                                                                    className="thumb-md rounded-circle" />
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="comment-body ms-n2 bg-light-alt p-3">
                                                                                    <div className="row">
                                                                                        <div className="col">
                                                                                            <p className="text-dark fw-semibold mb-2">Matt
                                                                                                Rosales</p>
                                                                                        </div>
                                                                                        <div className="col-auto">
                                                                                            <span className="text-muted"><i
                                                                                                className="far fa-clock me-1"></i>40 min
                                                                                                ago</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p>Is it a long established fact that a reader will be
                                                                                        distracted by the
                                                                                        readable content of a page when looking at its
                                                                                        layout?
                                                                                    </p>
                                                                                    <Link to="#" className="text-primary"><i
                                                                                        className="fas fa-reply me-1"></i>Replay</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <ul className="list-unstyled ms-5">
                                                                            <li>
                                                                                <div className="row mt-3">
                                                                                    <div className="col-auto">
                                                                                        <img src="assets/images/logo-sm.png" alt=""
                                                                                            className="thumb-md rounded-circle" />
                                                                                    </div>
                                                                                    <div className="col">
                                                                                        <div className="comment-body ms-n2 bg-light-alt p-3">
                                                                                            <div className="row">
                                                                                                <div className="col">
                                                                                                    <p className="text-dark fw-semibold mb-2">
                                                                                                        Unikit Author</p>
                                                                                                </div>
                                                                                                <div className="col-auto">
                                                                                                    <span className="text-muted"><i
                                                                                                        className="far fa-clock me-1"></i>37
                                                                                                        min ago</span>
                                                                                                </div>

                                                                                            </div>

                                                                                            <p>It is a long established fact that a reader
                                                                                                will be distracted by the
                                                                                                readable content of a page when looking at
                                                                                                its layout.
                                                                                            </p>
                                                                                            <p className="mb-0">Thank you</p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>

                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <p className="text-dark fw-semibold mb-0">Leave a comment</p>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                            <div className="card-body pt-0">
                                                                <form>
                                                                    <div className="form-group mb-3">
                                                                        <textarea className="form-control" rows="5" id="leave_comment"
                                                                            placeholder="Message"></textarea>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-sm-12 text-end">
                                                                            <button type="submit" className="btn btn-de-primary px-4">Send
                                                                                Message</button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <div className="row align-items-center">
                                                                    <div className="col">
                                                                        <h4 className="card-title">Latest Posts</h4>
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <div className="dropdown">
                                                                            <Link to="#" className="btn btn-sm btn-outline-light dropdown-toggle"
                                                                                data-bs-toggle="dropdown" aria-haspopup="true"
                                                                                aria-expanded="false">
                                                                                Today<i className="las la-angle-down ms-1"></i>
                                                                            </Link>
                                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                                <Link className="dropdown-item" to="#">Today</Link>
                                                                                <Link className="dropdown-item" to="#">Yesterday</Link>
                                                                                <Link className="dropdown-item" to="#">Last Week</Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="blog-card">
                                                                    <img src="assets/images/small/img-1.jpg" alt=""
                                                                        className="img-fluid rounded" />
                                                                    <span
                                                                        className="badge badge-purple px-3 py-2 bg-soft-primary fw-semibold mt-3">Photography</span>
                                                                    <h4 className="my-3 font-15">
                                                                        <Link to="#" className="">There are many variations of passages of
                                                                            Lorem</Link>
                                                                    </h4>
                                                                    <p className="text-muted">The standard chunk of Lorem Ipsum used since the
                                                                        1500s is reproduced below for those interested. Cum sociis natoque
                                                                        penatibus et magnis.</p>
                                                                    <hr className="hr-dashed" />
                                                                    <div className="d-flex justify-content-between">
                                                                        <div className="meta-box">
                                                                            <div className="media">
                                                                                <img src="assets/images/users/user-5.jpg" alt=""
                                                                                    className="thumb-sm rounded-circle me-2" />
                                                                                <div className="media-body align-self-center text-truncate">
                                                                                    <h6 className="m-0 text-dark">Donald Gardner</h6>
                                                                                    <ul className="p-0 list-inline mb-0">
                                                                                        <li className="list-inline-item">26 mars 2020</li>
                                                                                        <li className="list-inline-item">by <Link
                                                                                            to="#">admin</Link></li>
                                                                                    </ul>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                        <div className="align-self-center">
                                                                            <Link to="#" className="text-dark">Read more <i
                                                                                className="fas fa-long-arrow-alt-right"></i></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <div className="row align-items-center">
                                                                    <div className="col">
                                                                        <h4 className="card-title">Popular Posts</h4>
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <div className="dropdown">
                                                                            <Link to="#" className="btn btn-sm btn-outline-light dropdown-toggle"
                                                                                data-bs-toggle="dropdown" aria-haspopup="true"
                                                                                aria-expanded="false">
                                                                                Today<i className="las la-angle-down ms-1"></i>
                                                                            </Link>
                                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                                <Link className="dropdown-item" to="#">Today</Link>
                                                                                <Link className="dropdown-item" to="#">Yesterday</Link>
                                                                                <Link className="dropdown-item" to="#">Last Week</Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <ul className="list-group custom-list-group mb-n3">
                                                                    <li
                                                                        className="list-group-item align-items-center d-flex justify-content-between">
                                                                        <div className="media">
                                                                            <img src="assets/images/small/img-2.jpg" height="40"
                                                                                className="me-3 align-self-center rounded" alt="..." />
                                                                            <div className="media-body align-self-center">
                                                                                <Link to="#" className="m-0 d-block fw-semibold font-13">Dastyle
                                                                                    - Admin Dashboard</Link>
                                                                                <Link to="#"
                                                                                    className="font-12 text-primary">analytic-index.html</Link>
                                                                            </div>
                                                                        </div>
                                                                        <div className="align-self-center">
                                                                            <span className="text-muted mb-n2">20 June</span>
                                                                        </div>
                                                                    </li>
                                                                    <li
                                                                        className="list-group-item align-items-center d-flex justify-content-between">
                                                                        <div className="media">
                                                                            <img src="assets/images/small/img-1.jpg" height="40"
                                                                                className="me-3 align-self-center rounded" alt="..." />
                                                                            <div className="media-body align-self-center">
                                                                                <Link to="#" className="m-0 d-block fw-semibold font-13">Unikit
                                                                                    Simple- Admin Dashboard</Link>
                                                                                <Link to="#"
                                                                                    className="font-12 text-primary">sales-index.html</Link>
                                                                            </div>
                                                                        </div>
                                                                        <div className="align-self-center">
                                                                            <span className="text-muted mb-n2">18 june</span>
                                                                        </div>
                                                                    </li>
                                                                    <li
                                                                        className="list-group-item align-items-center d-flex justify-content-between">
                                                                        <div className="media">
                                                                            <img src="assets/images/small/img-4.jpg" height="40"
                                                                                className="me-3 align-self-center rounded" alt="..." />
                                                                            <div className="media-body align-self-center">
                                                                                <Link to="#" className="m-0 d-block fw-semibold font-13">Crovex -
                                                                                    Admin Dashboard</Link>
                                                                                <Link to="#"
                                                                                    className="font-12 text-primary">helpdesk-index.html</Link>
                                                                            </div>
                                                                        </div>
                                                                        <div className="align-self-center">
                                                                            <span className="text-muted mb-n2">15 june</span>
                                                                        </div>
                                                                    </li>
                                                                    <li
                                                                        className="list-group-item align-items-center d-flex justify-content-between">
                                                                        <div className="media">
                                                                            <img src="assets/images/small/img-5.jpg" height="40"
                                                                                className="me-3 align-self-center rounded" alt="..." />
                                                                            <div className="media-body align-self-center">
                                                                                <Link to="#" className="m-0 d-block fw-semibold font-13">Annex -
                                                                                    Admin Dashboard</Link>
                                                                                <Link to="#" className="font-12 text-primary">calendar.html</Link>
                                                                            </div>
                                                                        </div>
                                                                        <div className="align-self-center">
                                                                            <span className="text-muted mb-n2">12 june</span>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="card">
                                                            <div className="card-header">
                                                                <div className="row align-items-center">
                                                                    <div className="col">
                                                                        <h4 className="card-title">Social Profile</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="button-list btn-social-icon">
                                                                    <button type="button" className="btn btn-soft-primary btn-icon-circle">
                                                                        <i className="fab fa-facebook-f"></i>
                                                                    </button>

                                                                    <button type="button" className="btn btn-soft-info btn-icon-circle ms-2">
                                                                        <i className="fab fa-twitter"></i>
                                                                    </button>

                                                                    <button type="button" className="btn btn-soft-pink btn-icon-circle  ms-2">
                                                                        <i className="fab fa-dribbble"></i>
                                                                    </button>
                                                                    <button type="button" className="btn btn-soft-info btn-icon-circle  ms-2">
                                                                        <i className="fab fa-linkedin-in"></i>
                                                                    </button>
                                                                    <button type="button" className="btn btn-soft-danger btn-icon-circle  ms-2">
                                                                        <i className="fab fa-google-plus-g"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane p-3" id="Settings" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-lg-6 col-xl-6">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <div className="row align-items-center">
                                                                    <div className="col">
                                                                        <h4 className="card-title">Personal Information</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="form-group mb-3 row">
                                                                    <label
                                                                        className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">First
                                                                        Name</label>
                                                                    <div className="col-lg-9 col-xl-8">
                                                                        <input className="form-control" type="text" value="Rosa" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group mb-3 row">
                                                                    <label
                                                                        className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">Last
                                                                        Name</label>
                                                                    <div className="col-lg-9 col-xl-8">
                                                                        <input className="form-control" type="text" value="Dodson" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group mb-3 row">
                                                                    <label
                                                                        className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">Company
                                                                        Name</label>
                                                                    <div className="col-lg-9 col-xl-8">
                                                                        <input className="form-control" type="text" value="MannatThemes" />
                                                                        <span className="form-text text-muted font-12">We'll never share your
                                                                            email with anyone else.</span>
                                                                    </div>
                                                                </div>

                                                                <div className="form-group mb-3 row">
                                                                    <label
                                                                        className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">Contact
                                                                        Phone</label>
                                                                    <div className="col-lg-9 col-xl-8">
                                                                        <div className="input-group">
                                                                            <span className="input-group-text"><i
                                                                                className="las la-phone"></i></span>
                                                                            <input type="text" className="form-control" value="+123456789"
                                                                                placeholder="Phone" aria-describedby="basic-addon1" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group mb-3 row">
                                                                    <label
                                                                        className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">Email
                                                                        Address</label>
                                                                    <div className="col-lg-9 col-xl-8">
                                                                        <div className="input-group">
                                                                            <span className="input-group-text"><i className="las la-at"></i></span>
                                                                            <input type="text" className="form-control"
                                                                                value="rosa.dodson@demo.com" placeholder="Email"
                                                                                aria-describedby="basic-addon1" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group mb-3 row">
                                                                    <label
                                                                        className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">Website
                                                                        Link</label>
                                                                    <div className="col-lg-9 col-xl-8">
                                                                        <div className="input-group">
                                                                            <span className="input-group-text"><i
                                                                                className="la la-globe"></i></span>
                                                                            <input type="text" className="form-control"
                                                                                value=" https://mannatthemes.com/" placeholder="Email"
                                                                                aria-describedby="basic-addon1" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group mb-3 row">
                                                                    <label
                                                                        className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">USA</label>
                                                                    <div className="col-lg-9 col-xl-8">
                                                                        <select className="form-select">
                                                                            <option>London</option>
                                                                            <option>India</option>
                                                                            <option>USA</option>
                                                                            <option>Canada</option>
                                                                            <option>Thailand</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group mb-3 row">
                                                                    <div className="col-lg-9 col-xl-8 offset-lg-3">
                                                                        <button type="submit" className="btn btn-de-primary">Submit</button>
                                                                        <button type="button" className="btn btn-de-danger">Cancel</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-xl-6">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h4 className="card-title">Change Password</h4>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="form-group mb-3 row">
                                                                    <label
                                                                        className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">Current
                                                                        Password</label>
                                                                    <div className="col-lg-9 col-xl-8">
                                                                        <input className="form-control" type="password" placeholder="Password" />
                                                                        <Link to="#" className="text-primary font-12">Forgot password ?</Link>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group mb-3 row">
                                                                    <label
                                                                        className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">New
                                                                        Password</label>
                                                                    <div className="col-lg-9 col-xl-8">
                                                                        <input className="form-control" type="password"
                                                                            placeholder="New Password" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group mb-3 row">
                                                                    <label
                                                                        className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">Confirm
                                                                        Password</label>
                                                                    <div className="col-lg-9 col-xl-8">
                                                                        <input className="form-control" type="password"
                                                                            placeholder="Re-Password" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group mb-3 row">
                                                                    <div className="col-lg-9 col-xl-8 offset-lg-3">
                                                                        <button type="submit" className="btn btn-de-primary">Change
                                                                            Password</button>
                                                                        <button type="button" className="btn btn-de-danger">Cancel</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h4 className="card-title">Other Settings</h4>
                                                            </div>
                                                            <div className="card-body">

                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="Email_Notifications" checked />
                                                                    <label className="form-check-label" for="Email_Notifications">
                                                                        Email Notifications
                                                                    </label>
                                                                    <span className="form-text text-muted font-12 mt-0">Do you need them?</span>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="API_Access" />
                                                                    <label className="form-check-label" for="API_Access">
                                                                        API Access
                                                                    </label>
                                                                    <span className="form-text text-muted font-12 mt-0">Enable/Disable
                                                                        access</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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

export default ProfileAdmin
