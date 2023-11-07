import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            {/* <!--Start Rightbar--> */}
            {/* <!--Start Rightbar/offcanvas--> */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="Appearance" aria-labelledby="AppearanceLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 className="m-0 font-14" id="AppearanceLabel">Appearance</h5>
                    <button type="button" className="btn-close text-reset p-0 m-0 align-self-center" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <h6>Account Settings</h6>
                    <div className="p-2 text-start mt-3">
                        <div className="form-check form-switch mb-2">
                            <input className="form-check-input" type="checkbox" id="settings-switch1" />
                            <label className="form-check-label" htmlFor="settings-switch1">Auto updates</label>
                        </div>
                        {/* <!--end form-switch--> */}
                        <div className="form-check form-switch mb-2">
                            <input className="form-check-input" type="checkbox" id="settings-switch2" defaultChecked />
                            <label className="form-check-label" htmlFor="settings-switch2">Location Permission</label>
                        </div>
                        {/* <!--end form-switch--> */}
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="settings-switch3" />
                            <label className="form-check-label" htmlFor="settings-switch3">Show offline Contacts</label>
                        </div>
                        {/* <!--end form-switch--> */}
                    </div>
                    {/* <!--end /div--> */}
                    <h6>General Settings</h6>
                    <div className="p-2 text-start mt-3">
                        <div className="form-check form-switch mb-2">
                            <input className="form-check-input" type="checkbox" id="settings-switch4" />
                            <label className="form-check-label" htmlFor="settings-switch4">Show me Online</label>
                        </div>
                        {/* <!--end form-switch--> */}
                        <div className="form-check form-switch mb-2">
                            <input className="form-check-input" type="checkbox" id="settings-switch5" defaultChecked />
                            <label className="form-check-label" htmlFor="settings-switch5">Status visible to all</label>
                        </div>
                        {/* <!--end form-switch--> */}
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="settings-switch6" />
                            <label className="form-check-label" htmlFor="settings-switch6">Notifications Popup</label>
                        </div>
                        {/* <!--end form-switch--> */}
                    </div>
                    {/* <!--end /div--> */}
                </div>
                {/* <!--end offcanvas-body--> */}
            </div>
            {/* <!--end Rightbar/offcanvas--> */}
            {/* <!--end Rightbar--> */}

            {/* <!--Start Footer--> */}
            {/* <!-- Footer Start --> */}
            <footer className="footer text-center text-sm-start">
                &copy; <script>
                    document.write(new Date().getFullYear())
                </script> ACME INDIA INDUSTRIES PVT. LTD. <span className="text-muted d-none d-sm-inline-block float-end">Crafted with
                    <i className="mdi mdi-heart text-danger"></i> by <Link to="https://fictivebox.com/" target="_blank"
                        className="text-decoration-none text-dark">Fictivebox</Link></span>
            </footer>
            {/* <!-- end Footer --> */}
            {/* <!--end footer--> */}
        </>
    )
}

export default Footer