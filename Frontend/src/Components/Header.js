import React from 'react'
import Aside from './Aside'
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../redux/features/authSlice";
import {Link, useNavigate } from "react-router-dom";
// import decode from "jwt-decode";

function Header() {

    const { user } = useSelector((state) => ({ ...state.auth }));
    // console.log(user.response?.userDetails);
    // console.log("12 ",user?.response?.userDetails?.name);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = user?.success;
    // console.log("16 ", token);

    // if (token) {
    //     const decodedToken = decode(token);
    //     if (decodedToken.exp * 1000 < new Date().getTime()) {
    //         dispatch(setLogout());
    //     }
    // }
    if(!token){
        navigate('/')
    }

    const handleLogout = () => {
        dispatch(setLogout());
        navigate('/')
    };
    return (
        <>
            <Aside />
            {/* <!-- Top Bar Start --> */}
            {/* <!-- Top Bar Start --> */}
            <div className="topbar">
                {/* <!-- Navbar --> */}
                <nav className="navbar-custom" id="navbar-custom">
                    <ul className="list-unstyled topbar-nav float-end mb-0">
                        <li className="dropdown notification-list">
                            <Link className="nav-link dropdown-toggle arrow-none nav-icon" data-bs-toggle="dropdown" to="#"
                                role="button" aria-haspopup="false" aria-expanded="false">
                                <i className="ti ti-bell"></i>
                                <span className="alert-badge"></span>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-end dropdown-lg pt-0">
                                <h6
                                    className="dropdown-item-text font-15 m-0 py-3 border-bottom d-flex justify-content-between align-items-center">
                                    Notifications <span className="badge bg-soft-primary badge-pill">2</span>
                                </h6>
                                <div className="notification-menu" data-simplebar>
                                    {/* <!-- item--> */}
                                    <Link to="#" className="dropdown-item py-3">
                                        <small className="float-end text-muted ps-2">2 min ago</small>
                                        <div className="media">
                                            <div className="avatar-md bg-soft-primary">
                                                <i className="ti ti-chart-arcs"></i>
                                            </div>
                                            <div className="media-body align-self-center ms-2 text-truncate">
                                                <h6 className="my-0 fw-normal text-dark">Your order is placed</h6>
                                                <small className="text-muted mb-0">Dummy text of the printing and industry.</small>
                                            </div>
                                            {/* <!--end media-body--> */}
                                        </div>
                                        {/* <!--end media--> */}
                                    </Link>
                                    {/* <!--end-item--> */}
                                    {/* <!-- item--> */}
                                    <Link to="#" className="dropdown-item py-3">
                                        <small className="float-end text-muted ps-2">10 min ago</small>
                                        <div className="media">
                                            <div className="avatar-md bg-soft-primary">
                                                <i className="ti ti-device-computer-camera"></i>
                                            </div>
                                            <div className="media-body align-self-center ms-2 text-truncate">
                                                <h6 className="my-0 fw-normal text-dark">Meeting with designers</h6>
                                                <small className="text-muted mb-0">It is a long established fact that a
                                                    reader.</small>
                                            </div>
                                            {/* <!--end media-body--> */}
                                        </div>
                                        {/* <!--end media--> */}
                                    </Link>
                                    {/* <!--end-item--> */}
                                    {/* <!-- item--> */}
                                    <Link to="#" className="dropdown-item py-3">
                                        <small className="float-end text-muted ps-2">40 min ago</small>
                                        <div className="media">
                                            <div className="avatar-md bg-soft-primary">
                                                <i className="ti ti-diamond"></i>
                                            </div>
                                            <div className="media-body align-self-center ms-2 text-truncate">
                                                <h6 className="my-0 fw-normal text-dark">UX 3 Task complete.</h6>
                                                <small className="text-muted mb-0">Dummy text of the printing.</small>
                                            </div>
                                            {/* <!--end media-body--> */}
                                        </div>
                                        {/* <!--end media--> */}
                                    </Link>
                                    {/* <!--end-item--> */}
                                    {/* <!-- item--> */}
                                    <Link to="#" className="dropdown-item py-3">
                                        <small className="float-end text-muted ps-2">1 hr ago</small>
                                        <div className="media">
                                            <div className="avatar-md bg-soft-primary">
                                                <i className="ti ti-drone"></i>
                                            </div>
                                            <div className="media-body align-self-center ms-2 text-truncate">
                                                <h6 className="my-0 fw-normal text-dark">Your order is placed</h6>
                                                <small className="text-muted mb-0">It is a long established fact that a
                                                    reader.</small>
                                            </div>
                                            {/* <!--end media-body--> */}
                                        </div>
                                        {/* <!--end media--> */}
                                    </Link>
                                    {/* <!--end-item--> */}
                                    {/* <!-- item--> */}
                                    <Link to="#" className="dropdown-item py-3">
                                        <small className="float-end text-muted ps-2">2 hrs ago</small>
                                        <div className="media">
                                            <div className="avatar-md bg-soft-primary">
                                                <i className="ti ti-users"></i>
                                            </div>
                                            <div className="media-body align-self-center ms-2 text-truncate">
                                                <h6 className="my-0 fw-normal text-dark">Payment Successfull</h6>
                                                <small className="text-muted mb-0">Dummy text of the printing.</small>
                                            </div>
                                            {/* <!--end media-body--> */}
                                        </div>
                                        {/* <!--end media--> */}
                                    </Link>
                                    {/* <!--end-item--> */}
                                </div>
                                {/* <!-- All--> */}
                                <Link to="#!" className="dropdown-item text-center text-primary">
                                    View all <i className="fi-arrow-right"></i>
                                </Link>
                            </div>
                        </li>

                        <li className="dropdown">
                            <Link className="nav-link dropdown-toggle nav-user" data-bs-toggle="dropdown" to="#" role="button"
                                aria-haspopup="false" aria-expanded="false">
                                <div className="d-flex align-items-center">
                                    <img src="assets/images/users/user-8.jpg" alt="profile-user"
                                        className="rounded-circle me-2 thumb-sm" />
                                    <div>
                                        <small className="d-none d-md-block font-11">Admin</small>
                                        <span className="d-none d-md-block fw-semibold font-12 text-capitalize">   {user?.response?.userDetails?.name} <i
                                            className="mdi mdi-chevron-down"></i></span>
                                    </div>
                                </div>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-end">
                                <Link className="dropdown-item" to="/ProfileAdmin"><i
                                    className="ti ti-user font-16 me-1 align-text-bottom"></i> Profile</Link>
                                <Link className="dropdown-item" to="crypto-settings.html"><i
                                    className="ti ti-settings font-16 me-1 align-text-bottom"></i> Settings</Link>
                                <div className="dropdown-divider mb-0"></div>
                                <Link className="dropdown-item" to="" onClick={() => handleLogout()}><i
                                    className="ti ti-power font-16 me-1 align-text-bottom"></i> Logout</Link>
                            </div>
                        </li>
                        {/* <!--end topbar-profile--> */}
                    </ul>
                    {/* <!--end topbar-nav--> */}

                    <ul className="list-unstyled topbar-nav mb-0">
                        <li>
                            <button className="nav-link button-menu-mobile nav-icon" id="togglemenu">
                                <i className="ti ti-menu-2"></i>
                            </button>
                        </li>
                        <li className="hide-phone app-search">
                            <form role="search" action="#" method="get">
                                <input type="search" name="search" className="form-control top-search mb-0"
                                    placeholder="Type text..." />
                                <button type="submit"><i className="ti ti-search"></i></button>
                            </form>
                        </li>
                    </ul>
                </nav>
                {/* <!-- end navbar--> */}
            </div>
            {/* <!-- Top Bar End --> */}
            {/* <!-- Top Bar End --> */}

            {/* <!-- page-wrapper start --> */}
            {/* <div className="page-wrapper">
                <!-- Page Content-->
                <div className="page-content-tab"></div>
            </div> */}
        </>
    )
}

export default Header