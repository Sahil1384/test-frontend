import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function AnalyticsIndex() {
    return (
        <>
            <Header />
            <div className='page-wrapper'>
                <div className='page-content-tab'>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="page-title-box">
                                    <div class="float-end">
                                        <ol class="breadcrumb">
                                            {/* <!-- <li class="breadcrumb-item"><Link to="#"></Link>
                        </li> --> */}
                                            <li class="breadcrumb-item"><Link to="#!">Analytics /</Link>
                                            </li>
                                            <li class="breadcrumb-item active"> Dashboard</li>
                                        </ol>
                                    </div>
                                    <h4 class="page-title"> Dashboard</h4>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12 col-lg-3 order-lg-1 order-md-2 order-sm-2">
                                <div class="card overflow-hidden">
                                    <div class="card-body">
                                        <div class="pt-3">
                                            <h3 class="text-dark text-center font-24 fw-bold line-height-lg">ACME INDIA INDUSTRIES <br />PVT.
                                                LTD.
                                            </h3>
                                            <div class="text-center text-muted font-16 fw-bold pt-3 pb-1">We Design and Develop Clean and
                                                High Quality Web Applications</div>

                                            <div class="text-center py-3 mb-3">
                                                <Link to="#" class="btn btn-primary">Know More</Link>
                                            </div>
                                            <img src="assets/images/small/business.png" alt="" class="img-fluid px-3 mb-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-9 order-lg-2 order-md-1 order-sm-1">
                                <div class="row justify-content-center">
                                    <div class="col-lg-3 col-md-6">
                                        <div class="card overflow-hidden">
                                            <div class="card-body">
                                                <div class="row d-flex">
                                                    <div class="col-3">
                                                        <i class="ti ti-users font-36 align-self-center text-dark"></i>
                                                    </div>
                                                    <div class="col-12 ms-auto align-self-center">
                                                        <div id="dash_spark_1" class="mb-3"></div>
                                                    </div>
                                                    <div class="col-12 ms-auto align-self-center">
                                                        <h3 class="text-dark my-0 font-22 fw-bold">1200+</h3>
                                                        <p class="text-muted mb-0 fw-semibold">Employee strength

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6">
                                        <div class="card overflow-hidden">
                                            <div class="card-body">
                                                <div class="row d-flex">
                                                    <div class="col-3">
                                                        <i class="ti ti-clock font-36 align-self-center text-dark"></i>
                                                    </div>
                                                    <div class="col-auto ms-auto align-self-center">
                                                        <span class="badge badge-soft-success px-2 py-1 font-11">Active</span>
                                                    </div>
                                                    <div class="col-12 ms-auto align-self-center">
                                                        <div id="dash_spark_2" class="mb-3"></div>
                                                    </div>
                                                    <div class="col-12 ms-auto align-self-center">
                                                        <h3 class="text-dark my-0 font-22 fw-bold">1800+ </h3>
                                                        <p class="text-muted mb-0 fw-semibold">NEWLY FURNISHED COACHES</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6">
                                        <div class="card overflow-hidden">
                                            <div class="card-body">
                                                <div class="row d-flex">
                                                    <div class="col-3">
                                                        <i class="ti ti-activity font-36 align-self-center text-dark"></i>
                                                    </div>
                                                    <div class="col-12 ms-auto align-self-center">
                                                        <div id="dash_spark_3" class="mb-3"></div>
                                                    </div>
                                                    <div class="col-12 ms-auto align-self-center">
                                                        <h3 class="text-dark my-0 font-22 fw-bold">1600+</h3>
                                                        <p class="text-muted mb-0 fw-semibold"> COACHES REFURBISHED
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-6">
                                        <div class="card overflow-hidden">
                                            <div class="card-body">
                                                <div class="row d-flex">
                                                    <div class="col-3">
                                                        <i class="ti ti-confetti font-36 align-self-center text-dark"></i>
                                                    </div>
                                                    <div class="col-auto ms-auto align-self-center">
                                                        <span class="badge badge-soft-danger px-2 py-1 font-11">-2%</span>
                                                    </div>
                                                    <div class="col-12 ms-auto align-self-center">
                                                        <div id="dash_spark_4" class="mb-3"></div>
                                                    </div>
                                                    <div class="col-12 ms-auto align-self-center">
                                                        <h3 class="text-dark my-0 font-22 fw-bold">7000+</h3>
                                                        <p class="text-muted mb-0 fw-semibold"> COACHES UPGRADED & MODERNIZED
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-header">
                                                <div class="row align-items-center">
                                                    <div class="col">
                                                        <h4 class="card-title">Progress Analysis </h4>
                                                    </div>
                                                    <div class="col-auto">
                                                        <div class="dropdown">
                                                            <Link to="#" class="btn btn-sm btn-outline-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                This Year<i class="las la-angle-down ms-1"></i>
                                                            </Link>
                                                            <div class="dropdown-menu dropdown-menu-end">
                                                                <Link class="dropdown-item" to="#">Today</Link>
                                                                <Link class="dropdown-item" to="#">Last Week</Link>
                                                                <Link class="dropdown-item" to="#">Last Month</Link>
                                                                <Link class="dropdown-item" to="#">This Year</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <div class="">
                                                    <div id="ana_dash_1" class="apex-charts"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-8">
                                <div class="card">
                                    <div class="card-header">
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h4 class="card-title">Project Details</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="table-responsive browser_users">
                                            <table class="table table-hover mb-0">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th class="border-top-0">Project Name</th>
                                                        <th class="border-top-0">Resource Allocation </th>
                                                        <th class="border-top-0">Progress </th>
                                                        <th class="border-top-0">Quantity</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>LSCN (Non-AC 3 Tier Sleeper
                                                            Coach) LHB Type Passenger Coach

                                                        </td>
                                                        <td>50<small class="text-muted">(52%)</small></td>
                                                        <td> 52.80%</td>
                                                        <td> 578 Coach</td>
                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                    <tr>
                                                        <td>LHB Type Power Car (LWLRRM
                                                            Break Luggage cum Generator)
                                                        </td>
                                                        <td>30<small class="text-muted">(47%)</small></td>
                                                        <td> 47.54%</td>
                                                        <td>24 Coach</td>
                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                    <tr>
                                                        <td>LWSCN EOG LHP Type
                                                            (Non-AC Sleeper Coach)
                                                        </td>
                                                        <td>20<small class="text-muted">(38%)</small></td>
                                                        <td> 41.12%</td>
                                                        <td> 45 Coach </td>
                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                    <tr>
                                                        <td>Supply of Furnishing Material and Complete Furnishing of TRC Coaches
                                                        </td>
                                                        <td>40<small class="text-muted">(31%)</small></td>
                                                        <td> 36.82%</td>
                                                        <td>50 Coach</td>
                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                    <tr>
                                                        <td>Conversion of BG Coaches into Camping Coaches for Track Machine Staff
                                                        </td>
                                                        <td>30<small class="text-muted">(52%)</small></td>
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
                                <div class="card">
                                    <div class="card-header">
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h4 class="card-title">ACME’s Manufacturing Units
                                                </h4>
                                            </div>
                                            {/* <!--end col--> */}
                                        </div>
                                        {/* <!--end row--> */}
                                    </div>
                                    {/* <!--end card-header--> */}
                                    <div class="card-body">
                                        <div class="table-responsive browser_users">
                                            <table class="table mb-0">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th class="border-top-0">Production Unit</th>
                                                        <th class="border-top-0">Component Name</th>
                                                        <th class="border-top-0">Products Manufactured</th>
                                                        <th class="border-top-0">% Progress </th>
                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><Link to="#" class="text-primary">Ram Nagar Tehsil </Link></td>
                                                        <td>FRP Components
                                                        </td>
                                                        <td>566<small class="text-muted">(92%)</small></td>
                                                        <td> 52.80% <i class="fas fa-caret-up text-success font-16"></i></td>
                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                    <tr>
                                                        <td><Link to="#" class="text-primary"> Barhi Industrial Estate, </Link></td>
                                                        <td> APC Components

                                                        </td>
                                                        <td>498<small class="text-muted">(81%)</small></td>
                                                        <td> -17.20% <i class="fas fa-caret-down text-danger font-16"></i></td>

                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                    <tr>
                                                        <td><Link to="#" class="text-primary">Matiyala Store </Link></td>
                                                        <td>Braille Signages </td>
                                                        <td>455<small class="text-muted">(74%)</small></td>
                                                        <td> 41.12% <i class="fas fa-caret-up text-success font-16"></i></td>

                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                    <tr>
                                                        <td><Link to="#" class="text-primary">Dhaturi, Sonipat </Link></td>
                                                        <td>Component Fabrication
                                                        </td>
                                                        <td>361<small class="text-muted">(61%)</small></td>
                                                        <td> -8.24% <i class="fas fa-caret-down text-danger font-16"></i></td>
                                                    </tr>
                                                    {/* <!--end tr--> */}
                                                    <tr>
                                                        <td><Link to="#" class="text-primary">Matiyala Store </Link></td>
                                                        <td>Braille Signages </td>
                                                        <td>455<small class="text-muted">(74%)</small></td>
                                                        <td> 41.12% <i class="fas fa-caret-up text-success font-16"></i></td>

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
                            <div class="col-lg-4">
                                <div class="card">
                                    <div class="card-header">
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h4 class="card-title">Our Services</h4>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div class="col-auto">
                                                <div class="dropdown">
                                                    <Link to="#" class="btn btn-sm btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        All<i class="las la-angle-down ms-1"></i>
                                                    </Link>
                                                    <div class="dropdown-menu dropdown-menu-end">
                                                        <Link class="dropdown-item" to="#">Purchases</Link>
                                                        <Link class="dropdown-item" to="#">Emails</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                        </div>
                                        {/* <!--end row--> */}
                                    </div>
                                    {/* <!--end card-header--> */}
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div id="ana_device" class="apex-charts"></div>
                                            <h6 class="bg-light-alt py-3 px-2 mb-0">
                                                <i data-feather="calendar" class="align-self-center icon-xs me-1"></i>
                                                01 April 2023 to 31 March 2024
                                            </h6>
                                        </div>
                                        <div class="table-responsive mt-2">
                                            <table class="table border-dashed mb-0">
                                                <thead>

                                                    <tr>
                                                        <th>Service Name</th>
                                                        <th class="text-end">Resources</th>
                                                        <th class="text-end">Progress</th>
                                                        <th class="text-end">Week</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td>Upgradation/Modernization of IR coaches</td>
                                                        <td class="text-end">43</td>
                                                        <td class="text-end">70%</td>
                                                        <td class="text-end">-12</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Component Manufacturing</td>
                                                        <td class="text-end">43</td>
                                                        <td class="text-end">70%</td>
                                                        <td class="text-end">-12</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Newly Furnished Coaches </td>
                                                        <td class="text-end">43</td>
                                                        <td class="text-end">80%</td>
                                                        <td class="text-end">-24</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Refurbishment Of Old Coaches </td>
                                                        <td class="text-end">354</td>
                                                        <td class="text-end">90</td>
                                                        <td class="text-end">-20</td>
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
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <h3 class="m-0 align-self-center fw-bold font-22">80</h3>
                                            <div class="d-block ms-3 align-self-center">
                                                <span class="badge bg-soft-primary px-2 py-1 font-11">Right now</span>
                                                <h5 class="my-2">Traffic Sources</h5>
                                                <p class="mb-2 text-muted">It is a long established fact that a reader will
                                                    be of a page when looking at its layout.
                                                </p>
                                                <Link to="#" class="btn btn-primary">Read More <i class="las la-arrow-right"></i></Link>
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
            </div >
            <Footer />
        </>
    )
}

export default AnalyticsIndex
