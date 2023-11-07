import React, { useState, useEffect } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../redux/features/authSlice";

const initialState = {
    email: "",
    password: "",
};

function Login() {
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const [formValue, setFormValue] = useState(initialState);
    const { loading, error } = useSelector((state) => ({ ...state.auth }));
    const { email, password } = formValue;
    const dispatch = useDispatch();
    const navigate = useNavigate();



    useEffect(() => {
        error && toast.error(error);
    }, [error]);

    const validateForm = (values) => {
        const error = {};
        const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            error.email = "Email is required";
        } else if (!regex.test(values.email)) {
            error.email = "Please enter a valid email address";
        } else if (values.email.length < 15) {
            error.email = "Email must be more than 15 characters";
        } else if (values.email.length > 40) {
            error.email = "Email cannot exceed more than 40 characters";
        }
        if (!values.password) {
            error.password = "Password is required";
        } else if (values.password.length < 8) {
            error.password = "Password must be more than 8 characters";
        } else if (values.password.length > 16) {
            error.password = "Password cannot exceed more than 16 characters";
        }
        return error;
    };

    const handleSubmit = (e) => {
        // console.log("27 ", toast);
        e.preventDefault();

        const validate = validateForm(formValue);
        console.log("47 ", validate);
        if (validate.email || validate.password) {
            setFormErrors(validate);
            return;
        }
        setIsSubmit(true);

        // return
        if (email && password) {
            dispatch(login({ formValue, navigate, toast }));
        }
    };
    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

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
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-4 mx-auto">
                                        <div className="card">
                                            <div className="card-body p-0 auth-header-box">
                                                <div className="text-center p-3">
                                                    <Link to="/" className="logo logo-admin">
                                                        <img src="assets/images/logo.png" height="50" alt="logo" className="auth-logo" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="card-body pt-0">
                                                <form className="my-4" onSubmit={handleSubmit}>
                                                    <div className="form-group mb-2">
                                                        <label className="form-label" htmlFor="email">Email <span className="text-danger">*</span></label>
                                                        <input type="text"
                                                            value={email}
                                                            name="email"
                                                            onChange={onInputChange}
                                                            minLength={15}
                                                            maxLength={40}
                                                            className="form-control" id="email"
                                                            placeholder="Enter Email" />
                                                    </div>
                                                    <p className="text-danger">{formErrors.email}</p>
                                                    {/* <!--end form-group--> */}

                                                    <div className="form-group mb-2">
                                                        <label className="form-label" htmlFor="userpassword">Password <span className="text-danger">*</span></label>
                                                        <input type="password"
                                                            value={password}
                                                            name="password"
                                                            onChange={onInputChange}
                                                            className="form-control"
                                                            id="userpassword" placeholder="Enter password" />
                                                    </div>
                                                    <p className="text-danger">{formErrors.password}</p>
                                                    {/* <!--end form-group--> */}

                                                    <div className="form-group row mt-3">
                                                        <div className="col-sm-6">
                                                            <div className="form-check form-switch form-switch-success">
                                                                <input className="form-check-input" type="checkbox"
                                                                    id="customSwitchSuccess" />
                                                                <label className="form-check-label" htmlFor="customSwitchSuccess">Remember
                                                                    me</label>
                                                            </div>
                                                        </div>
                                                        {/* <!--end col--> */}
                                                        <div className="col-sm-6 text-end">
                                                            <NavLink to="/ForgotPassword" className="text-muted font-13"><i
                                                                className="dripicons-lock"></i> Forgot password?</NavLink>
                                                        </div>
                                                        {/* <!--end col--> */}
                                                    </div>
                                                    {/* <!--end form-group--> */}
                                                    <div className="form-group mb-0 row">
                                                        <div className="col-12">
                                                            <div className="d-grid mt-3">
                                                                <input type="submit" className="btn btn-primary w-100" value="login" />
                                                            </div>
                                                        </div>
                                                        {/* <!--end col--> */}
                                                    </div>
                                                    {/* <!--end form-group--> */}
                                                </form>
                                                <h3 className="text-danger">{error}</h3>
                                                {/* <!--end form--> */}
                                                {/* <div className="m-3 text-center text-muted">
                                                    <p className="mb-0">Don't have an account ? <Link to="auth-sinup.php"
                                                        className="text-primary ms-2">Sign up</Link></p>
                                                </div> */}
                                            </div>
                                            {/* <!--end card-body--> */}
                                        </div>
                                        {/* <!--end card--> */}
                                    </div>
                                    {/* <!--end col--> */}
                                </div>
                                {/* <!--end row--> */}
                            </div>
                            {/* <!--end card-body--> */}
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}
                </div>
            </div>
        </>
    )
}

export default Login