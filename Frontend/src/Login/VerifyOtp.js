import React from 'react'
import { useLocation, Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function VerifyOtp() {


    const location = useLocation();

    //console.log(location.state.email);

    const email = location.state.email;
    // const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const [counter, setCounter] = React.useState(60);
    const [condition, setCondition] = useState(true)

    let reverseCounter = () => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if (counter === 0) {
            setCondition(false)
        }
    }

    React.useEffect(() => {
        reverseCounter()
    }, [counter]);




    const handleSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()

        const data = {
            email, otp
        }
        // console.log("19 ", data);
        // Handle validations
        axios
            .post("http://13.200.102.128:8001/api/otpverification", data)
            .then(response => {

                // console.log("25 ", response);
                // Handle response
                if (response?.data?.success) {
                    navigate("/ChangePassword", { state: { email: email } });
                } else {

                    if (response?.data?.message === 'error') {
                        setError(response?.data?.response);
                    }
                    else if (response?.data?.message === 'Error validation') {

                        setError(response?.data?.response?.otp);

                    }


                }
            }).catch((err) => {
                // console.log("33 ", err);
                setError('Invalid Credentials')
            })
    }




    const handleSubmit2 = e => {
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


                    reverseCounter();
                    setCounter(60);
                    setCondition(true);


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
                                                <Link to="index.php" className="logo logo-admin">
                                                    <img src="assets/images/logo.png" height="50" alt="logo" className="auth-logo" />
                                                </Link>
                                                {/* <!-- <h4 className="mt-3 mb-1 fw-semibold text-white font-18">Reset Password For Unikit</h4>
                                            <p className="text-muted  mb-0">Enter your Email and instructions will be sent to you!</p> --> */}
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">
                                            <form className="mt-4 mb-3" action="" onSubmit={handleSubmit}>
                                                <div className="form-group mb-3">
                                                    <label className="form-label" htmlFor="">OTP</label>
                                                    <input type="text" className="form-control" id="otp" name="otp" placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} />
                                                    <p style={{ color: "red" }}>{error}</p>
                                                </div>
                                                {/* <!--end form-group--> */}

                                                <div className="form-group mb-0 row">
                                                    <div className="d-flex justify-content-between gap-3">
                                                        <button className="btn btn-primary w-100" type="submit">Submit <i className="fas fa-sign-in-alt ms-1"></i></button>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                </div>
                                                {condition ? <span className="d-block mt-3 text-center" type="button" id="countdowntimer" >Your OTP will expire in {counter}s </span> : <button className="btn btn-de-danger w-100 mt-3" type="button" id="resendcode" onClick={handleSubmit2}>Resend Code</button>}
                                            </form>

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
                    {/* <!--end row--> */}
                </div>
            </div>
        </>
    )
}

export default VerifyOtp