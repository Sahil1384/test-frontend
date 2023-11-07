import React from 'react'
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function ChangePassword() {

    const location = useLocation();

    //console.log(location.state.email);

    const email = location.state.email;
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [newPassworderror, setNewPasswordError] = useState("")
    const [confirmPassworderror, setConfirmPasswordError] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()

        const data = {
            email, newPassword, confirmPassword
        }
        // console.log("19 ", data);
        // Handle validations
        axios
            .post("http://13.200.102.128:8001/api/updatepassword", data)
            .then(response => {

                console.log("25 ", response);
                // Handle response
                if (response?.data?.success) {
                    navigate("/");
                } else {

                    if (response?.data?.message === 'error') {
                        setError(response?.data?.response);
                    }
                    else if (response?.data?.message === 'Error validation') {
                        //  error.email
                        setNewPasswordError(response?.data?.response?.newPassword);
                        setConfirmPasswordError(response?.data?.response?.confirmPassword);
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
                                                <Link to="#" className="logo logo-admin">
                                                    <img src="assets/images/logo.png" height="50" alt="logo" className="auth-logo" />
                                                </Link>
                                                {/* <!-- <h4 className="mt-3 mb-1 fw-semibold text-white font-18">Reset Password For Unikit</h4>
                                            <p className="text-muted  mb-0">Enter your Email and instructions will be sent to you!</p> --> */}
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">
                                            <form className="mt-4 mb-3" action="" onSubmit={handleSubmit}>
                                                <div className="form-group mb-3">
                                                    <label className="form-label" htmlFor="">New Password</label>
                                                    <input type="text" className="form-control" id="newPassword" name="newPassword" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                                                    <p style={{ color: "red" }}>{newPassworderror}</p>
                                                </div>

                                                <div className="form-group mb-3">
                                                    <label className="form-label" htmlFor="">Confirm Password</label>
                                                    <input type="text" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                                                    <p style={{ color: "red" }}>{confirmPassworderror}</p>
                                                </div>

                                                <div className="form-group mb-0 row">
                                                    <div className="col-12">
                                                        <button className="btn btn-primary w-100" type="submit">Submit <i className="fas fa-sign-in-alt ms-1"></i></button>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                </div>
                                                {/* <!--end form-group--> */}
                                            </form>
                                            <p style={{ color: "red" }}>{error}</p>
                                            {/* <!--end form--> */}
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
                </div>
            </div>
        </>
    )
}

export default ChangePassword