import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../Components/Footer'
import Header from '../Components/Header'



function index() {
    return (
        <>
            <Header />
            <div className='page-wrapper'>
                <div className='page-content-tab'>
                    <div className="container-fluid">
                        {/* <!-- Page-Title --> */}
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                    <div className="float-end">
                                        <ol className="breadcrumb">
                                            {/* <!-- <li className="breadcrumb-item"><Link to="#"></Link>
                        </li> --> */}
                                            {/* <!--end nav-item--> */}
                                            <li className="breadcrumb-item"><Link to="#">Analytics /</Link>
                                            </li>
                                            {/* <!--end nav-item--> */}
                                            <li className="breadcrumb-item active"> Dashboard</li>
                                        </ol>
                                    </div>
                                    <h4 className="page-title"> Dashboard</h4>
                                </div>
                                {/* <!--end page-title-box--> */}
                            </div>
                            {/* <!--end col--> */}
                        </div>
                        {/* <!-- end page title end breadcrumb --> */}

                        <div className="row">
                            <div className="col-md-12 col-lg-3 order-lg-1 order-md-2 order-sm-2">
                                <div className="card overflow-hidden">
                                    <div className="card-body">
                                        <div className="pt-3">
                                            <h3 className="text-dark text-center font-24 fw-bold line-height-lg">ACME INDIA INDUSTRIES <br />PVT.
                                                LTD.
                                            </h3>
                                            <div className="text-center text-muted font-16 fw-bold pt-3 pb-1">We Design and Develop Clean and
                                                High Quality Web Applications</div>

                                            <div className="text-center py-3 mb-3">
                                                <Link to="#" className="btn btn-primary">Know More</Link>
                                            </div>
                                            <img src="assets/images/small/business.png" alt="" className="img-fluid px-3 mb-2" />
                                        </div>
                                    </div>
                                    {/* <!--end card-body--> */}
                                </div>
                                {/* <!--end card--> */}
                            </div>
                            {/* <!--end col--> */}
                            <div className="col-lg-9 order-lg-2 order-md-1 order-sm-1">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card overflow-hidden">
                                            <div className="card-body">
                                                <div className="row d-flex">
                                                    <div className="col-3">
                                                        <i className="ti ti-users font-36 align-self-center text-dark"></i>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-12 ms-auto align-self-center">
                                                        <div id="dash_spark_1" className="mb-3"></div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-12 ms-auto align-self-center">
                                                        <h3 className="text-dark my-0 font-22 fw-bold">1200+</h3>
                                                        <p className="text-muted mb-0 fw-semibold">Employee strength

                                                        </p>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                </div>
                                                {/* <!--end row--> */}
                                            </div>
                                            {/* <!--end card-body--> */}
                                        </div>
                                        {/* <!--end card--> */}
                                    </div>
                                    {/* <!--end col--> */}
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card overflow-hidden">
                                            <div className="card-body">
                                                <div className="row d-flex">
                                                    <div className="col-3">
                                                        <i className="ti ti-clock font-36 align-self-center text-dark"></i>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-auto ms-auto align-self-center">
                                                        <span className="badge badge-soft-success px-2 py-1 font-11">Active</span>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-12 ms-auto align-self-center">
                                                        <div id="dash_spark_2" className="mb-3"></div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-12 ms-auto align-self-center">
                                                        <h3 className="text-dark my-0 font-22 fw-bold">1800+ </h3>
                                                        <p className="text-muted mb-0 fw-semibold">NEWLY FURNISHED COACHES</p>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                </div>
                                                {/* <!--end row--> */}
                                            </div>
                                            {/* <!--end card-body--> */}
                                        </div>
                                        {/* <!--end card--> */}
                                    </div>
                                    {/* <!--end col--> */}
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card overflow-hidden">
                                            <div className="card-body">
                                                <div className="row d-flex">
                                                    <div className="col-3">
                                                        <i className="ti ti-activity font-36 align-self-center text-dark"></i>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-12 ms-auto align-self-center">
                                                        <div id="dash_spark_3" className="mb-3"></div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-12 ms-auto align-self-center">
                                                        <h3 className="text-dark my-0 font-22 fw-bold">1600+</h3>
                                                        <p className="text-muted mb-0 fw-semibold"> COACHES REFURBISHED
                                                        </p>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                </div>
                                                {/* <!--end row--> */}
                                            </div>
                                            {/* <!--end card-body--> */}
                                        </div>
                                        {/* <!--end card--> */}
                                    </div>
                                    {/* <!--end col--> */}

                                    <div className="col-lg-3 col-md-6">
                                        <div className="card overflow-hidden">
                                            <div className="card-body">
                                                <div className="row d-flex">
                                                    <div className="col-3">
                                                        <i className="ti ti-confetti font-36 align-self-center text-dark"></i>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-auto ms-auto align-self-center">
                                                        <span className="badge badge-soft-danger px-2 py-1 font-11">-2%</span>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-12 ms-auto align-self-center">
                                                        <div id="dash_spark_4" className="mb-3"></div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-12 ms-auto align-self-center">
                                                        <h3 className="text-dark my-0 font-22 fw-bold">7000+</h3>
                                                        <p className="text-muted mb-0 fw-semibold"> COACHES UPGRADED & MODERNIZED
                                                        </p>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                </div>
                                                {/* <!--end row--> */}
                                            </div>
                                            {/* <!--end card-body--> */}
                                        </div>
                                        {/* <!--end card--> */}
                                    </div>
                                    {/* <!--end col--> */}
                                </div>
                                {/* <!--end row--> */}
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <h4 className="card-title">Progress Analysis </h4>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-auto">
                                                        <div className="dropdown">
                                                            <Link to="#" className="btn btn-sm btn-outline-light dropdown-toggle"
                                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                This Year<i className="las la-angle-down ms-1"></i>
                                                            </Link>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <Link className="dropdown-item" to="#">Today</Link>
                                                                <Link className="dropdown-item" to="#">Last Week</Link>
                                                                <Link className="dropdown-item" to="#">Last Month</Link>
                                                                <Link className="dropdown-item" to="#">This Year</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                </div>
                                                {/* <!--end row--> */}
                                            </div>
                                            {/* <!--end card-header--> */}
                                            <div className="card-body">
                                                <div className="">
                                                    <div id="ana_dash_1" className="apex-charts"></div>
                                                </div>
                                            </div>
                                            {/* <!--end card-body--> */}
                                        </div>
                                        {/* <!--end card--> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}

                        <div className="row">
                            <div className="col-lg-8">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h4 className="card-title">Project Details</h4>
                                            </div>
                                            {/* <!--end col--> */}
                                        </div>
                                        {/* <!--end row--> */}
                                    </div>
                                    {/* <!--end card-header--> */}
                                    <div className="card-body">
                                        <div className="table-responsive browser_users">
                                            <table className="table table-hover mb-0">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th className="border-top-0">Project Name</th>
                                                        <th className="border-top-0">Resource Allocation </th>
                                                        <th className="border-top-0">Progress </th>
                                                        <th className="border-top-0">Quantity</th>
                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>LSCN (Non-AC 3 Tier Sleeper
                                                            Coach) LHB Type Passenger Coach

                                                        </td>
                                                        <td>50<small className="text-muted">(52%)</small></td>
                                                        <td> 52.80%</td>
                                                        <td> 578 Coach</td>
                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                    <tr>
                                                        <td>LHB Type Power Car (LWLRRM
                                                            Break Luggage cum Generator)
                                                        </td>
                                                        <td>30<small className="text-muted">(47%)</small></td>
                                                        <td> 47.54%</td>
                                                        <td>24 Coach</td>
                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                    <tr>
                                                        <td>LWSCN EOG LHP Type
                                                            (Non-AC Sleeper Coach)
                                                        </td>
                                                        <td>20<small className="text-muted">(38%)</small></td>
                                                        <td> 41.12%</td>
                                                        <td> 45 Coach </td>
                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                    <tr>
                                                        <td>Supply of Furnishing Material and Complete Furnishing of TRC Coaches
                                                        </td>
                                                        <td>40<small className="text-muted">(31%)</small></td>
                                                        <td> 36.82%</td>
                                                        <td>50 Coach</td>
                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                    <tr>
                                                        <td>Conversion of BG Coaches into Camping Coaches for Track Machine Staff
                                                        </td>
                                                        <td>30<small className="text-muted">(52%)</small></td>
                                                        <td> 52.80%</td>
                                                        <td>45 Coach </td>
                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                </tbody>
                                            </table>
                                            {/* <!--end table--> */}
                                        </div>
                                        {/* <!--end /div--> */}
                                    </div>
                                    {/* <!--end card-body--> */}
                                </div>
                                {/* <!--end card--> */}
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h4 className="card-title">ACME’s Manufacturing Units
                                                </h4>
                                            </div>
                                            {/* <!--end col--> */}
                                        </div>
                                        {/* <!--end row--> */}
                                    </div>
                                    {/* <!--end card-header--> */}
                                    <div className="card-body">
                                        <div className="table-responsive browser_users">
                                            <table className="table mb-0">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th className="border-top-0">Production Unit</th>
                                                        <th className="border-top-0">Component Name</th>
                                                        <th className="border-top-0">Products Manufactured</th>
                                                        <th className="border-top-0">% Progress </th>
                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><Link to="#" className="text-primary">Ram Nagar Tehsil </Link></td>
                                                        <td>FRP Components
                                                        </td>
                                                        <td>566<small className="text-muted">(92%)</small></td>
                                                        <td> 52.80% <i className="fas fa-caret-up text-success font-16"></i></td>
                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                    <tr>
                                                        <td><Link to="#" className="text-primary"> Barhi Industrial Estate, </Link></td>
                                                        <td> APC Components

                                                        </td>
                                                        <td>498<small className="text-muted">(81%)</small></td>
                                                        <td> -17.20% <i className="fas fa-caret-down text-danger font-16"></i></td>

                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                    <tr>
                                                        <td><Link to="#" className="text-primary">Matiyala Store </Link></td>
                                                        <td>Braille Signages </td>
                                                        <td>455<small className="text-muted">(74%)</small></td>
                                                        <td> 41.12% <i className="fas fa-caret-up text-success font-16"></i></td>

                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                    <tr>
                                                        <td><Link to="#" className="text-primary">Dhaturi, Sonipat </Link></td>
                                                        <td>Component Fabrication
                                                        </td>
                                                        <td>361<small className="text-muted">(61%)</small></td>
                                                        <td> -8.24% <i className="fas fa-caret-down text-danger font-16"></i></td>
                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                    <tr>
                                                        <td><Link to="#" className="text-primary">Matiyala Store </Link></td>
                                                        <td>Braille Signages </td>
                                                        <td>455<small className="text-muted">(74%)</small></td>
                                                        <td> 41.12% <i className="fas fa-caret-up text-success font-16"></i></td>

                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                </tbody>
                                            </table>
                                            {/* <!--end table--> */}
                                        </div>
                                        {/* <!--end /div--> */}
                                    </div>
                                    {/* <!--end card-body--> */}
                                </div>
                                {/* <!--end card--> */}
                            </div>
                            {/* <!--end col--> */}
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h4 className="card-title">Our Services</h4>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-auto">
                                                <div className="dropdown">
                                                    <Link to="#" className="btn btn-sm btn-outline-light dropdown-toggle"
                                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        All<i className="las la-angle-down ms-1"></i>
                                                    </Link>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <Link className="dropdown-item" to="#">Purchases</Link>
                                                        <Link className="dropdown-item" to="#">Emails</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                        </div>
                                        {/* <!--end row--> */}
                                    </div>
                                    {/* <!--end card-header--> */}
                                    <div className="card-body">
                                        <div className="text-center">
                                            <div id="ana_device" className="apex-charts"></div>
                                            <h6 className="bg-light-alt py-3 px-2 mb-0">
                                                <i data-feather="calendar" className="align-self-center icon-xs me-1"></i>
                                                01 April 2023 to 31 March 2024
                                            </h6>
                                        </div>
                                        <div className="table-responsive mt-2">
                                            <table className="table border-dashed mb-0">
                                                <thead>

                                                    <tr>
                                                        <th>Service Name</th>
                                                        <th className="text-end">Resources</th>
                                                        <th className="text-end">Progress</th>
                                                        <th className="text-end">Week</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td>Upgradation/Modernization of IR coaches</td>
                                                        <td className="text-end">43</td>
                                                        <td className="text-end">70%</td>
                                                        <td className="text-end">-12</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Component Manufacturing</td>
                                                        <td className="text-end">43</td>
                                                        <td className="text-end">70%</td>
                                                        <td className="text-end">-12</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Newly Furnished Coaches </td>
                                                        <td className="text-end">43</td>
                                                        <td className="text-end">80%</td>
                                                        <td className="text-end">-24</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Refurbishment Of Old Coaches </td>
                                                        <td className="text-end">354</td>
                                                        <td className="text-end">90</td>
                                                        <td className="text-end">-20</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                            {/* <!--end /table--> */}
                                        </div>
                                        {/* <!--end /div--> */}
                                    </div>
                                    {/* <!--end card-body--> */}
                                </div>
                                {/* <!--end card--> */}
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <h3 className="m-0 align-self-center fw-bold font-22">80</h3>
                                            <div className="d-block ms-3 align-self-center">
                                                <span className="badge bg-soft-primary px-2 py-1 font-11">Right now</span>
                                                <h5 className="my-2">Traffic Sources</h5>
                                                <p className="mb-2 text-muted">It is a long established fact that a reader will
                                                    be of a page when looking at its layout.
                                                </p>
                                                <Link to="#" className="btn btn-primary">Read More <i className="las la-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--end card-body--> */}
                                </div>
                                {/* <!--end card--> */}
                            </div>
                            {/* <!--end col--> */}

                        </div>
                        {/* <!--end row--> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default index