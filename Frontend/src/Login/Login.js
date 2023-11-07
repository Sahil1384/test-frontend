import React from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../redux/features/authSlice";
import { useFormik } from "formik"
import { loginSchema } from "../schemas/Index";

const initialValues = {
    email: "",
    password: "",
};

function Login() {
    const { error } = useSelector((state) => ({ ...state.auth }));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: loginSchema,
            onSubmit: (values, action) => {
                // console.log("38 ", values)
                dispatch(login({ values, navigate, toast }));
                action.resetForm();
            },
        });

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
                                                            name="email"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            autoComplete="off"
                                                            maxLength={40}
                                                            className="form-control" id="email"
                                                            placeholder="Enter Email" />
                                                    </div>
                                                    {touched.email && errors.email ? (
                                                        <p className="text-danger">{errors.email}</p>
                                                    ) : null}
                                                    {/* <!--end form-group--> */}

                                                    <div className="form-group mb-2">
                                                        <label className="form-label" htmlFor="userpassword">Password <span className="text-danger">*</span></label>
                                                        <input type="password"
                                                            name="password"
                                                            value={values.password}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            autoComplete="off"
                                                            maxLength={40}
                                                            className="form-control"
                                                            id="userpassword" placeholder="Enter password" />
                                                    </div>
                                                    {touched.password && errors.password ? (
                                                        <p className="text-danger">{errors.password}</p>
                                                    ) : null}
                                                    {/* <!--end form-group--> */}

                                                    <div className="form-group row mt-3">
                                                        <div className="col-sm-6">
                                                            {/* <div className="form-check form-switch form-switch-success">
                                                                <input className="form-check-input" type="checkbox"
                                                                    id="customSwitchSuccess" />
                                                                <label className="form-check-label" htmlFor="customSwitchSuccess">Remember
                                                                    me</label>
                                                            </div> */}
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