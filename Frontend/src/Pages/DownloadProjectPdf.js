import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function DownloadProjectPdf() {
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
                                            <li className="breadcrumb-item active">Download Project Pdf</li>
                                        </ol>
                                    </div>
                                    <h4 className="page-title">Download Project Pdf</h4>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body py-5 text-center">
                                        <h3 className='text-center mb-4 text-success'>Thanks you for
                                            submitting the project details</h3>
                                        <button class="btn btn-sm btn-primary">Download as PDF</button>
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

export default DownloadProjectPdf
