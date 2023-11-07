import React from 'react'
import { Link } from 'react-router-dom';

function Aside() {
    return (
        <>
            <div className="left-sidebar">
                <div className="brand">
                    <Link to="index.php" className="logo">
                        {/* <!-- <span>
                            <img src="assets/images/logo-sm.png" alt="logo-small" className="logo-sm" />
                        </span> --> */}
                        <span>
                            <img src="assets/images/logo.png" alt="logo-large" className="logo-lg logo-light" />
                            <img src="assets/images/logo.png" alt="logo-large" className="logo-lg logo-dark" />
                        </span>
                    </Link>
                </div>
                <div className="sidebar-user-pro media border-end">
                    <div className="position-relative mx-auto">
                        <img src="assets/images/users/user-8.jpg" alt="user" className="rounded-circle thumb-md" />
                        <span className="online-icon position-absolute end-0"><i className="mdi mdi-record text-success"></i></span>
                    </div>
                    <div className="media-body ms-2 user-detail align-self-center">
                        <h5 className="font-14 m-0 fw-bold">Suraj Pandey </h5>
                        <p className="opacity-50 mb-0">director@acmeindia.co</p>
                    </div>
                </div>
                <div className="border-end">
                    <ul className="nav nav-tabs menu-tab nav-justified" role="tablist">
                        <li className="nav-item">
                            <Link className="nav-link active" data-bs-toggle="tab" to="#Main" role="tab"
                                aria-selected="true">M<span>ain</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" data-bs-toggle="tab" to="#Extra" role="tab"
                                aria-selected="false">E<span>xtra</span></Link>
                        </li>
                    </ul>
                </div>
                <div className="menu-content h-100" data-simplebar>
                    <div className="menu-body navbar-vertical">
                        <div className="collapse navbar-collapse tab-content" id="sidebarCollapse">
                            <ul className="navbar-nav tab-pane active" id="Main" role="tabpanel">
                                <li className="menu-label mt-0 text-primary font-12 fw-semibold">M<span>ain</span><br /><span
                                    className="font-10 text-secondary fw-normal">Unique Dashboard</span></li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="#sidebarAnalytics" data-bs-toggle="collapse" role="button"
                                        aria-expanded="false" aria-controls="sidebarAnalytics">
                                        <i className="ti ti-stack menu-icon"></i>
                                        <span>Analytics</span>
                                    </Link>
                                    <div className="collapse " id="sidebarAnalytics">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/AnalyticsIndex">Dashboard</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li> */}

                                <li className="nav-item">
                                    <Link className="nav-link" to="#sidebarProjects" data-bs-toggle="collapse" role="button"
                                        aria-expanded="true" aria-controls="sidebarProjects">
                                        <i className="ti ti-brand-asana menu-icon"></i>
                                        <span>Projects</span>
                                    </Link>
                                    <div className="collapse show" id="sidebarProjects">
                                        <ul className="nav flex-column">
                                            {/* <li className="nav-item">
                                                <Link className="nav-link" to="/ProjectsIndex">Dashboard</Link>
                                            </li> */}
                                            {/* <li className="nav-item">
                                                <Link className="nav-link" to="/ProjectsClients">Clients</Link>
                                            </li> */}
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/ProjectsDepart">Department</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/ProjectsProject">Project</Link>
                                            </li>
                                            {/* <li className="nav-item">
                                                <Link className="nav-link" to="/ProjectsTask">Task</Link>
                                            </li> */}
                                            {/* <li className="nav-item">
                                                <Link className="nav-link" to="/ProjectsKanbanBoard">Kanban Board</Link>
                                            </li> */}
                                            {/* <li className="nav-item">
                                                <Link className="nav-link" to="/ProjectsChat">Chat</Link>
                                            </li> */}
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/ProjectsUsers">Users</Link>
                                            </li>
                                            {/* <li className="nav-item">
                                                <Link className="nav-link" to="/ProjectsCreate">Project Create</Link>
                                            </li> */}
                                        </ul>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="#sidebarMasters" data-bs-toggle="collapse" role="button"
                                        aria-expanded="true" aria-controls="sidebarMasters">
                                        <i className="ti ti-stack menu-icon menu-icon"></i>
                                        <span>Master Zones</span>
                                    </Link>
                                    <div className="collapse show" id="sidebarMasters">
                                        <ul className="nav flex-column">
                                        <li className="nav-item">
                                                <Link className="nav-link" to="/railway-zone">Railway Zone</Link>
                                            </li>
                                            {/* <li className="nav-item">
                                                <Link className="nav-link" to="/emd-paid">EMD Paid Status</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to='/sd-paid-status'>SD Paid Status</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to='/sd-paid-through'>SD Paid Through</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to='/pg-paid-status'>PG Paid Status</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to='/pg-paid-through'>PG Paid Through</Link>
                                            </li> */}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <ul className="navbar-nav tab-pane" id="Extra" role="tabpanel">
                                {/* <li>
                                    <div className="update-msg text-center position-relative">
                                        <button type="button" className="btn-close position-absolute end-0 me-2"
                                            aria-label="Close"></button>
                                        <img src="assets/images/speaker-light.png" alt="" className="" height="110" />
                                        <h5 className="mt-0">Mannat Themes</h5>
                                        <p className="mb-3">We Design and Develop Clean and High Quality Web Applications</p>
                                        <Link to="#!" className="btn btn-outline-warning btn-sm">Upgrade your
                                            plan</Link>
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aside