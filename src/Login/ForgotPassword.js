import React from 'react'
import { NavLink, Link } from "react-router-dom"
import axios from "axios"

import { useNavigate } from "react-router-dom";
import { useState } from "react"


function ForgotPassword() {

    const [email, setEmail] = useState("")

    const [error, setError] = useState("")
    const navigate = useNavigate();


    const handleSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()

        const data = {
            email
        }
        //  console.log("19 ", data);
        // Handle validations
        axios
            .post("http://13.200.102.128:8001/api/forgetpassword", data)
            .then(response => {

                //console.log("25 ", response); 

                //return false;
                // Handle response
                if (response?.data?.success) {
                    navigate("/VerifyOtp", { state: { email: email } });
                } else {

                    if (response?.data?.message === 'error') {
                        setError(response?.data?.response);
                    }
                    else if (response?.data?.message === 'Error validation') {

                        setError(response?.data?.response?.email);

                    }


                }
            }).catch((err) => {
                // console.log("33 ", err);
                setError('Invalid Credentials')
            })
    }

    const mystyle = {
        backgroundImage: "url('assets/images/p-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };

    return (
        <>
            <div className="auth-page" style={mystyle}>
                <div className="container-md">
                    <div className="row vh-100 d-flex justify-content-center">
                        <div className="col-12 align-self-center">
                            <div className="row">
                                <div className="col-lg-4 mx-auto">
                                    <div className="card">
                                        <div className="card-body p-0 auth-header-box">
                                            <div className="text-center p-3">
                                                <Link to="/" className="logo logo-admin">
                                                    <img src="assets/images/logo.png" height="50" alt="logo" className="auth-logo" />
                                                </Link>
                                                {/* <!-- <h4 className="mt-3 mb-1 fw-semibold text-white font-18">Reset Password For Unikit</h4>
                                            <p className="text-muted  mb-0">Enter your Email and instructions will be sent to you!</p> --> */}
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">
                                            <form className="mt-4 mb-3" action="https://mannatthemes.com/unikit/default/index.html" onSubmit={handleSubmit}>
                                                <div className="form-group mb-3">
                                                    <label className="form-label" htmlFor="email">Email</label>
                                                    <input type="text" className="form-control" id="email" name="email" placeholder="Enter Email Address" value={email} onChange={e => setEmail(e.target.value)} />
                                                    <p style={{ color: "red" }}>{error}</p>
                                                </div>
                                                {/* <!--end form-group--> */}

                                                <div className="form-group mb-0 row">
                                                    <div className="col-12">
                                                        <button className="btn btn-primary w-100" type="submit">Reset <i className="fas fa-sign-in-alt ms-1"></i></button>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                </div>
                                                {/* <!--end form-group--> */}
                                            </form>

                                            {/* <!--end form--> */}
                                            <div className="text-center text-muted">
                                                <p className="mb-1">Remember It ? <NavLink to="/" className="text-primary ms-2">Sign in </NavLink></p>
                                            </div>
                                        </div>
                                        {/* <!--end card-body--> */}
                                        <div className="card-body bg-light-alt text-center">
                                            &copy; <script>
                                                document.write(new Date().getFullYear())
                                            </script> Unikit
                                        </div>
                                    </div>
                                    {/* <!--end card--> */}
                                </div>
                                {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}
                </div>
            </div>
        </>
    )
}

export default ForgotPassword